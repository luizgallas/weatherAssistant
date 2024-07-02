import axios from "axios";
import { WeatherData } from "../types/WeatherInfo";

export class WeatherService {
  OPEN_WEATHER_API_KEY = process.env.OPEN_WEATHER_API_KEY;

  async getWeatherData(location: string): Promise<WeatherData> {
    try {
      const { data } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric`
      );

      return data;
    } catch(error: any) {
      throw new Error(`Error fetching weather data: ${error?.message}`);
    }
  }

  async measureWeatherData(weatherData: WeatherData): Promise<string> {
    const { main, wind } = weatherData;
    const { feels_like: feelsLike, humidity } = main;
    const windSpeed = wind.speed;
    const rain = weatherData.rain ? weatherData.rain['3h'] : 0;

    if (feelsLike < 25 && humidity < 80 && rain === 0 && windSpeed < 5) {
        return "it's a great day for going outside!";
    } else {
        return "you might want to stay at home today.";
    }
  }

  async generateRecommendation(
    weatherData: WeatherData, 
    weatherAnalysis: string
  ): Promise<string> {
    try {
      const temperature = Math.round(Math.floor(weatherData.main.feels_like));
      const humidity = weatherData.main.humidity;
      const rain = weatherData.rain ? weatherData.rain['3h'] : 'no';
      const wind = weatherData.wind.speed;

      const recommendation = `
        Today in ${weatherData.name}, ${weatherData.sys.country}, The temperature feels like ${temperature}°C,
        with a humidity of ${humidity}%. There has been ${rain} rainfall in the last 3 hours, and the wind speed is ${wind} m/s. 
        Based on these conditions, ${weatherAnalysis}.
      `;

      return recommendation;
    } catch(error) {
      throw new Error("Unable to generate weather recommendation.")
    }
  }
}