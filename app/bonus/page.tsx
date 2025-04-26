/* eslint-disable react/no-unescaped-entities */

export default function Bonus() {
    return (
        <div className="bg-black flex flex-col items-center max-w-[2520px] justify-center mx-auto h-screen text-center text-[#0f0]">
            <div>
                <h1 data-aos="zoom-in-up" className="text-[32px] mb-[20px] text-shadow-[0_0_10px_#0f0]">ACCÉS FINAL - BONUS</h1>
                <form data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0" className=" bg-[#111] p-[20px] border-[1px] rounded-[8px] shadow-[0_0_5px_#0f0] hover:shadow-[0_0_15px_#0f0] duration-700 relative min-w-[320px]">
                    <p>Entrez le<b className="mx-[5px]">dernier code secret</b>pour accéder à la vidéo finale :</p>
                    <input type="text" className="border border-[#99999956] hover:border-[#999999] focus:border-[#999999] duration-500 outline-none mt-[20px] w-[80%] rounded-[4px] p-[10px] text-[16px] text-[#999] placeholder-[#999]" placeholder="ex: CODE_EPISODE10" />
                    <button className="mt-[15px] font-bold bg-[#0f0] text-black py-[10px] px-[20px] border-none rounded-[4px] shadow-[0_0_5px_#0f0] hover:shadow-[0_0_15px_#0f0] cursor-pointer">D'bloquer</button>
                </form>
                <div></div>
            </div>
        </div>
    )
}