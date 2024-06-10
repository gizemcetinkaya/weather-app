import { WeatherData } from "../../../types/types";
import CurrentWeatherSummaryCard from "./CurrentWeatherSummaryCard";

interface CurrentWeatherCardProps {
  weatherData: WeatherData;
}

const CurrentWeatherCard = ({ weatherData }: CurrentWeatherCardProps) => {
  const { current, location, forecast } = weatherData;
  const currentForecast = forecast?.forecastday[0];

  return (
    <div className="bg-[#3f7bd9] dark:bg-[#2a334f] text-center rounded-xl mb-5 w-full">
      <div className="py-5">
        <img
          className="rounded-t-lg mx-auto"
          src={current?.condition.icon}
          alt={current?.condition.text}
        />
        <h5 className="mb-2 text-4xl font-bold tracking-tight">
          {current?.temp_c}°
        </h5>
        <p className="font-normal">{location?.name}</p>
        <p>{location?.country}</p>
        <p>
          H: {currentForecast?.day.maxtemp_c} L:{" "}
          {currentForecast?.day.mintemp_c}
        </p>
      </div>
      <CurrentWeatherSummaryCard current={current} forecast={currentForecast} />
    </div>
  );
};

export default CurrentWeatherCard;
