import { http } from "../libs/http";
import { WeatherData } from "../types/types";

export const fetchWeatherData = async (q: string) => {
    const response = await http.get<WeatherData>(`forecast.json?q=${q}&days=7&aqi=no&alerts=no`);
    return response.data;
};