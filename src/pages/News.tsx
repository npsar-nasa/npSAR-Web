import { Mountain, Globe, TrendingDown, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Navbar from "./NavBar";
import indxdtl from "../assets/indexdetail.png";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";

const News = () => {
  const Navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <Navbar></Navbar>
      <div className=" text-center mt-10">
        <Card className="max-w-4xl mx-auto shadow-elegant bg-gradient-subtle border-primary/20">
          <CardContent className="p-8 pb-0">
            {/* <h2 className="text-2xl font-bold text-foreground mb-4 pt-3">
              Why This?
            </h2>
            <p className="text-muted-foreground mb-6 text-justify">
              We are building this website to raise awareness about climate
              change by focusing on Glacier, one of the clearest indicators of
              global warming. Glaciers are melting rapidly, affecting sea
              levels, water resources, and millions of lives worldwide. This
              platform makes complex climate data simple and visual, helping
              students, researchers, and the public understand the impacts while
              preserving a record for future generations. It aims to educate,
              engage, and inspire action toward protecting our planet.
            </p> */}
            <h1 className="text-2xl font-bold text-green-800 text-foreground mb-4 pt-3">
              News About Glacier Lake Outbrusts
            </h1>
            <div className=" gap-x-5 flex justify-center  text-primary"></div>
            <img src={indxdtl} className="w-auto h-auto  pt-6" />
            <label htmlFor="">Source: The Kathmandu Post</label>
          </CardContent>
        </Card>
      </div>
      <div className=" text-center mt-10">
        <Card className="max-w-4xl mx-auto shadow-elegant bg-gradient-subtle border-primary/20">
          <CardContent className="p-8 pb-0">
            <h2 className="text-2xl font-bold text-green-800 text-foreground mb-4 pt-3">
              Two glacial lakes above Thame village burst, causing a significant
              GLOF.
            </h2>
            <div className=" gap-x-5 flex justify-center text-primary">
              <img src={img1} className="pt-6" />
            </div>

            <label htmlFor="">Source: ICIMOD</label>
            <h2 className="text-2xl font-bold text-foreground mb-4 pt-3">
              Destroyed 14 properties, including a school, health post, five
              hotels, and seven homes; displaced 135 residents.
            </h2>
          </CardContent>
        </Card>
      </div>
      {/* news 3 */}
      <div className=" text-center mt-10">
        <Card className="max-w-4xl mx-auto shadow-elegant bg-gradient-subtle border-primary/20">
          <CardContent className="p-8 pb-0">
            <h2 className="text-2xl font-bold text-green-800 text-foreground mb-4 pt-3">
              A supraglacial lake in Tibet drained suddenly, leading to a
              devastating flood in Nepal.
            </h2>
            <div className=" gap-x-5 flex justify-center text-primary">
              <img src={img2} className="pt-6" />
            </div>

            <label htmlFor="">Source: The Kathmandu Post</label>
            <h2 className="text-2xl font-bold text-foreground mb-4 pt-3">
              At least nine people killed, 19 missing; Friendship Bridge washed
              away; several hydropower projects on the Trishuli River severely
              damaged.
            </h2>
          </CardContent>
        </Card>
      </div>
      {/* // news 4 */}
      <div className=" text-center mt-10">
        <Card className="max-w-4xl mx-auto shadow-elegant bg-gradient-subtle border-primary/20">
          <CardContent className="p-8 pb-0">
            <h2 className="text-2xl font-bold text-green-800 text-foreground mb-4 pt-3">
              A seasonal ice-dammed lake in Upper Mustang burst, causing a flash
              flood.
            </h2>
            <div className=" gap-x-5 flex justify-center text-primary">
              <img src={img3} className="pt-6" />
            </div>

            <label htmlFor="">Source: The Himmalayan Times</label>
            <h2 className="text-2xl font-bold text-foreground mb-4 pt-3">
              Damaged bridges, disrupted travel, and deposited sediment
              downstream.
            </h2>
          </CardContent>
        </Card>
      </div>
      {/* // news 5 */}
      <div className=" text-center mt-10">
        <Card className="max-w-4xl mx-auto shadow-elegant bg-gradient-subtle border-primary/20">
          <CardContent className="p-8 pb-0">
            <h2 className="text-2xl font-bold text-green-800 text-foreground mb-4 pt-3">
              A glacial lake burst in Tibet, sending floodwaters into Nepal's
              Bhotekoshi River.
            </h2>
            <div className=" gap-x-5 flex justify-center text-primary">
              <img src={img4} className="pt-6" />
            </div>

            <label htmlFor="">Source: The Kathmandu Post</label>
            <h2 className="text-2xl font-bold text-foreground mb-4 pt-3">
              Destroyed infrastructure, including the Rasuwagadhi hydropower
              plant, and caused significant damage.
            </h2>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default News;
