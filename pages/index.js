import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
// import classes from "@/styles/Home.module.css";

import JokePrompt from "@/components/JokePrompt";
import Joke from "@/components/Joke";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [joke, setJoke] = useState("");

  const getJokeHandler = async (prompt) => {
    const reqBody = { prompt };

    const response = await fetch("/api/getJoke", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    });
    const data = await response.json();
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
      <main className="flex flex-col h-screen justify-center items-center bg-yellow-200">
        <Header />
        <Joke joke={joke} />
        <JokePrompt getJoke={getJokeHandler} />
      </main>
    </>
  );
}
