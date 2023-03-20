const Joke = (props) => {
  return (
    <div className="flex flex-1 justify-center items-center w-[80%] p-4 text-center font-semibold text-xl md:text-3xl">
      {props.joke}
    </div>
  );
};

export default Joke;
