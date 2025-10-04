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
              <img src={dude} className="max-w-[250px] max-h-[250px]" />
              <img src={pawan} className="max-w-[250px] max-h-[250px]" />
              <img src={satish} className="max-w-[250px] max-h-[250px]" />
            </div>
          </CardContent>
        </Card>
        <Card className="max-w-6xl mb-10 mx-auto shadow-elegant bg-gradient-subtle border-primary/20">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 pt-3">
              About The Challanges
            </h2>
            <p className="text-muted-foreground mb-6 text-justify">
              Like Alice in Wonderland, let’s travel down the rabbit hole to
              reveal a world that looks like our planet Earth… but not quite!
              Using synthetic aperture radar (SAR), we can image the world by
              emitting radar pulses toward Earth and recording the energy that
              is reflected back after the signals interact with Earth's surface.
              Your challenge is to download multi-frequency or
              multi-polarization SAR data for an interesting study area of your
              choice –e.g., your hometown, a tropical wetland, ice sheet, forest
              wildfire, flooded neighborhood, volcano eruption, etc.—and use
              that data to develop hypotheses about the physical drivers
              operating there.
            </p>
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
              Objective
            </h2>
            <p className="text-muted-foreground mb-6 text-justify">
              To develop an automated SAR-based monitoring system that: Tracks
              expansion and contraction cycles of key glacial lakes. Detects
              patterns that may indicate potential dam failure or GLOF risk.
              Enables early warning and data-driven prevention strategies for
              vulnerable downstream regions. Scientific Foundation Greenhouse
              effects and rising global temperatures directly increase the
              meltwater inflow into glacial lakes, stressing natural dams and
              elevating GLOF risks. Synthetic Aperture Radar (SAR) enables
              reliable monitoring under all weather conditions by using
              microwave signals that penetrate cloud and snow layers.
              Radiometric Terrain Correction (RTC) and speckle filtering are
              essential preprocessing steps to correct SAR’s geometric
              distortions and remove noise before analysis. Approach and
              Methodology Data Acquisition Utilized Sentinel-1A/B SAR data from
              NASA’s Alaska Satellite Facility (ASF). Queried and downloaded
              Ground Range Detected (GRD) products using the asf_search API for
              five selected glacial lakes (Tsho Rolpa, Tilicho, Imja, Gokyo,
              Chamlang). Target time window: 2021–2025. Preprocessing Used
              NASA’s HyP3 platform for: Radiometric Terrain Correction (RTC)
              Speckle filtering Noise reduction Cropped the preprocessed
              products to lake-specific GeoJSON polygons. Additional cleanup
              steps included padding and normalization. Dataset Preparation
              Generated ~300 SAR image patches for the five selected lakes.
              Annotated glacial lake boundaries manually in QGIS to create
              segmentation masks. Evaluated between generalist vs. specialist
              model approaches — opted for the latter for higher accuracy per
              lake. Model Training Created ~250–300 image-mask pairs (one per
              lake). Performed data augmentation and batch loading for training
              efficiency. Trained a CNN model using EfficientNet-B2 backbone
              (10M parameters) pre-trained on ImageNet. Achieved strong
              segmentation performance specialized for our 5 target lakes.
              Results Successfully built a deep-learning-powered segmentation
              model that accurately identifies glacial lake boundaries from SAR
              imagery. The pipeline from raw SAR download to final segmentation
              mask is fully automated in Python. Achieved high IoU and pixel
              accuracy (quantitative metrics can be added after validation).
              Demonstrated feasibility for large-scale, low-cost, continuous
              monitoring of Himalayan glacial lakes. Technologies and Tools Data
              Sources: NASA ASF Sentinel-1 GRD, HyP3 platform Programming &
              Libraries: Python, Rasterio, GDAL, NumPy, ASF, HyP3 SDK Annotation
              & GIS: QGIS Deep Learning Framework: EfficientNet-B2 (CNN
              architecture with ImageNet weights) Other Tools: Google Colab,
              Anaconda, Visual Studio Code Impact and Future Work Establish a
              standardized monitoring framework for all major glacial lakes in
              Nepal. Integrate time-series analysis to forecast lake volume
              fluctuations and potential GLOF risk levels. Develop a public
              dashboard to visualize monitored lakes and issue automated early
              warnings using live satellite data. Extend model generalization to
              cover the entire Himalayan belt through transfer learning and
              continuous dataset expansion.
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
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
