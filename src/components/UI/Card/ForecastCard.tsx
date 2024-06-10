import { Forecast } from "../../../types/types";
import { getCurrentHour, getHour } from "../../../utils/utils";
import DayCard from "./DayCard";
import HourCard from "./HourCard";

interface ForecastCardProps {
  title: string;
  forecastType: "hourly" | "weekly";
  forecast: Forecast;
}

const ForecastCard = ({ title, forecastType, forecast }: ForecastCardProps) => {
  const forecastday = forecast?.forecastday || [];
  const todayForecast = forecastday[0];
  const tomorrowForecast = forecastday[1];
  const totalHours = todayForecast?.hour.filter((h) => {
    const hour = getHour(h.time);
    const currentHour = getCurrentHour();
    return currentHour <= parseInt(hour);
  });

  if (totalHours && totalHours.length < 8) {
    const leftHours = 8 - totalHours.length;
    totalHours.push(...tomorrowForecast?.hour.slice(0, leftHours));
  }

  return (
    <div className="w-full bg-[#3f7bd9] dark:bg-[#2a334f] rounded-lg shadow-md p-6 mb-5">
      <h2 className="text-md font-medium mb-2 border-b border-x-blue-300">
        {title}
      </h2>
      <div className="flex flex-wrap overflow-x-auto w-full scrollbar-thin scrollbar-webkit">
        <div className="flex space-x-3 text-center">
          {forecastType === "hourly"
            ? totalHours?.map((hour) => {
                return <HourCard hourForecast={hour} key={hour.time} />;
              })
            : forecastday.map((day) => (
                <DayCard forecastDay={day} key={day.date} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;
