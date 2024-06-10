const Loading = () => {
  return (
    <div className="absolute bg-[#3f7bd9] dark:bg-[#1F1F42] bg-opacity-80 z-10 h-full w-full flex items-center justify-center top-0 left-0 rounded-lg">
      <div className="flex items-center">
        <span className="text-xl mr-4">Loading</span>
        <div className="flex gap-2">
          <div className="w-5 h-5 rounded-full animate-pulse bg-white"></div>
          <div className="w-5 h-5 rounded-full animate-pulse bg-white"></div>
          <div className="w-5 h-5 rounded-full animate-pulse bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
