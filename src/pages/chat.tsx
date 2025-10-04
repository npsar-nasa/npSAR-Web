import { useState } from "react";
import bot from "../assets/bot-removebg-preview.png";

type Message = {
  role: "user" | "SAR BOT";
  text: string;
};

interface GlacierDetailsProps {
  glacier: Glacier | null;
}
type Glacier = {
  area: number;
  coordinates: {
    lat: number;
    lng: number;
  };
  description: string;
  elevation: number;
  glacier_images: {
    url: string;
    url_s: string;
    year: number;
    description: string;
  }[];
  id: string;
  name: string;
  region: string;
  status: string;
  threat_level: string;
  country: string;
  facts: string;
  fact2: string;
  fact3: string;
  factimg: string;
};
// export default function ChatBot:React.FC<GlacierDetailsProps>({ glacier }) {
const ChatBot: React.FC<GlacierDetailsProps> = ({ glacier }) => {
  const [input, setInput] = useState(""); // user input
  const [messages, setMessages] = useState<Message[]>([]); // chat history
  const [loading, setLoading] = useState(false);
  const Base_Prompt: string = `
You are a glacier and climate info bot. 
- Reply in up to 4 lines about glaciers, glacier lakes, or climate. 
- For greetings (hi, hello, thanks), reply politely in 1 line. 
- If a lake/glacier name is provided, use it (e.g., ${glacier.name}). 
- If no name is given eg , this and other ways, still answer with  ${glacier.name} lake facts. 
- Never answer off-topic; politely say: "Sorry, I only discuss glaciers and climate."
`;

  const sendPrompt = async () => {
    if (!input) return;
    const userMessage: Message = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]); // add user message to set metssages
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(
        "https://himalayan-ice-chronicles-try.onrender.com/generate",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt: `${Base_Prompt}\n\n user:${input}` }),
        }
      );

      const data = await res.json();
      const botMessage: Message = {
        role: "SAR BOT",
        text: data.text || "No reply",
      };
      setMessages((prev) => [...prev, botMessage]); // add bot message
    } catch (err) {
      console.error("Error:", err);
      const errorMessage: Message = {
        role: "SAR BOT",
        text: "Error calling Gemini API",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto 2xl:w-[600px] 2xl:mt-0 mt-10 p-5 bg-card rounded-xl shadow-lg font-semibold border-2  ">
      <div className="flex">
        <img src={bot} alt="bot img" className="w-[50px] mb-4" />
        <h1 className="scroll-m-20 text-xl pt-[5px] text-green-800 font-extrabold tracking-tight text-balance">
          Chat with Climate Bot
        </h1>
      </div>
      <hr className=" bg-green-900 " />

      <div className=" bg-card rounded-lg p-4 min-h-[200px] mb-5 overflow-y-auto max-h-[400px] space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[75%] p-3 rounded-2xl shadow ${
                msg.role === "user" ? "bg-card" : "bg-card "
              }`}
            >
              <span className="block text-green-900 text-sm font-semibold mb-1">
                {msg.role === "user" ? "You" : "SAR Bot"}
              </span>
              <span>{msg.text}</span>
            </div>
          </div>
        ))}
      </div>
      <hr />
      <div className="flex gap-3 mt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendPrompt();
            }
          }}
          placeholder="Type your message..."
          className="w-full h-7 pl-10 pr-3 rounded-md border bg-card text-green-950 placeholder-green focus:outline-none focus:ring-0 focus:ring-green-700 focus:border-green-700 font-medium"
        />

        <button
          onClick={sendPrompt}
          disabled={loading}
          className="px-4 font-medium rounded-md bg-card  text-green-950  shadow transition-colors disabled:opacity-50"
        >
          {loading ? "Thinking..." : "Send"}
        </button>
        <hr />
      </div>
    </div>
  );
};

export default ChatBot;
