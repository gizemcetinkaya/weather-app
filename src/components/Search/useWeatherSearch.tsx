import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { WeatherData } from "../../types/types";
import { fetchWeatherData } from "../../api/weather";

export const useWeatherSearch = () => {
  const [weatherData, setWeatherData] = useState<WeatherData>(
    {} as WeatherData
  );
  const [params] = useSearchParams();
  const searchText = params.get("q");

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<string | null>(null);

  const latestSearchs = JSON.parse(localStorage.getItem("weatherData") || "[]");

  const setStorageDataBySearch = async (data: WeatherData | undefined) => {
    if (data && !isWeatherDataInStorage(data)) {
      const updatedWeatherData = [
        ...JSON.parse(localStorage.getItem("weatherData") || "[]"),
        data,
      ];
      localStorage.setItem("weatherData", JSON.stringify(updatedWeatherData));
    }
  };

  const isWeatherDataInStorage = (data: WeatherData): boolean => {
    return latestSearchs.some(
      (item: WeatherData) =>
        item.location.name === data.location.name &&
        item.location.region === data.location.region
    );
  };

  const fetchWeather = async (q: string) => {
    setIsLoading(true);
    setHasError(null);
    try {
      const data = await fetchWeatherData(q);
      setWeatherData(data);
      setIsLoading(false);
      return data;
    } catch (error) {
      setHasError("Failed to fetch weather data.");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      if (!searchText) fetchWeather(`${latitude},${longitude}`);
    });
  }, []);

  useEffect(() => {
    (async () => {
      if (!searchText) return;
      const data = await fetchWeather(searchText);
      setStorageDataBySearch(data);
    })();
  }, [searchText]);

  return { weatherData, latestSearchs, isLoading, hasError };
};
