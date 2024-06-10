import { WeatherData } from "../../../types/types";
import { getDay, getHour } from "../../../utils/utils";

interface LatestSearchsCardProps {
  latestSearchs: WeatherData[];
}

const LatestSearchsCard = ({ latestSearchs }: LatestSearchsCardProps) => {
  return (
    <div>
      <h2 className="text-md font-medium mb-2 ">Latest Searchs</h2>
      <div className="overflow-y-auto w-full max-h-96 pr-6 scrollbar-thin scrollbar-webkit">
        {latestSearchs.map((item: WeatherData) => (
          <div
            className="w-full bg-[#3f7bd9] dark:bg-[#2a334f] text-white rounded-lg shadow-md p-6 mb-5"
            key={item.location.name}
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex flex-col mr-4 text-center">
                <h3 className="text-sm font-medium mb-2">
                  {item.location.name}, {item.location.country}
                </h3>
                <p className="text-sm mb-1">
                  {getDay(item.current.last_updated)}{" "}
                  {getHour(item.current.last_updated)}
                </p>
              </div>
              <div className="flex-shrink-0 text-center">
                <img
                  className="rounded-lg mx-auto"
                  src={item.current.condition.icon}
                  alt={item.current.condition.text}
                  width={30}
                  height={30}
                />
                <p className="text-lg font-medium">{item.current.temp_c}°</p>
                <p className="text-sm">
                  H: {item.forecast?.forecastday[0]?.day.maxtemp_c} 
                  L: {item.forecast?.forecastday[0]?.day.mintemp_c}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestSearchsCard;
