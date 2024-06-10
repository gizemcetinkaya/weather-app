import { ForecastDay } from "../../../types/types";
import { getDay, getDayName, isToday } from "../../../utils/utils";

interface DayCardProps {
  forecastDay: ForecastDay;
}

const DayCard = ({ forecastDay }: DayCardProps) => {
  const condition = forecastDay.day.condition;
  return (
    <div
      className={`flex-shrink-0 px-5 py-4 rounded-lg ${
        isToday(forecastDay.date) && "bg-white bg-opacity-10 mb-2"
      }`}
    >
      <h3 className="text-sm mb-2">{getDayName(forecastDay.date)}</h3>
      <p className="text-sm mb-2">{getDay(forecastDay.date)}</p>
      <img
        className="rounded-lg mx-auto mb-2"
        src={condition.icon}
        alt={condition.text}
        width={30}
        height={30}
      />
      <p className="font-medium text-lg">{forecastDay.day.avgtemp_c} °</p>
    </div>
  );
};

export default DayCard;
