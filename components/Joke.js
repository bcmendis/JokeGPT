const Joke = (props) => {
  return (
    <div className="flex flex-1 justify-center items-center w-[80%] p-4 text-5xl text-center font-semibold">
      {props.joke}
    </div>
  );
};

export default Joke;
