import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

interface ThemeToggleButtonProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeToggleButton = ({ isDarkMode, toggleDarkMode }: ThemeToggleButtonProps) => {
  return (
    <button
      className="bg-gray-200 dark:bg-[#2a334f] text-black dark:text-white px-4 py-2 rounded mb-5"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? <MdOutlineDarkMode /> : <MdDarkMode />}
    </button>
  );
};

export default ThemeToggleButton;
