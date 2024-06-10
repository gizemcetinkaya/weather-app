import SearchBar from "./components/Search/SearchBar";
import CurrentWeatherCard from "./components/UI/Card/CurrentWeatherCard";
import { useWeatherSearch } from "./components/Search/useWeatherSearch";
import Loading from "./components/UI/Loading";
import Error from "./components/UI/Error";
import ForecastCard from "./components/UI/Card/ForecastCard";
import LatestSearchsCard from "./components/UI/Card/LatestSearchsCard";
import { useEffect, useState } from "react";
import ThemeToggleButton from "./components/UI/ThemeToggleButton";

function App() {
  const { weatherData, latestSearchs, isLoading, hasError } =
    useWeatherSearch();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";
    localStorage.setItem("theme", theme);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="min-h-screen flex items-center justify-center bg-[#3f7bd9] dark:bg-[#2a334f]">
        <div className="container mx-auto bg-[#255cb7] text-white dark:bg-[#1F1F42] dark:text-white rounded-lg shadow-md p-6 relative">
          <div className="flex justify-end">
            <ThemeToggleButton
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
            />
          </div>
          {isLoading && <Loading />}
          <SearchBar />
          {hasError && <Error />}
          <div className="flex flex-row xs:flex-col sm:flex-col md:flex-row">
            <div className="flex basis-1/2 mr-5 xs:basis-full sm:basis-full xs:mr-0 sm:mr-0 md:mr-5">
              <CurrentWeatherCard weatherData={weatherData} />
            </div>
            <div className="basis-3/4 flex flex-col w-full overflow-hidden xs:basis-full sm:basis-full">
              <ForecastCard
                title="Hourly Forecast"
                forecastType="hourly"
                forecast={weatherData?.forecast}
              />
              <ForecastCard
                title="Weekly Forecast"
                forecastType="weekly"
                forecast={weatherData?.forecast}
              />
            </div>
          </div>
          {latestSearchs.length > 0 && (
            <LatestSearchsCard latestSearchs={latestSearchs} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
