import { Mountain, Globe, TrendingDown, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Navbar from "./NavBar";
import dude from "../assets/dude.jpg";
import pawan from "../assets/pawan.jpg";
import satish from "../assets/satish.jpg";
{
  /* <button
        className=" bg-green-800 border-green-800 m-4 hover:bg-green-950 rounded-sm  px-4 py-1 text-white"
        onClick={() => Navigate("/")}
      >
        Home
      </button> */
}

const About = () => {
  const Navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <Navbar></Navbar>

      <div className=" text-center mt-10">
        <Card className="max-w-3xl mx-auto shadow-elegant bg-gradient-subtle border-primary/20">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 pt-3">
              About Us
            </h2>
            <p className="text-muted-foreground mb-6 text-justify">
              Our ultimate goal is to create a simple, engaging, and reliable
              platform that helps people understand the impact of climate change
              through glaciers. By including comprehensive data on glaciers and
              glacial lakes from around the world, visualizing information,
              sharing knowledge, providing early warnings of GLOFs, and
              preserving records, we aim to educate the public, support
              research, and inspire collective action to protect our environment
              for future generations.
            </p>

            <div className=" gap-x-5 flex justify-center text-primary">
              <img src={dude} className="max-w-[250px] max-h-[250px]" />
              <img src={pawan} className="max-w-[250px] max-h-[250px]" />
              <img src={satish} className="max-w-[250px] max-h-[250px]" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
