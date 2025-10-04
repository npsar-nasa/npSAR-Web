// src/index.ts
import express, { Request, Response } from "express";
import cors from "cors";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors()); // cross open resource sharing
const port = process.env.PORT || 3000;

// Initialize Gemini client provided by google snippet
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

app.use(express.json());

app.post("/generate", async (req: Request, res: Response) => {
  try {
    const { prompt } = req.body;
    if (!prompt || typeof prompt !== "string") {
      return res
        .status(400)
        .json({ error: "Prompt is required and must be a string." });
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: { thinkingConfig: { thinkingBudget: 0 } },
    });
    res.status(200).json({ text: response.text });
  } catch (error: any) {
    console.error("Error calling Gemini API:", error.message || error);
    res
      .status(500)
      .json({ error: error.message || "Failed to generate content." });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
