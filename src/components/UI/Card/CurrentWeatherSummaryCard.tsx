import { Current, ForecastDay, WeatherData } from "../../../types/types";
import { FaDroplet } from "react-icons/fa6";
import { FaCloud } from "react-icons/fa";
import { FiWind } from "react-icons/fi";
import { WiBarometer } from "react-icons/wi";
import { WiSunrise } from "react-icons/wi";
import { WiSunset } from "react-icons/wi";

interface CurrentWeatherSummaryCardProps {
  current: Current;
  forecast: ForecastDay;
}

const CurrentWeatherSummaryCard = ({
  current,
  forecast,
}: CurrentWeatherSummaryCardProps) => {
  return (
    <div className="grid grid-cols-3 gap-4 py-10">
      <div className="text-center mb-5">
        <FaDroplet className="mx-auto" />
        <p className="font-semibold">Humidity</p>
        <p className="text-sm">{current?.humidity}%</p>
      </div>
      <div className="text-center">
        <FaCloud className="mx-auto" />
        <p className="font-semibold">Cloud</p>
        <p className="text-sm">{current?.cloud}%</p>
      </div>
      <div className="text-center">
        <FiWind className="mx-auto" />
        <p className="font-semibold">Wind</p>
        <p className="text-sm">{current?.wind_kph} km/h</p>
      </div>
      <div className="text-center">
        <WiBarometer className="mx-auto" />
        <p className="font-semibold">Air Pressure</p>
        <p className="text-sm">{current?.pressure_mb}</p>
      </div>
      <div className="text-center">
        <WiSunrise className="mx-auto" />
        <p className="font-semibold">Sunrise</p>
        <p className="text-sm">{forecast?.astro.sunrise}</p>
      </div>
      <div className="text-center">
        <WiSunset className="mx-auto" />
        <p className="font-semibold">Sunset</p>
        <p className="text-sm">{forecast?.astro.sunset}</p>
      </div>
    </div>
  );
};

export default CurrentWeatherSummaryCard;
