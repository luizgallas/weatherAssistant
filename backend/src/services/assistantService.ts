import OpenAI from "openai";

import { WeatherService } from './weatherService';
import { Recommendation } from "../types/Recommendation";

export class AssistantService {
    private weatherService: WeatherService;
    private openAi: OpenAI;

    constructor() {
        this.weatherService = new WeatherService();
        this.openAi = new OpenAI({
            apiKey: process.env.OPEN_AI_API_KEY
        });
    }


    async analyzeWeatherData(location: string) {
        const weatherData = await this.weatherService.getWeatherData(location);
        const weatherAnalysis = await this.weatherService.measureWeatherData(weatherData);
        const recommendation = await this.weatherService.generateRecommendation(weatherData, weatherAnalysis);
    
        return recommendation;
    }

    async processAssistantTask(location: string): Promise<Recommendation | undefined> {
        const assistant = await this.openAi.beta.assistants.retrieve("asst_ywZw5Kky8Z7uPU4YIZN7GsLZ");

        const thread = await this.openAi.beta.threads.create();

        await this.openAi.beta.threads.messages.create(thread.id, {
            role: "user",
            content: `Should I go out based on the weather on ${location}? Why?`,
          });

          const run = await this.openAi.beta.threads.runs.create(thread.id, {
            assistant_id: assistant.id,
          });

          let runStatus = await this.retrieveRunStatus(thread.id, run.id);

          while (runStatus.status !== "completed") {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            runStatus = await this.retrieveRunStatus(thread.id, run.id);

            if (runStatus.status === "requires_action") {
                const toolCalls = runStatus.required_action?.submit_tool_outputs.tool_calls ?? [];
                const toolOutputs = [];

                for (const toolCall of toolCalls) {
                    const functionName = toolCall.function.name;

                    if (functionName === "analyzeWeatherData") {
                        const location = JSON.parse(toolCall.function.arguments).location;
                        const output = await this.analyzeWeatherData(location);

                        toolOutputs.push({
                            tool_call_id: toolCall.id,
                            output: output,
                        });
                    }
                }
                await this.openAi.beta.threads.runs.submitToolOutputs(
                    thread.id,
                    run.id,
                    { tool_outputs: toolOutputs }
                );
                continue;
            } else if (["failed", "cancelled", "expired"].includes(runStatus.status)) {
                break;
            }
        
            const messages = await this.openAi.beta.threads.messages.list(thread.id);

            const lastMessageForRun = messages.data.filter((message) =>
                message.run_id === run.id && message.role === "assistant"
            )[0];

            return lastMessageForRun.content[0] as Recommendation;
        }

        return undefined;
    }
    
    retrieveRunStatus(threadId: string, runId: string) {
        return this.openAi.beta.threads.runs.retrieve(
            threadId,
            runId
        );
    }
}