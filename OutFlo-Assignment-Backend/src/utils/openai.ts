// import { Configuration, OpenAIApi } from "openai";

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// export const generateMessage = async (profile: {
//   name: string;
//   job_title: string;
//   company: string;
//   location: string;
//   summary: string;
// }) => {
//   const prompt = `Generate a short LinkedIn outreach message for:
// Name: ${profile.name}
// Title: ${profile.job_title}
// Company: ${profile.company}
// Location: ${profile.location}
// Summary: ${profile.summary}`;

//   const response = await openai.createCompletion({
//     model: "text-davinci-003",
//     prompt,
//     max_tokens: 100,
//   });

//   return response.data.choices[0].text?.trim();
// };

// generateMessage.ts
import { GoogleGenerativeAI } from "@google-ai/generative-ai";

// Load API key from environment
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export const generateMessage = async (profile: {
  name: string;
  job_title: string;
  company: string;
  location: string;
  summary: string;
}) => {
  const prompt = `Generate a short LinkedIn outreach message for the following person:\n
Name: ${profile.name}
Job Title: ${profile.job_title}
Company: ${profile.company}
Location: ${profile.location}
Summary: ${profile.summary}

Message:`;

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  return text.trim();
};
