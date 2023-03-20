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
      className="flex w-screen p-5 text-5xl text-center bg-blue-400"
    >
      <div className="flex flex-1 justify-center items-center">
        <div className="flex flex-col flex-1 justify-center items-center p-1 lg:flex-row">
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
              className="text-center rounded-lg flex-1 m-5 mx-8 p-4 bg-gray-100"
            />
          </div>
        </div>

        <div className="flex">
          <button>
            <PaperAirplaneIcon className="h-20 w-20 text-blue-800 -rotate-45 hover:text-blue-600" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default JokePrompt;
