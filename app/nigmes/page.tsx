/* eslint-disable react/no-unescaped-entities */

export default function Nigmes() {
    return (
        <div className="bg-[#2b2b2b] flex flex-col items-center max-w-[2520px] justify-center mx-auto h-screen text-center text-[#00ffcc]">
            <div data-aos="fade-down"
             data-aos-offset="300"
                data-aos-duration="900" className="bg-[#111319] py-[60px] px-[30px] border-[2px] rounded-[12px] shadow-[0_0_5px_#00ffcc] duration-900 hover:shadow-[0_0_25px_#00ffcc] relative min-w-[320px]">
                <h2 className="text-[24px] flex items-center justify-center">Connexion Sécurisée</h2>
                <p className="m-[20px]" >Accès au bureau d'Alex</p>
                <form >
                    <input className="w-full bg-black p-[12px] my-[15px] duration-500 border border-[#00ffcc56] hover:border-[#00ffcc] focus:border-[#00ffcc] rounded outline-none" type="text" placeholder="Login" />
                    <input className="w-full bg-black p-[12px] my-[15px] duration-500 border border-[#00ffcc56] hover:border-[#00ffcc] focus:border-[#00ffcc] rounded outline-none" type="password" placeholder="Mot de passe" />
                    <button className="bg-[#00ffcc] cursor-pointer font-bold mt-[15px] p-[12px] rounded w-full text-black shadow-[0_0_5px_#00ffcc] hover:shadow-[0_0_15px_#00ffcc]">Connexion</button>
                    <div className="mb-[30px]"></div>
                </form>
            </div>
        </div>
    )
}

