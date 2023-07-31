import { useState, useEffect } from "react";
import Image from "next/image";
import Seccion1 from "../components/content/1videolong/seccion1";
import Seccion2 from "../components/content/2bannerlong/seccion2";
import Seccion3 from "../components/content/3cuadricula/seccion3";
import Seccion4 from "../components/content/4rowcontent/seccion4";
import Seccion5 from "../components/content/5footer/seccion5";
import Navtop from "../components/nav/navtop";
import Navsecond from "../components/nav/secondnav";
import langes from "../lib/es.json";
import langen from "../lib/en.json";

 interface LanguageObject {
   [key: string]: string;
}

export default function Home() {
  const [lang, setLang] = useState("es");
  const [langprop, setLangProp] = useState<LanguageObject | undefined>(undefined);

  useEffect(() => {
     const setLanguageProperty = () => {
      switch (lang) {
        case "es":
          setLangProp(langes);
          break;
        case "en":
          setLangProp(langen);
          break;
        default:
           setLangProp(langes);
          break;
      }
    };

     setLanguageProperty();
  }, [lang]);  
  
  return (
    <div className="min-h-screen">
      <Navtop />
      <Navsecond />
      <div className="bg-gradient-to-t from-cyan-700 to-cyan-900 w-full h-full text-white w-full">
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