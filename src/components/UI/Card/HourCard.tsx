import { Hour } from "../../../types/types";
import { getHour, isCurrentHour } from "../../../utils/utils";

interface HourCardProps {
  hourForecast: Hour;
};

const HourCard = ({ hourForecast }: HourCardProps) => {
  const hour = getHour(hourForecast.time);
  const condition = hourForecast.condition;

  return (
    <div
      className={`flex-shrink-0 p-4 rounded-lg mb-2 ${
        isCurrentHour(hour) && "bg-white bg-opacity-10"
      }`}
    >
      <h3 className="text-sm">{isCurrentHour(hour) ? "Now" : hour}</h3>
      <img
        className="rounded-lg mx-auto"
        src={condition.icon}
        alt={condition.text}
        width={30}
        height={30}
      />
      <p className="font-medium text-lg">{hourForecast.temp_c} °</p>
    </div>
  );
};

export default HourCard;
