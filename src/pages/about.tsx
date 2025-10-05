import { Mountain, Globe, TrendingDown, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Navbar from "./NavBar";
import dude from "../assets/dude.jpg";
import pawan from "../assets/pawan.jpg";
import satish from "../assets/satish.jpg";
import picture1 from "../assets/Picture1.png";
import picture2 from "../assets/Picture2.png";
import picture3 from "../assets/Picture3.png";
import picture4 from "../assets/Picture4.png";
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
        <Card className="max-w-6xl mb-10 mx-auto shadow-elegant bg-gradient-subtle border-primary/20">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 pt-3">
              Problem
            </h2>
            <p className="text-muted-foreground mb-6 text-justify">
              Nepal’s river systems are highly vulnerable to floods caused by
              both rainfall and sudden GLOF events. Rapid increases in glacial
              lake volume can rupture moraine or ice dams, sending destructive
              surges of water downstream—resulting in human and economic losses.
              Traditional optical monitoring methods fail under cloudy, foggy,
              or snow-covered conditions common in high-altitude regions.
              Physical observation stations are difficult to install or maintain
              due to the extreme geography, weather, and limited accessibility
              of Himalayan terrains.
            </p>
          </CardContent>
        </Card>
        <Card className="max-w-6xl mb-10 mx-auto shadow-elegant bg-gradient-subtle border-primary/20">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 pt-3">
              What We Came Up
            </h2>
            <p className="text-muted-foreground mb-6 text-justify">
              The Glacier Monitoring System is a web-based application that
              tracks and visualizes changes in glacier lakes over the past
              decade. It allows users to compare satellite images from different
              years through an interactive slider, helping to analyze glacier
              retreat, growth, and potential risks related to climate change.
              Key Features: Displays glacier and lake information such as name,
              region, elevation, and area. Provides year-by-year satellite image
              comparison using a slider. Includes search and filter options for
              easy data access. Highlights potential glacial lake outburst flood
              (GLOF) risks. <br /> Technologies Used: <br /> Frontend: React,
              TypeScript, <br />
              Tailwind CSS Backend: Node.js, Express.js <br />
              Database and Storage: Supabase (PostgreSQL) <br />
              Mapping: OpenLayers or Leaflet Version Control: Git and GitHub
            </p>
            <a href="https://github.com/npsar-nasa">
              {" "}
              <span className="text-green-800 text-2xl font-medium underline">
                Github
              </span>
            </a>
          </CardContent>
        </Card>

        <Card className="max-w-6xl mb-10 mx-auto shadow-elegant bg-gradient-subtle border-primary/20">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 pt-3">
              CNN Lake Detection Model
            </h2>
            <p className="text-muted-foreground mb-6 text-justify">
              Our Lake Detection Model is a deep learning-based system designed
              for high-precision water body segmentation in SAR (Synthetic
              Aperture Radar) imagery. Leveraging a U-Net/DeepLabV3+
              architecture with an EfficientNet-B3 backbone, the model performs
              binary segmentation to distinguish water from non-water regions
              across complex glacial landscapes. <br /> Features: <br /> - The
              model was trained on 244 matched image-mask pairs, covering
              multiple glacial lakes, including Chamlang Tsho, Gokyo Tsho, and
              Imja Tsho areas. Images were preprocessed to a size of 256×256
              pixels and standardized as torch.float32. <br />- We employed a
              custom LakeDetectionLoss, combining BCE, Dice, and Focal Loss,
              optimized with AdamW. The model was trained for 40 epochs with a
              batch size of 32 and an initial learning rate of 0.0001 on
              CUDA-enabled GPU.
              <br /> - The model achieved best validation IoU of 0.9130, with
              consistent improvement across epochs. Training and validation loss
              curves, along with IoU trends, demonstrate stable convergence and
              minimal overfitting.
            </p>
            <div className=" gap-x-5 flex justify-center text-primary">
              <img src={picture1} className="max-w-[300px] max-h-[300px]" />
              <img src={picture2} className="max-w-[3000px] max-h-[300px]" />
              <img src={picture3} className="max-w-[300px] max-h-[300px]" />
            </div>
            <p className="text-muted-foreground mb-6 text-justify">
              Training Insights: <br /> - Rapid initial improvement in IoU
              during the first 10 epochs, followed by gradual fine-tuning in
              later epochs.
              <br />- Validation IoU stabilized above 0.90 from epoch 19 onward,
              highlighting robust generalization across unseen lake imagery.
            </p>
            <div className=" gap-x-5 flex justify-center text-primary">
              <img src={picture4} className="max-w-[700px] max-h-[700px]" />
            </div>
            <p className="text-muted-foreground mb-6 text-justify">
              - Effective handling of images with missing masks by excluding
              unmatched samples from training.
              <br />
              &nbsp;Further Improvements:
              <br /> - Increase in number of patches per lake. <br />- Using
              backbones already familiar with single channel SAR imagery.
            </p>
            <a href="https://github.com/npsar-nasa/npSAR-dl">
              {" "}
              <span className="text-green-800 text-2xl font-medium underline">
                Github
              </span>
            </a>
          </CardContent>
        </Card>
        <Card className="max-w-6xl mb-10 mx-auto shadow-elegant bg-gradient-subtle border-primary/20">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 pt-3">
              Project Summary
            </h2>
            <p className="text-muted-foreground mb-6 text-justify">
              Nepal faces frequent floods, many triggered by Glacial Lake
              Outburst Floods (GLOFs) caused by sudden failures in glacial lake
              dams. With the Himalayas’ harsh terrain and unpredictable climate,
              on-site monitoring of these lakes is nearly impossible. Our
              project leverages NASA’s Sentinel-1 SAR satellite data and
              AI-based analysis to track glacial lake expansion and identify
              early indicators of potential GLOFs. By combining remote sensing,
              automated preprocessing, and deep learning, we aim to provide a
              scalable, efficient solution for GLOF risk monitoring across
              Nepal’s vulnerable Himalayan regions.
            </p>
          </CardContent>
        </Card>
        <Card className="max-w-6xl  mb-10 mx-auto shadow-elegant bg-gradient-subtle border-primary/20">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 pt-3">
              About Us
            </h2>
            <p className="text-muted-foreground mb-6 text-justify">
              Greetings, we are 3 passionate students from Nepal who love
              understanding space technology, AI, and natural processes. We live
              in a country with the high Himalayas, where we witnessed floods
              and landslides triggered by melting glaciers and steep
              terrains—disasters that cost hundreds of casualties each year.
              Experiencing these problems, we tend to understand this better
              through SAR images by building the AI model. Our goal is to make
              glacier research faster, clearer, and more accessible and to reach
              out to the policymakers to act on climate change as soon as
              possible.
            </p>

            <div className=" gap-x-5 flex justify-center text-primary">
              <div className="">
                <img
                  src={dude}
                  className="max-w-[250px] rounded-md max-h-[250px]"
                />
                <a href="" className="font-medium text-lg underline">
                  Nischal
                </a>
              </div>
              <div>
                <img
                  src={pawan}
                  className="max-w-[250px] rounded-md max-h-[250px]"
                />
                <a href="" className="font-medium underline text-lg">
                  Pawan
                </a>
              </div>
              <div>
                <img
                  src={satish}
                  className="max-w-[250px] rounded-md max-h-[250px]"
                />
                <a href="" className="font-medium  underline text-lg">
                  Satish
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
