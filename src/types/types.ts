interface Condition {
    text: string;
    icon: string;
    code: number;
}
  

interface Location {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime: string;
}
  
interface Current {
    last_updated: string;
    temp_c: number;
    is_day: number;
    condition: Condition;
    wind_kph: number;
    humidity: number;
    cloud: number;
    pressure_mb: number;
}
  
interface Astro {
    sunrise: string;
    sunset: string;
}
  
interface Hour {
    time: string;
    temp_c: number;
    is_day: number;
    condition: Condition;
}

interface Day {
    maxtemp_c: number;
    mintemp_c: number;
    avgtemp_c: number;
    maxwind_kph: number;
    totalprecip_mm: number;
    totalprecip_in: number;
    totalsnow_cm: number;
    avgvis_km: number;
    avghumidity: number;
    daily_will_it_rain: number;
    daily_chance_of_rain: number;
    daily_will_it_snow: number;
    daily_chance_of_snow: number;
    condition: Condition;
}

interface ForecastDay {
    date: string;
    day: Day;
    astro: Astro;
    hour: Hour[];
} 

interface Forecast {
    forecastday: ForecastDay[];
} 

interface WeatherData {
    location: Location;
    current: Current;
    forecast: Forecast;
}
  
export type { WeatherData, Location, Current, Condition, Astro, Hour, Day, ForecastDay, Forecast };
  