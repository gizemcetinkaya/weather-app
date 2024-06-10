const getCurrentHour = () => {
  const date = new Date();
  return date.getHours();
};

const getHour = (time: string) => {
  const date = new Date(time);
  return date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });
};

const getDayName = (date: string) => {
  const dateTime = new Date(date);
  return dateTime.toLocaleDateString("en-US", { weekday: "short" });
};

const getDay = (date: string) => {
  const dateTime = new Date(date);
  return dateTime.toLocaleDateString("en-US", {
    day: "numeric",
    month: "numeric",
  });
};

const isCurrentHour = (hour: string) => {
  return getCurrentHour() === parseInt(hour);
};

const isToday = (dateString: string) => {
  const today = new Date();
  const date = new Date(dateString);
  return (
    today.getDate() === date.getDate() &&
    today.getMonth() === date.getMonth() &&
    today.getFullYear() === date.getFullYear()
  );
};

export { getCurrentHour, getHour, getDay, getDayName, isCurrentHour, isToday };
