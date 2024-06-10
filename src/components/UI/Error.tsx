import { FaBoltLightning } from "react-icons/fa6";

const Error = () => {
    return (
        <div
            role="alert"
            className="relative flex w-full px-4 py-4 text-base text-red-800 rounded-lg font-lg bg-red-50 mb-5"
          >
            <div className="shrink-0 text-lg mt-1">
              <FaBoltLightning />
            </div>
            <div className="ml-2 font-medium">
              Something went wrong, please try again.
            </div>
          </div>
    )
}

export default Error;