import React from "react";
import testimg from "../assets/hero-glacier.jpg";
import MyMap from "./MyMap";

import {
  Mountain,
  MapPin,
  Ruler,
  Square,
  TrendingDown,
  TrendingUp,
  Minus,
  AlertTriangle,
  Calendar,
  Info,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
// import type { Glacier } from "@/data/glaciers";
import { GlacierSlider } from "./GlacierSlider";
import ChatBot from "@/pages/chat";
import home from "../assets/house.png";

interface GlacierDetailsProps {
  glacier: Glacier | null;
  cordinate: Glacier | null;
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

export const GlacierDetails: React.FC<GlacierDetailsProps> = ({
  glacier,
  cordinate,
}) => {
  const getStatusInfo = (status: Glacier["status"]) => {
    switch (status) {
      case "retreating":
        return {
          icon: <TrendingDown className="w-5 h-5" />,
          text: "Retreating",
          color: "text-destructive bg-destructive/10 border-destructive/20",
        };
      case "advancing":
        return {
          icon: <TrendingUp className="w-5 h-5" />,
          text: "Advancing",
          color: "text-primary bg-primary/10 border-primary/20",
        };
      case "stable":
        return {
          icon: <Minus className="w-5 h-5" />,
          text: "Stable",
          color: "text-muted-foreground bg-muted/50 border-muted",
        };
    }
  };

  const getThreatInfo = (threatLevel: Glacier["threat_level"]) => {
    const configs = {
      low: {
        icon: <Info className="w-4 h-4" />,
        text: "Low Risk",
        color: "text-primary bg-primary/10 border-primary/20",
      },
      medium: {
        icon: <AlertTriangle className="w-4 h-4" />,
        text: "Medium Risk",
        color: "text-amber-600 bg-amber-500/10 border-amber-500/20",
      },
      high: {
        icon: <AlertTriangle className="w-4 h-4" />,
        text: "High Risk",
        color: "text-orange-600 bg-orange-500/10 border-orange-500/20",
      },
      critical: {
        icon: <AlertTriangle className="w-4 h-4" />,
        text: "Critical Risk",
        color: "text-destructive bg-destructive/10 border-destructive/20",
      },
    };
    return configs[threatLevel];
  };

  const statusInfo = getStatusInfo(glacier.status);
  const threatInfo = getThreatInfo(glacier.threat_level);

  return (
    <div className="flex-1 min-h-screen bg-gradient-subtle">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Mountain className="w-8 h-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                {glacier.name}
              </h1>
              <p className="text-muted-foreground flex items-center gap-2 mt-1">
                <MapPin className="w-4 h-4" />
                {glacier.region} Region, Nepal
              </p>
            </div>
          </div>

          {/* Status Badges */}
          <div className="flex flex-wrap gap-3">
            <Badge
              variant="outline"
              className={`px-3 py-1 ${statusInfo.color}`}
            >
              {statusInfo.icon}
              <span className="ml-2 font-medium">{statusInfo.text}</span>
            </Badge>
            <Badge
              variant="outline"
              className={`px-3 py-1 ${threatInfo.color}`}
            >
              {threatInfo.icon}
              <span className="ml-2 font-medium">{threatInfo.text}</span>
            </Badge>
          </div>
        </div>

        {/* Glacier Overview */}
        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="w-5 h-5 text-primary" />
              Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground leading-relaxed">
              {glacier.description}
            </p>

            <Separator />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Mountain className="w-10 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Elevation</p>
                  <p className="font-semibold">
                    {glacier.elevation.toLocaleString()} m
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/20">
                  <Square className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Area</p>
                  <p className="font-semibold">{glacier.area} km²</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-muted">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Coordinates</p>
                  <p className="font-semibold text-sm">
                    {glacier.coordinates.lat.toFixed(4)}°N,{" "}
                    {glacier.coordinates.lng.toFixed(4)}°E
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Glacier Fact */}
        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="w-5 h-5 text-primary" />
              Some Facts About {glacier.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="  ">
              {/* Image wrapper */}
              <div className="items-center justify-center flex pb-4  ">
                <img
                  src={glacier.factimg}
                  alt="img"
                  className="border-green-700 rounded-xl w-2xl transition-transform "
                />
              </div>
              <div className="pb-4">
                <Separator />
              </div>

              <div className=" pt-5 p-4 rounded-lg bg-muted/30 border border-border">
                <div className="flex pl-3">
                  <Mountain className="w-6 text-primary" />
                  <h1 className="font-medium ml-2 text-lg pl-1">
                    • {glacier.facts}
                  </h1>
                </div>

                <div className="flex pl-3">
                  <Mountain className="w-6 text-primary" />
                  <h1 className="font-medium ml-2 text-lg pl-1">
                    • {glacier.fact2}
                  </h1>
                </div>
                <div className="flex pl-3">
                  <Mountain className="w-6 text-primary" />
                  <h1 className="font-medium ml-2 text-lg pl-1">
                    • {glacier.fact3}
                  </h1>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Time-lapse Images */}
        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Time-Series Through SAR
            </CardTitle>
            <p className="text-muted-foreground">
              Synthetic Aperture Radar (SAR) images were obtained for 11 years,
              ensuring that each acquisition corresponds to the month of June.
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex ">
              <GlacierSlider
                images={glacier.glacier_images}
                glacierName={glacier.name}
              />
              <MyMap glacier={cordinate}></MyMap>
            </div>
          </CardContent>
        </Card>

        {/* Additional Insights */}
        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-primary" />
              Climate Impact Analysis With AI
            </CardTitle>
          </CardHeader>
          <CardContent className="">
            <div className=" 2xl:flex over">
              <div className="space-y-3 ">
                <div className="p-4 rounded-lg bg-muted/30 border border-border">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    {statusInfo.icon}
                    Current Status: {statusInfo.text}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    This glacier is currently{" "}
                    {glacier.status === "retreating"
                      ? "losing ice mass due to rising temperatures and changing precipitation patterns"
                      : glacier.status === "advancing"
                      ? "gaining ice mass, which is unusual in the current climate context"
                      : "maintaining relatively stable ice mass, though this may change with continued warming"}
                    .
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-muted/30 border border-border">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    {threatInfo.icon}
                    Threat Assessment: {threatInfo.text}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {glacier.threat_level === "critical"
                      ? "This glacier faces immediate threats from climate change and requires urgent monitoring and intervention strategies."
                      : glacier.threat_level === "high"
                      ? "Significant changes are occurring that could impact downstream communities and ecosystems."
                      : glacier.threat_level === "medium"
                      ? "Moderate changes are observed, requiring continued monitoring and adaptive management."
                      : "Current changes are within normal variations, but long-term monitoring remains important."}
                  </p>
                </div>
              </div>
              <ChatBot glacier={cordinate}></ChatBot>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
