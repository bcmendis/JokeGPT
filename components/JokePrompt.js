import { useState } from "react";

import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

const JokePrompt = (props) => {
  const [prompt, setPrompt] = useState("");

  function onSubmitHandler(e) {
    e.preventDefault();

    props.getJoke(prompt);
  }

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex p-2 md:p-5 w-screen text-base text-center bg-blue-400 md:text-3xl"
    >
      <div className="flex flex-1 justify-center items-center">
        <div className="flex flex-col justify-center items-center p-1 flex-1 md:flex-row">
          <div>
            <label htmlFor="joke" className="mb-5">
              Tell me a joke about
            </label>
          </div>

          <div className="flex flex-1">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="clowns"
              required
              className="text-center rounded-lg flex-1 m-2 md:m-5 mx-2 md:mx-8 p-1 md:p-4 bg-gray-100"
            />
          </div>
        </div>

        <div className="flex">
          <button>
            <PaperAirplaneIcon className="h-10 w-10 md:h-20 md:w-20 text-blue-800 -rotate-45 hover:text-blue-600" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default JokePrompt;
