export interface WeatherData {
    name: string;
    sys: {
      country: string
    };
    main: {
      feels_like: number;
      humidity: number;
    };
    rain?: {
      '1h': number;
      '3h': number;
    };
    wind: {
      speed: number;
    };
  }