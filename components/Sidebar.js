import {
  LightBulbIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { default as logo } from "../assets/openai-logo.png";

const Sidebar = () => {
  return (
    <div className="hidden md:flex flex-col items-center h-screen min-w-[15%] overflow-x-hidden p-5 text-gray-200 text-center bg-gray-800">
      <div className="flex justify-center items-center min-h-[125px]">
        <span className="text-2xl">OpenAI</span>
        <Image src={logo} alt="logo" width={60} />
      </div>
      <div className="flex flex-col items-center pt-5 space-y-10 overflow-y-auto">
        <div className="flex flex-col justify-center items-center w-[80%] p-6 border border-gray-300 rounded-lg bg-gray-700 text-gray-100">
          <div className="flex flex-wrap justify-center items-center text-xl pr-2 mb-8 border-b border-gray-300 text-blue-300">
            <LightBulbIcon className="h-8 w-8 m-2" />
            <span className="pl-2 m-2">Prompts</span>
          </div>
          <div className="flex flex-col space-y-8 text-lg">
            <h2>{`"clowns"`}</h2>
            <h2>{`"lions"`}</h2>
            <h2>{`"a bicycle"`}</h2>
          </div>
        </div>

        <div className="flex flex-col items-center w-[80%] p-6 border border-gray-300 rounded-lg bg-gray-700 text-gray-100">
          <div className="flex flex-wrap justify-center items-center text-xl pr-2 mb-8 border-b border-gray-300 text-red-300">
            <ExclamationTriangleIcon className="h-8 w-8 m-2" />
            <span className="pl-2 m-2">Disclaimer</span>
          </div>
          <div className="flex flex-col space-y-8 text-lg">
            <h2>May generate incorrect responses</h2>
            <h2>Refrain from typing profanities</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
