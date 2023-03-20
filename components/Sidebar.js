import {
  LightBulbIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <div className="hidden md:flex flex-col items-center h-screen min-w-[15%] overflow-hidden p-5 text-gray-200 text-center bg-gray-800">
      <h1 className="text-4xl p-5 mb-10">Welcome</h1>
      <div className="flex flex-col justify-center items-center space-y-10">
        <div className="flex flex-col justify-center items-center w-[80%] p-4 m-2 border border-gray-300 rounded-lg bg-gray-700 text-gray-100">
          <div className="flex justify-center items-center text-lg p-1 mb-4 border-b border-gray-300 text-blue-300">
            <LightBulbIcon className="h-8 w-8 m-2" />
            <span>Examples</span>
          </div>
          <div className="flex flex-col space-y-5">
            <h2>{`"clowns"`}</h2>
            <h2>{`"lions"`}</h2>
            <h2>{`"a bicycle"`}</h2>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-[80%] p-4 m-2 border border-gray-300 rounded-lg bg-gray-700 text-gray-100">
          <div className="flex justify-center items-center text-lg p-1 mb-4 border-b border-gray-300 text-red-300">
            <ExclamationTriangleIcon className="h-8 w-8 m-2" />
            <span>Disclaimer</span>
          </div>
          <div className="flex flex-col space-y-5">
            <h2>May generate incorrect responses</h2>
            <h2>Refrain from typing profanities</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
