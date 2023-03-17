import { useState } from "react";
import classes from "./JokePrompt.module.css";

const JokePrompt = (props) => {
  const [prompt, setPrompt] = useState("");

  function onSubmitHandler(e) {
    e.preventDefault();

    props.getJoke(prompt);
  }

  return (
    <form onSubmit={onSubmitHandler} className={classes.form}>
      <div className={classes.prompt}>
        <label htmlFor="joke">Tell me a joke about</label>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="clowns"
          required
        />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default JokePrompt;
