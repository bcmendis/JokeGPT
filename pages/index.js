import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import JokePrompt from "@/components/JokePrompt";
import Joke from "@/components/Joke";
import Header from "@/components/Header";
import Sidebar from "../components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [joke, setJoke] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getJokeHandler = async (prompt) => {
    setIsLoading(true);
    const reqBody = { prompt };

    const response = await fetch("/api/getJoke", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    });
    const data = await response.json();
    setIsLoading(false);
    setJoke(data.message);
    // console.log(prompt);
  };

  return (
    <>
      <Head>
        <title>jokeGPT</title>
        <meta name="description" content="OpenAI joke generator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen w-screen bg-yellow-100">
        <Sidebar />
        <div className="flex flex-col w-[100%] justify-center items-center">
          <Header />
          <Joke joke={joke} isLoading={isLoading} />
          <JokePrompt getJoke={getJokeHandler} />
        </div>
      </main>
    </>
  );
}
