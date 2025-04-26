'use client';
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image"
import Link from "next/link"
// import TypewriterComponent from "typewriter-effect"
import { Typewriter } from "react-simple-typewriter";
export default function Propos() {

    return (
        <div className="text-[#ccc]  px-[20px] py-[60px] max-w-[800px] mx-auto text-center h-max-screen overflow-hidden bg-black flex flex-col items-center justify-center">
            <div data-aos="fade-up"
                data-aos-duration="3000" className=" flex flex-col items-center ">
                <Image src="/logo.png" width={120} height={120} className="mb-[20px] h-auto w-auto" alt="Logo La Grande Ourse" />

                <h1 className="text-[36px] text-[#0f0] font-bold mb-[30px] text-shadow-[0_0_10px_#0f0]">
                    <Typewriter
                        words={['La Grande Ourse', 'La Grande Ourse', 'La Grande Ourse']}
                        loop={1000000}
                        cursor
                        cursorStyle='|'
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        onLoopDone={() => console.log(`loop completed`)}
                        onType={() => console.log(`typed`)}
                    />
                </h1>
                <p className="text-[17px] mt-[20px]"><b className="mr-[7px]"> La Grande Ourse</b> est une boîte de production indépendante fondée par des passionnés d'histoires fortes, visuelles et engagées. Nous aimons raconter autrement, jouer avec les codes du cinéma, du digital, et du réel.</p>
                <p>Notre ambition : créer des récits percutants, immersifs, où le spectateur devient acteur.</p>
                <h2 className="text-[#0ff] text-[24px] mt-[40px] font-bold">Notre mission</h2>
                <p className="text-[17px] mt-[20px]">
                    À travers des projets comme <strong>ELLI-PSE</strong>, nous voulons explorer les frontières entre fiction et expérience.
                    <br />Donner la parole à ceux qui dérangent, choquer pour éveiller, divertir pour dénoncer.
                </p>

                <h2 className="text-[#0ff] text-[24px] mt-[40px] font-bold">Et après ?</h2>
                <p className="text-[17px] mt-[20px]">
                    Ce projet n'est que le début. Nous avons d'autres idées en développement : courts-métrages, séries web, formats interactifs.
                    <br />Rejoins-nous sur Instagram : <Link className="text-[#0ff]" href="https://www.instagram.com/lgoprod" target="_blank">@lgoprod</Link>
                </p>

                <p className="mt-[40px] text-[#888]">© 2025 – La Grande Ourse Prod</p>
            </div>
        </div>
    )
}