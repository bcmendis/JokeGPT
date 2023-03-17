import { Configuration, OpenAIApi } from "openai";

export default async function handler(req, res) {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  if (req.method === "POST") {
    // Get the prompt from the request
    const prompt = `Tell me a joke about ${req.body.prompt}`;
    // console.log(prompt);

    // Generate a response with ChatGPT
    const completion = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: prompt,
      max_tokens: 100,
    });
    const joke = completion.data.choices[0].text;
    res.status(200).json({ message: joke });
  } else res.status(200).json({ message: "Request Received" });
}
