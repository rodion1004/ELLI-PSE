/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState } from "react";

export default function Faq() {
    const [isActive, setIsActive] = useState(false);
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    const [isActive5, setIsActive5] = useState(false);

    return (
        <div className="  flex flex-col items-center max-w-[2520px] p-[40px] mt-[60px] mx-auto  text-center text-[#0f0]">
            <h1 data-aos="zoom-in-down" className="text-[36px] mb-[30px] font-bold text-shadow-[0_0_10px_#0f0f]">FAQ - Questions Fréquentes</h1>
            <div data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500" className={`${isActive ? 'active:' : ''} text-left border max-w-[800px] w-full cursor-pointer bg-[#111] shadow-[0_0_10px_#0f0] rounded-[8px] p-[20px] mb-[20px]`} onClick={() => setIsActive(!isActive)}>
                <h3 className="text-[20px] cursor-pointer font-bold">Est-ce que je dois résoudre les énigmes pour voir les vidéos ?</h3>
                {isActive && <p data-aos="fade-zoom" 
                    className="text-[#ccc] text-[16px] leading-normal mt-[10px]">Non, toutes les vidéos sont accessibles à leur date de sortie. Mais seuls ceux qui résolvent les énigmes auront accès aux contenus cachés (indices, documents, vidéos bonus).</p>}
            </div>
            <div data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="700" className={`${isActive1 ? 'active:' : ''} text-left border max-w-[800px] w-full cursor-pointer bg-[#111] shadow-[0_0_10px_#0f0] rounded-[8px] p-[20px] mb-[20px]`} onClick={() => setIsActive1(!isActive1)}>
                <h3 className="text-[20px] cursor-pointer font-bold">J'ai trouvé une énigme mais je ne sais pas quoi en faire</h3>
                {isActive1 && <p data-aos="fade-zoom"
                    data-aos-offset="0" className="text-[#ccc] text-[16px] leading-normal mt-[10px]">Chaque énigme débloque une zone spécifique du site. Tape le bon code dans la section Ordinateur d'Alex à pour débloquer le contenu de l'épisode concerné.</p>}
            </div>
            <div data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="900" className={`${isActive2 ? 'active:' : ''} text-left border max-w-[800px] w-full cursor-pointer bg-[#111] shadow-[0_0_10px_#0f0] rounded-[8px] p-[20px] mb-[20px]`} onClick={() => setIsActive2(!isActive2)}>
                <h3 className="text-[20px] cursor-pointer font-bold">À quelle fréquence les épisodes sortent-ils ?</h3>
                {isActive2 && <p data-aos="fade-zoom"
                    data-aos-offset="0" className="text-[#ccc] text-[16px] leading-normal mt-[10px]">Un nouvel épisode est publié chaque dimanche à 15h20, à partir de la mi-septembre.</p>}
            </div>
            <div data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="1100" className={`${isActive3 ? 'active:' : ''} text-left border max-w-[800px] w-full cursor-pointer bg-[#111] shadow-[0_0_10px_#0f0] rounded-[8px] p-[20px] mb-[20px]`} onClick={() => setIsActive3(!isActive3)}>
                <h3 className="text-[20px] cursor-pointer font-bold">Où puis-je regarder les vidéos ?</h3>
                {isActive3 && <p data-aos="fade-zoom"
                    data-aos-offset="0" className="text-[#ccc] text-[16px] leading-normal mt-[10px]">Les épisodes sont disponibles sur notre chaîne YouTube (et listés sur la page «Vidéos» du site).</p>}
            </div>
            <div data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="1300" className={`${isActive4 ? 'active:' : ''} text-left border max-w-[800px] w-full cursor-pointer bg-[#111] shadow-[0_0_10px_#0f0] rounded-[8px] p-[20px] mb-[20px]`} onClick={() => setIsActive4(!isActive4)}>
                <h3 className="text-[20px] cursor-pointer font-bold">C'est quoi ELLI-PSE ?</h3>
                {isActive4 && <p data-aos="fade-zoom"
                    data-aos-offset="0" className="text-[#ccc] text-[16px] leading-normal mt-[10px]">Un projet narratif immersif mélant fiction, hacking, énigmes et thriller interactif. Tu avances dans l'histoire à condition de déchiffrer les indices.</p>}
            </div>
            <div data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="1500" className={`${isActive5 ? 'active:' : ''} text-left border max-w-[800px] w-full cursor-pointer bg-[#111] shadow-[0_0_10px_#0f0] rounded-[8px] p-[20px] mb-[20px]`} onClick={() => setIsActive5(!isActive5)}>
                <h3 className="text-[20px] cursor-pointer font-bold">Je suis bloqué. Comment obtenir de l'aide ?</h3>
                {isActive5 && <p data-aos="fade-zoom"
                    data-aos-offset="0" className="text-[#ccc] text-[16px] leading-normal mt-[10px]">Rejoins notre communauté sur Instagram <a href="https://www.instagram.com/lgoprod" className="text-[#0ff]" target="_blank">@lgoprod</a> pour poser tes questions ou échanger avec d'autres joueurs.</p>}
            </div>

        </div>
    )
}
