import { Router, Request, Response } from 'express';
import { AssistantService } from '../services/weatherService';

const assistantController = Router();
const assistantService = new AssistantService();

assistantController.post('/weather', async (req: Request, res: Response) => {
    console.log(req.body)
    if (!req.body || !req.body.location) {
        return res.status(400).json({ error: 'A location is required to measure the weather conditions.' });
    }

    const { location } = req.body;

    try {
        const weatherData = await assistantService.getWeatherData(location);
        const weatherAnalysis = await assistantService.measureWeatherData(weatherData);
        const recommendation = await assistantService.generateRecommendation(weatherData, weatherAnalysis);

        res.send(recommendation);
    } catch(error) {
        res.send(error);
    }
});


export default assistantController;