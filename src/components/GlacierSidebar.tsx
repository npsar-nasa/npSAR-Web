import React, { useEffect, useState } from "react";
import { useGlaciers } from "../hooks/usedat";
import searchimg from "../assets/search.png";
import { useNavigate } from "react-router-dom";
import {
  Mountain,
  TrendingDown,
  TrendingUp,
  Minus,
  AlertTriangle,
  MapPin,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import home from "../assets/house.png";
// import { nepaliGlaciers, type Glacier } from "@/data/glaciers";
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
interface GlacierSidebarProps {
  selectedGlacier: Glacier | null;
  onGlacierSelect: (glacier: Glacier) => void;
  selectedCordinate: Glacier | null;
  onSelectedCordinate: (glacier: Glacier) => void; // setter function being called but its just a function
}

export const GlacierSidebar: React.FC<GlacierSidebarProps> = ({
  selectedGlacier,
  onGlacierSelect,
  selectedCordinate,
  onSelectedCordinate,
}) => {
  // importing router function
  const Navigate = useNavigate();
  const { nepaliGlaciers, loading, error } = useGlaciers(); // taking data out
  const { state } = useSidebar();

  const getStatusIcon = (status: Glacier["status"]) => {
    switch (status) {
      case "retreating":
        return <TrendingDown className="w-4 h-4 text-destructive" />;
      case "advancing":
        return <TrendingUp className="w-4 h-4 text-primary" />;
      case "stable":
        return <Minus className="w-4 h-4 text-muted-foreground" />;
      default:
        return <Mountain className="w-4 h-4" />;
    }
  };

  const getThreatBadge = (threatLevel: Glacier["threat_level"]) => {
    const colors = {
      low: "bg-primary/10 text-primary border-primary/20",
      medium: "bg-amber-500/10 text-amber-600 border-amber-500/20",
      high: "bg-orange-500/10 text-orange-600 border-orange-500/20",
      critical: "bg-destructive/10 text-destructive border-destructive/20",
    };

    return (
      <Badge variant="outline" className={`text-xs ${colors[threatLevel]}`}>
        {state !== "collapsed" && (
          <>
            {threatLevel === "critical" && (
              <AlertTriangle className="w-3 h-3 mr-1" />
            )}
            {threatLevel.charAt(0).toUpperCase() + threatLevel.slice(1)}
          </>
        )}
        {state === "collapsed" && <AlertTriangle className="w-3 h-3" />}
      </Badge>
    );
  };

  const [Query, setQuery] = useState("");
  const [Filtered, setFiltered] = useState<Glacier[]>([]);
  // filtering
  useEffect(() => {
    if (!Query) {
      setFiltered(nepaliGlaciers);
    } else {
      const lowerQuery = Query.toLocaleLowerCase();
      setFiltered(
        nepaliGlaciers.filter((g) =>
          g.name?.toLocaleLowerCase().includes(lowerQuery)
        )
      );
    }
  }, [Query, nepaliGlaciers]);

  // grouping them in order
  const groupedGlaciers = Filtered.reduce((acc, glacier) => {
    if (!acc[glacier.region]) {
      acc[glacier.region] = [];
    }
    acc[glacier.region].push(glacier);
    return acc;
  }, {} as Record<string, Glacier[]>);
  // for conditional  hiding home
  const isHome = window.location.pathname === "/";
  return (
    <Sidebar
      className={`${state === "collapsed" ? "w-16" : "w-80"} `}
      collapsible="icon"
    >
      <div
        className={`relative w-[90%] m-auto mt-3 ${
          state === "collapsed" ? "hidden" : ""
        }`}
      >
        <img
          src={searchimg}
          alt="search"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 pointer-events-none"
        />
        <input
          type="text"
          placeholder="Search By Glacier Lake"
          value={Query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full h-7 pl-10 pr-3 rounded-md border border-input bg-white text-base placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring text-green-900 font-medium"
        />
      </div>

      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center justify-between">
          {state !== "collapsed" && (
            <div className="flex items-center gap-2">
              <Mountain className="w-6 h-6 text-primary" />
              <span className="font-semibold text-sidebar-foreground">
                Nepal's Glacier Lakes
              </span>
            </div>
          )}
          <SidebarTrigger className="text-sidebar-foreground hover:bg-sidebar-accent" />
        </div>
        {state !== "collapsed" && (
          <p className="text-sm text-sidebar-foreground/70 mt-2">
            Monitor {nepaliGlaciers.length} Glacier Lakes Across Nepal's Major
            Mountain Ranges
          </p>
        )}

        {/* // for back to home button */}
        <div
          className={`${
            isHome ? "hiden" : "block"
          } flex relative justify-center pt-3 hover:cursor-pointer`}
          onClick={() => (window.location.href = "/")}
        >
          <button className=" bg-green-950 border-green-800 w-36 hover:bg-green-950 rounded-sm px-4 py-4 text-white"></button>

          <img src={home} alt="" className="absolute bottom-1" />
        </div>
        <div
          className={`${
            isHome ? "hiden" : "block"
          } flex relative justify-center pt-3 hover:cursor-pointer`}
        >
          <button
            className=" bg-green-950 font-medium border-green-800 w-36 hover:bg-green-950 rounded-sm px-3 py-1  text-white"
            onClick={() => Navigate("/about")}
          >
            About
          </button>
        </div>
      </div>
      {/* //mapping thorugh region and then glacier */}
      <SidebarContent className="px-2">
        {Object.entries(groupedGlaciers).map(([region, glaciers]) => (
          <SidebarGroup key={region}>
            <SidebarGroupLabel className="text-sidebar-foreground/80">
              {state !== "collapsed" && (
                <>
                  <MapPin className="w-4 h-4 mr-2" />
                  {region} ({glaciers.length})
                </>
              )}
              {state === "collapsed" && <MapPin className="w-4 h-4" />}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {glaciers.map((glacier) => (
                  <SidebarMenuItem key={glacier.id}>
                    <SidebarMenuButton
                      asChild
                      className={`w-full p-3 ${
                        selectedGlacier?.id === glacier.id
                          ? "bg-sidebar-accent text-sidebar-accent-foreground border-l-2 border-sidebar-primary"
                          : "hover:bg-sidebar-accent/50"
                      }`}
                    >
                      <button
                        onClick={() => {
                          onGlacierSelect(glacier);
                          onSelectedCordinate(glacier);
                        }}
                        className="flex items-start gap-3 text-left"
                      >
                        <div className="flex-shrink-0 mt-1">
                          {getStatusIcon(glacier.status)}
                        </div>
                        {state !== "collapsed" && (
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between mb-0 mt-[5px]">
                              <h3 className="font-medium text-sm text-sidebar-foreground truncate">
                                {glacier.name}
                              </h3>
                            </div>
                            <p className="text-xs text-sidebar-foreground/60 mb-2">
                              {glacier.elevation}m • {glacier.area} km²
                            </p>
                          </div>
                        )}
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
};
