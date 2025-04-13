import { Request, Response } from "express";
import { generateMessage } from "../utils/openai";

export const getPersonalizedMessage = async (req: Request, res: Response) => {
  try {
    const message = await generateMessage(req.body);
    res.json({ message });
  } catch (error) {
    res.status(500).json({ error: "AI generation failed" });
  }
};
