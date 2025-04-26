'use client';

/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { Share_Tech_Mono } from "next/font/google";
import { useEffect } from "react";
// import TypewriterComponent from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
// import { use } from "react";
import { Typewriter } from "react-simple-typewriter";
const font = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      // easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);
  return (

    <div className={`${font.className} flex flex-col items-center max-w-[2520px] justify-center mx-auto h-screen text-center bg-black text-[#00ffcc]`}>
      <div>
        <h1 data-aos="zoom-in" className="text-5xl font-bold mb-[40px] animation">ELLI-PSE : Portail d'accès</h1>
        {/* <TypewriterComponent */}
           {/* options={{ */}
             {/* strings: ["Bienvenue dans l'univers caché d'Alex. Choisissez votre point d'entrée."], */}
        {/* //     autoStart: true,
        //     loop: true,
        //     deleteSpeed: 50,
        //     delay: 100,
        //   }}
        // /> */}
        <Typewriter
          words={['Bienvenue dans l\'univers caché d\'Alex. Choisissez votre point d\'entrée.']}
          loop={1000000}
          cursor
          cursorStyle='|'
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
          onLoopDone={() => console.log(`loop completed`)}
          onType={() => console.log(`typed`)}
        />
      </div>
      <div className="flex flex-col mt-[70px] gap-4  ">
        <Link data-aos-delay="500" data-aos="fade-up" className="nav-buttons" href="/pisodes">Épisodes</Link>
        <Link data-aos-delay="600" data-aos="fade-up" className="nav-buttons" href="/nigmes">Énigmes</Link>
        <Link data-aos-delay="700" data-aos="fade-up" className="nav-buttons" href="/bonus">Bonus</Link>
        <Link data-aos-delay="800"  data-aos="fade-up" className="nav-buttons" href="/faq">FAQ</Link>
        <Link data-aos-delay="900" data-aos="fade-up" className="nav-buttons" href="/propos">Àpropos</Link>
      </div>
    </div>
  );
}
