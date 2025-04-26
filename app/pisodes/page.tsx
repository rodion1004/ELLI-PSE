
/* eslint-disable react/no-unescaped-entities */
import "aos/dist/aos.css";

export default function Pisodes() {
    return (
        <div className="flex flex-col my-[30px] p-[40px] max-w-[1000px]  mx-auto  text-center bg-black text-[#0f0]">
            <h1 data-aos-delay="500" data-aos="zoom-in-up" className="text-[36px] font-bold mb-[30px] text-shadow-[0_0_10px_#0f0]">
                Épisodes ELLI-PSE
            </h1>
            <div className="  bg-black text-[#0f0]">

                <div data-aos-delay="300" data-aos="fade-up" className="bg-[#111] rounded-lg mb-[15px] border items-center shadow-[0_0_10px_#0f0] flex justify-between p-[20px]">
                    <div className="text-left">
                        <h2 className="text-[20px] font-bold">Épisode 1 : Prisonnier Amnésique</h2>
                        <span className=" text-[#ccc] text-[14px]">Disponible</span>
                    </div>
                    <div className=" font-semibold flex text-[#111] ">
                        <button className="bg-[#0f0] cursor-pointer px-[16px] py-[4px] rounded">Voir</button>
                        <button className="bg-[#0f0] cursor-pointer px-[16px] ml-[15px] rounded">Résoudre</button>
                    </div>
                </div>
                <div data-aos-delay="400" data-aos="fade-up" className="bg-[#111] rounded-lg mb-[15px] border items-center shadow-[0_0_10px_#0f0] flex justify-between p-[20px]">
                    <div className="text-left">
                        <h2 className="text-[20px] font-bold">Épisode 2 : Le Début des Souvenirs</h2>
                        <span className=" text-[#ccc] text-[14px]">Disponible</span>
                    </div>
                    <div  className=" font-semibold flex text-[#111] ">
                        <button className="bg-[#0f0] cursor-pointer px-[16px] py-[4px] rounded">Voir</button>
                        <button className="bg-[#0f0] cursor-pointer px-[16px] ml-[15px] rounded">Résoudre</button>
                    </div>
                </div>
                <div data-aos-delay="500" data-aos="fade-up" className="bg-[#111] disabled:not-even:not-active: grayscale rounded-lg mb-[15px] border items-center shadow-[0_0_10px_#0f0] flex justify-between p-[20px]">
                    <div className="text-left">
                        <h2 className="text-[20px] font-bold">Épisode 3 : La Traque dans l'Obscurit</h2>
                        <span className=" text-[#ccc] text-[14px]">Disponible le 28 septembre 2025</span>
                    </div>
                    <div className=" font-semibold flex text-[#111] ">
                        <button className="bg-[#0f0] cursor-pointer px-[16px] py-[4px] rounded">Voir</button>
                        <button className="bg-[#0f0] cursor-pointer px-[16px] ml-[15px] rounded">Résoudre</button>
                    </div>
                </div>
            </div>
        </div>
    );
}