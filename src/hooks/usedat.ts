// src/hooks/useGlaciers.ts
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

// Type for Glacier row
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

export const useGlaciers = () => {
  const [nepaliGlaciers, setnepaliGlaciers] = useState<Glacier[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGlaciers = async () => {
      const { data, error } = await supabase.from("glaciers").select(`
        *,
        glacier_images (url,url_s, year, description,area)
      `);

      if (error) {
        console.error("❌ Error fetching glaciers:", error.message);
        setError(error.message);
      } else {
        setnepaliGlaciers(data as Glacier[]);
      }
      setLoading(false);
    };

    fetchGlaciers();
  }, []);

  return { nepaliGlaciers, loading, error };
};
