import Image from "next/image";
import { Inter } from "next/font/google";
import Seccion1 from "../components/content/seccion1/seccion1";
import Seccion2 from "../components/content/seccion2/seccion2";
import Seccion3 from "../components/content/seccion3/seccion3";
import Seccion4 from "../components/content/seccion4/seccion4";
import Seccion5 from "../components/content/seccion5/seccion5";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen  ">
      <div className="bg-gradient-to-t from-cyan-700 to-cyan-900 w-full h-full text-white  w-full">
        <Seccion1 />
        <div className="px-24">
        <Seccion2 />
        <Seccion3 />
        <Seccion4 />
        </div>
        <Seccion5 />
      </div>
    </div>
  );
}
