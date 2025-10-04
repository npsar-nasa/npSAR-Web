import React, { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { GlacierSidebar } from "@/components/GlacierSidebar";
import { GlacierDetails } from "@/components/GlacierDetails";
// import { nepaliGlaciers, type Glacier } from "@/data/glaciers";
import heroGlacier from "@/assets/hero-glacier.jpg";
import { Mountain, Globe, TrendingDown, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useGlaciers } from "../hooks/usedat";
import indxdtl from "../assets/indexdetail.png";
import { SidebarTrigger } from "@/components/ui/sidebar";

import { useNavigate } from "react-router-dom";
import Navbar from "./NavBar";

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
    area: number;
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

const Index = () => {
  const Navigate = useNavigate();
  const [selectedGlacier, setSelectedGlacier] = useState<Glacier | null>(null);
  const [selectedCordinate, setSelectedCordinate] = useState<Glacier | null>(
    null
  );

  const { nepaliGlaciers, loading, error } = useGlaciers(); // taking data out

  const retreatingCount = nepaliGlaciers.filter(
    (g) => g.status === "retreating"
  ).length;
  const criticalCount = nepaliGlaciers.filter(
    (g) => g.threat_level === "critical"
  ).length;

  return (
    <div className="min-h-screen bg-background">
      <Navbar></Navbar>
      <SidebarProvider>
        <div className="flex min-h-screen w-full ">
          <GlacierSidebar
            selectedGlacier={selectedGlacier}
            onGlacierSelect={setSelectedGlacier}
            selectedCordinate={selectedCordinate}
            onSelectedCordinate={setSelectedCordinate} // passing function so that change in state reflect change in parenet component
          />

          {!selectedGlacier ? (
            // Hero Section when no glacier is selected

            <div className="flex-1 bg-gradient-subtle">
              {/* Hero Banner */}
              <div className="relative h-[60vh] overflow-hidden">
                <img
                  src={heroGlacier}
                  alt="Nepal Himalayan Glaciers"
                  className="w-full h-full object-cover"
                />

                {/* Sidebar Trigger on top of image */}
                <SidebarTrigger className=" md:hidden w-9 h-9 absolute top-4 bg-green-700 left-4 hover:bg-sidebar-accent z-10" />

                <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />

                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-6">
                    <div className="max-w-2xl">
                      <div className="flex items-center gap-3 mb-4">
                        <Mountain className="w-12 h-12 text-primary" />
                        <Badge
                          variant="outline"
                          className="bg-primary/10 text-primary border-primary/20 px-3 py-1"
                        >
                          Climate Research
                        </Badge>
                      </div>
                      <h1 className="text-5xl font-bold text-foreground mb-4 leading-tight">
                        Nepal Glacier Lakes Monitoring System
                      </h1>
                      <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                        Track the changing landscape of Nepal's glaciers Lakes
                        through SAR time-series imagery and scientific analysis.
                        Monitor the impact of climate change on these critical
                        water resources.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Badge className="bg-primary text-primary-foreground px-4 py-2 text-base">
                          <Globe className="w-4 h-4 mr-2" />
                          {nepaliGlaciers.length} Glacier Lakes Monitored
                        </Badge>
                        <Badge
                          variant="outline"
                          className="text-destructive bg-destructive/10 border-destructive/20 px-4 py-2 text-base"
                        >
                          <TrendingDown className="w-4 h-4 mr-2" />
                          {retreatingCount} Retreating
                        </Badge>
                        <Badge
                          variant="outline"
                          className="text-destructive bg-destructive/10 border-destructive/20 px-4 py-2 text-base"
                        >
                          <AlertTriangle className="w-4 h-4 mr-2" />
                          {criticalCount} Critical Risk
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Section */}
              <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="shadow-elegant hover:shadow-nature transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Mountain className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {nepaliGlaciers.length}
                      </h3>
                      <p className="text-muted-foreground">
                        Major Glacier Lakes
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Across 8 mountain ranges in Nepal
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="shadow-elegant hover:shadow-nature transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-glacier-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Globe className="w-8 h-8 text-glacier-blue-dark" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        8.33
                      </h3>
                      <p className="text-muted-foreground">Total Area (km²)</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Critical water resource coverage
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="shadow-elegant hover:shadow-nature transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <AlertTriangle className="w-8 h-8 text-destructive" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        60%
                      </h3>
                      <p className="text-muted-foreground">Showing Retreat</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Clear signs of climate impact
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Call to Action */}
                <div className="pt-10 text-center"></div>
              </div>

              <div className=" text-center pb-10">
                <Card className="max-w-[850px] mx-auto shadow-elegant bg-gradient-subtle border-primary/20">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-4 pt-3">
                      How We Executed This.
                    </h2>
                    <p className="text-muted-foreground mb-6 text-justify">
                      We developed a deep learning–based system for glacial lake
                      monitoring in Nepal. Using satellite imagery (2015–2025)
                      from ASF, we focused on five key lakes: Imja, Tsho Rolpa,
                      Gokyo, Chamlang, and Tilicho. Workflow: Data
                      Preprocessing: Images (March–September, 2020–2025) were
                      masked using QGIS to create training datasets. Model
                      Training: Applied DeepLabV3 segmentation with augmentation
                      and padding to classify lake vs. non-lake regions.
                      Visualization: Built an interactive web platform with a
                      year-by-year slider (2015–2025), showing model outputs and
                      highlighting temporal changes in lake boundaries.
                    </p>
                    <div className=" gap-x-5 flex justify-center  text-primary"></div>
                  </CardContent>
                </Card>
              </div>

              {/* extra part */}
              <div className=" text-center">
                <Card className="max-w-3xl mx-auto shadow-elegant bg-gradient-subtle border-primary/20">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-4 pt-3">
                      End Goal
                    </h2>
                    <p className="text-muted-foreground mb-6 text-justify">
                      Our ultimate goal is to create a simple, engaging, and
                      reliable platform that helps people understand the impact
                      of climate change through glaciers. By including
                      comprehensive data on glaciers and glacial lakes from
                      around the world, visualizing information, sharing
                      knowledge, providing early warnings of GLOFs, and
                      preserving records, we aim to educate the public, support
                      research, and inspire collective action to protect our
                      environment for future generations.
                    </p>
                    <div className=" gap-x-5 flex justify-center  text-primary"></div>
                  </CardContent>
                </Card>
              </div>

              {/* //forquiz Section */}
              <div className="mt-10 text-center pb-5">
                <Card className="max-w-2xl mx-auto shadow-elegant bg-gradient-subtle border-primary/20">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-4 pt-3">
                      Let's Play Some Fun Quiz About These Glacier Lakes
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      You will be given 10 questions about glacier facts. Try
                      your best to answer all of them correctly.{" "}
                    </p>
                    <div className="flex items-center justify-center gap-2 text-primary">
                      <button
                        className=" bg-green-800 border-green-800 hover:bg-green-950 rounded-sm px-4 py-1 text-white"
                        onClick={() => Navigate("/quiz")}
                      >
                        Start Quiz
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-10 text-center pb-5">
                <Card className="max-w-xl mx-auto shadow-elegant bg-gradient-subtle border-primary/20">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-4 pt-3">
                      Start Exploring
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Select a glacier from the sidebar to view detailed
                      time-lapse imagery, scientific data, and climate impact
                      analysis.
                    </p>
                    <div className="flex items-center justify-center gap-2 text-primary"></div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            // passing props  to generate inf

            <GlacierDetails
              glacier={selectedGlacier}
              cordinate={selectedCordinate}
            />
          )}
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Index;
