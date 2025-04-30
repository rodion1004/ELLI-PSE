/* eslint-disable react/no-unescaped-entities */

import { Share_Tech_Mono } from 'next/font/google';

const font = Share_Tech_Mono({
    subsets: ['latin'],
    weight: ['400'],
});

export default function Enigma() {
    return (
        <div className={`${font.className}  bg-[#2b2b2b] flex flex-col items-center max-w-[2520px] justify-center mx-auto h-screen text-center text-[#00ffcc]`}>
            <div data-aos="fade-down"
                data-aos-offset="300"
                data-aos-duration="900" className="bg-[#111319] py-[40px] px-[30px] border-[2px] rounded-[12px] shadow-[0_0_5px_#00ffcc] duration-900 hover:shadow-[0_0_25px_#00ffcc] relative min-w-[320px]">
                <h2 className="text-[24px] font-bold flex items-center justify-center">Connexion</h2>
                <p className="m-[10px]" >Accès réserve au bureau d'Alex </p>
                <form >
                    <input className="w-full bg-black text-[#eeeeee] p-[12px] my-[7px] duration-500 border border-[#00ffcc56] hover:border-[#00ffcc] focus:border-[#00ffcc] rounded-[6px] outline-none" type="text" placeholder="Identifiant" />
                    <input className="w-full bg-black text-[#eeeeee] p-[12px] my-[7px] duration-500 border border-[#00ffcc56] hover:border-[#00ffcc] focus:border-[#00ffcc] rounded-[6px] outline-none" type="password" placeholder="Mot de passe" />
                    <button className="bg-[#00ffcc] cursor-pointer font-normal mt-[7px] py-[12px] px-[20px] rounded  text-black shadow-[0_0_5px_#00ffcc] hover:bg-[#00ffaa] hover:shadow-[0_0_15px_#00ffcc]">Se connecter</button>
                    <div className="mb-[20px]"></div>
                </form>
            </div>
        </div>
    )
}

