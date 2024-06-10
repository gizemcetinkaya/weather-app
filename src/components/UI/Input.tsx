import { IoLocationOutline } from "react-icons/io5";

interface InputProps {
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Input = ({ type, placeholder, onChange, value }: InputProps) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <IoLocationOutline className="text-white" />
      </div>
      <input
        type={type}
        className="border border-white text-xs rounded-lg block w-full p-2 ps-8 bg-white bg-opacity-10 mb-5 text-white focus:outline-none"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        required
      />
    </div>
  );
};

export default Input;
