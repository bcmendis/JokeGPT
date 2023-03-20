import { ArrowPathIcon } from "@heroicons/react/24/outline";

const Joke = (props) => {
  return (
    <div className="flex flex-1 justify-center items-center w-[80%] p-4 text-center font-semibold text-xl md:text-3xl">
      {!props.isLoading && props.joke}
      {props.isLoading && (
        <ArrowPathIcon className="h-10 w-10 md:h-20 md:w-20 text-yellow-800 animate-spin" />
      )}
    </div>
  );
};

export default Joke;
