import React, { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, Calendar, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import Slider from "@mui/material/Slider";

interface GlacierImage {
  url: string;
  url_s: string;
  year: number;
  description: string;
  area: number;
}

interface GlacierSliderProps {
  images: GlacierImage[];
  glacierName: string;
}

export const GlacierSlider: React.FC<GlacierSliderProps> = ({
  images,
  glacierName,
}) => {
  const sortedImages = useMemo(
    () => [...images].sort((a, b) => a.year - b.year),
    [images]
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = sortedImages[currentIndex];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sortedImages.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + sortedImages.length) % sortedImages.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!sortedImages || sortedImages.length === 0) {
    return (
      <Card className="w-full max-w-4xl mx-auto shadow-elegant">
        <CardContent className="p-8 text-center">
          <p className="text-muted-foreground">
            No images available for this glacier.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-4xl shadow-glacier overflow-hidden">
      <CardContent className="p-0">
        {/* Main Image Display */}
        <div className="relative">
          <img
            src={currentImage.url}
            alt={`Image ${currentImage.year}`}
            className="w-full h-full transition-transform object-cover duration-300"
          />
          {/* Hover Preview */}

          <img
            src={currentImage.url_s}
            alt={`Image ${currentImage.year}`}
            className="absolute bottom-0 right-0 w-[25%] h-[25%] rounded-lg border-2 cursor-pointer
           transition-all duration-1000 ease-in-out
           hover:w-full hover:h-full hover:bottom-0 hover:right-0 hover:rounded-none hover:border-none"
          />

          {/* Navigation Buttons */}
          {sortedImages.length > 1 && (
            <>
              <Button
                variant="secondary"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90 shadow-elegant"
                onClick={goToPrevious}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90 shadow-elegant"
                onClick={goToNext}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </>
          )}

          {/* Year Badge */}

          <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground text-lg px-3 py-1 flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {currentImage.year}
          </Badge>
          <Badge className="absolute top-4 left-24 bg-primary text-primary-foreground text-lg px-3 py-1 flex items-center gap-1">
            <h1>Area : {currentImage.area} km²</h1>
          </Badge>

          {/* Image Counter */}
          {sortedImages.length > 1 && (
            <Badge
              variant="secondary"
              className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm"
            >
              {currentIndex + 1} / {sortedImages.length}
            </Badge>
          )}
        </div>

        {/* Image Description */}
        <div className="p-6 bg-gradient-subtle">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-foreground font-medium">
                {currentImage.description}
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                Captured in {currentImage.year}
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Navigation Slider */}
        {sortedImages.length > 1 && (
          <div className="p-4 border-t bg-muted/30">
            <div className="flex justify-center">
              <Slider
                value={currentIndex}
                min={0}
                max={sortedImages.length - 1}
                step={1}
                marks={sortedImages.map((image, idx) => ({
                  value: idx,
                  label: image.year.toString(),
                }))}
                valueLabelDisplay="on"
                onChange={(_, newValue) => goToSlide(newValue as number)}
                sx={{ width: "80%" }}
              />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
