import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({});
export async function main() {
  const responce = await ai.models.generateContent({
    model: "gemni-2.5-flash",
    contents: "explain how Ai works in few words",
  });
  console.log(responce);
}
main();
