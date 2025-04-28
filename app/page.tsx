'use client';


import "./globals.css";
import Image from "next/image";
import { Special_Elite } from "next/font/google";
import Link from "next/link";
// import { Open_Sans } from "next/font/google";

const font = Special_Elite({
  subsets: ["latin"],
  weight: "400",
})
export default function Home() {

  return (
    <div className="bg-[#031218] text-[#fff] flex-col flex justify-center items-center">
      <div className="max-w-[910px] w-[900px]  bg-[#06202b] mx-auto">
        <div className="main-bg">
          <Image src="/TDF-Logo.png" className="top-[10%] w-auto h-auto left-[20%] relative" width={250} height={200} alt="hello" />
          <div className=" bg-gradient-to-b from-[] to-[#06202b] absolute h-[100px] w-full bottom-0 left-0"></div>
        </div>
        <br />
        <div className="flex flex-col justify-center  text-center mx-[40px]">
          <div className="py-[15px]">
            <h1 className={`text-[#cc8124] h-[36px] text-[30px] ${font.className}`}>Get ready for The Darkest Files!</h1>
            <h2 className="mt-[.3em] mb-[22px] ">a true crime investigation game</h2>
            <h3 className=" leading-[1.5em] ">&quot;Where Mystery Meets Justice: Mixing <b className=" font-semibold">Obra Dinn&apos;s</b>  Intrigue with <b className="font-semibold">Ace Attorney&apos;s</b>  Courtroom Drama.&quot;</h3>
            <h5 className=" mt-[32px]">Investigate real historical crimes, interrogate suspects, win your case in court and deliver justice.</h5>
            <div className="flex justify-center px-[18px] items-center mt-[10px]">
              <Link className="text-[25px]  bg-[#05ce78] py-[10px] duration-500 px-[27px] rounded hover:text-black hover:bg-white" href="#sign"><span>Sign up here!</span></Link>
            </div>
          </div>
          <div className="py-[30px]">
            <video className="w-full" loop muted autoPlay playsInline>
              <source src="/TDF_Ad_Teaser_01_short_v3_SMALL_720.48108c0.mp4" type="video/mp4" />
            </video>
          </div>
          <div className=" text-left">
            <h4 className={`${font.className} text-[#cc8124] text-[22px]`}>In a nutshell:</h4>
            <h5>We invite you on a gripping journey with The Darkest Files: a Noir-style tale set in post-WWII.</h5>
            <h5>Every case could rewrite history, and justice is hard-won. This is a story of determination, truth-seeking, and fighting for justice against all odds.</h5>
            <ul className="px-[54px] mt-[21px]">
              <li>📖 Gripping narrative</li>
              <li>🎨 Captivating Noir-inspired art style</li>
              <li>💬 Interrogate suspects</li>
              <li>👀 Dive into memories and documents</li>
              <li>🕵️‍♀️ Reconstruct the crime</li>
              <li>⚖️ Win your case in court</li>
            </ul>
          </div>

          <div className="mt-[26px]">
            <div className=" text-left">
              <h4 className={`${font.className} text-[#cc8124] text-[22px]`}>Interrogate suspects</h4>
              <h5>Gather vital information, convict suspects when they lie and bring the truth to light!</h5>
            </div>
            <div className="py-[24px]">
              <video className="w-full" loop muted playsInline autoPlay>
                <source src="/tdf_witness02.fb51a6a.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="mt-[20px]">
            <div className=" text-left">
              <h4 className={`${font.className} text-[#cc8124] text-[22px]`}>Reconstruct the crime</h4>
              <h5>Create your own theory on the profiling board and identify the perpetrators!</h5>
            </div>
            <div className="flex py-[24px]">
              <video className="w-full" loop muted autoPlay playsInline>
                <source src="/tdf_reconstruction.6b5f7b5.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="mt-[20px]">
            <div className=" text-left">
              <h4 className={`${font.className} text-[#cc8124] text-[22px]`}>Win your case in court</h4>
              <h5>Convince the court with your theory and finally ensure justice for crimes long thought forgotten!</h5>
            </div>
            <div className="flex py-[24px]">
              <video className="w-full" loop muted autoPlay playsInline>
                <source src="/tfd_court02.8aa7bee.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="mt-[20px]">
            <div className=" text-left">
              <h4 className={`${font.className} text-[#cc8124] text-[22px]`}>True Crime</h4>
              <h5>The Darkest Files is inspired by real cases and investigations conducted by Hessian Attorney General Fritz Bauer in his early Frankfurt years before the Auschwitz trial.</h5>
            </div>
            <div className="flex py-[24px]">
              <video className="w-full" loop muted autoPlay playsInline>
                <source src="/tdf_bauer.e79703d.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div id="sign" className="border-2 my-[40px] border-dashed border-[#05ce78] p-[28px]">
            <h5 className="text-center mb-[20px]">Join 3.213 newsletter members to:</h5>
            <ul className="ml-[70px] text-left mb-[20px]">
              <li>🔔 Get notified on launch!</li>
              <li>🐦 Book time limited Early Bird tiers</li>
              <li>🗞️ Subscribe to The Darkest Files updates</li>
              <li>🔥 Be one of the first to play!</li>
            </ul>
            <form>
              <div className="flex mb-[20px] ml-[70px]">
                <h5 className="mr-[10px]">Add your email address:</h5>
                <div className="flex-1 ">
                  <input type="mail" className="border-none w-full rounded-[3px] text-[#000] px-[14px] py-[1px] outline-none bg-white" placeholder="name@example.com" />
                </div>
              </div>
              <div className="flex relative">
                <input type="checkbox" className="w-[20px] h-[20px] mt-[6px] absolute" />
                <div className="text-left ml-[30px]">
                  <h6 className="mb-[8px]"><b className="font-semibold">Marketing permission: </b> I give my consent to Paintbucket Games to be in touch with me via email using the information I have provided in this form for the purpose of news, updates and marketing.</h6>
                  <h6>What to expect: We value and respect your personal data and privacy. To view our privacy policy, please visit our website. By submitting this form, you agree that we may process your information in accordance with these terms.</h6>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <Link href="/eil-pes" className="bg-[#05ce78] w-[350px] flex justify-center mt-[20px]  rounded py-[5px] duration-500 text-[22px] hover:bg-[#fff] hover:text-black " > Sign me up! </Link>
              </div>
            </form>
          </div>
          <div className="mb-[80px]">
            <h2 className="mt-[40px]">Wishlist on Steam to support us and to become a part of our journey!</h2>
            <div className="border border-r-0 border-b-0 border-t-[#424c5c] border-l-[#424c5c] rounded-[4px] py-[10px] px-[15px] bg-gradient-to-r from-[#3b4351] to-[#282e39] my-[40px] relative ">
              <div className="flex">
                <Link href="https://store.steampowered.com/app/2058730/The_Darkest_Files/?snr=1_5_1100__1100&utm_source=steamwidget" className="text-[21px]">Buy The Darkest Files</Link >
                <Link href="https://store.steampowered.com/app/2058730/The_Darkest_Files/?snr=1_5_1100__1100&utm_source=steamwidget" className="text-[#9e9e9e] text-[21px] ml-[7px]">on Steam</Link>
              </div>
              <div className="flex my-[10px]">
                <Image src="/darkest.jpg" width={285} height={70} className="w-auto h-auto ]" alt="buy the files on steam" />
                <p className="text-[14px] ml-[15px] leading-[16px] text-left text-[#c9c9c9]">Germany, 1956. The war is over, but justice is not served. Former Nazis walk free, while their victims lie in unmarked graves. As a prosecutor, you&apos;ll unearth long-buried evidence, confront witnesses and hunt down perpetrators. Will you have the courage to bring these &quot;ordinary men&quot; to court?</p>
              </div>
              <div>
                <div className="flex ">
                  <Image src="/win.png" width={20} height={20} className="w-auto h-auto" alt="win"></Image>
                  <Image src="/mac.png" width={20} height={20} className="w-auto h-auto" alt="mac"></Image>
                </div>
              </div>
              <div className="flex items-center absolute right-0 mr-[15px] mt-[-9px]">
                <p className=" bg-black text-[#c6d4df] text-[13px] py-[8px] px-[12px]">19,99€</p>
                <Link href="https://store.steampowered.com/app/2058730/The_Darkest_Files/?snr=1_5_1100__1100&utm_source=steamwidget" className="text-[#d2efa9] bg-gradient-to-r from-[#6fa720] to-[#588a1b] py-[7px] px-[11px] rounded-[2px] ml-0.5">Buy on Steam</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center  items-center bg-black w-full ">
        <div className="flex justify-between py-[50px]  items-center w-[80%]">
          <div>
            <Link href="">
              <Image src="/footer-img.svg" width={140} height={50} alt="footer" priority={true} />
            </Link>
            <p className="text-[14px] opacity-20">© 2024 Paintbucket Games</p>
          </div>
          <div className="flex justify-center flex-col  items-center gap-4">
            <div className="flex gap-3">
              <Link href="">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-facebook w-[20px]" data-v-1f10214e=""><path fill="currentColor" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" data-v-1f10214e=""></path></svg>
              </Link>
              <Link href="">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-[20px] svg-inline--fa fa-youtube" data-v-1f10214e=""><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" data-v-1f10214e=""></path></svg>
              </Link>
              <Link href="">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-[20px] svg-inline--fa fa-instagram" data-v-1f10214e=""><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" data-v-1f10214e=""></path></svg>
              </Link>
              <Link href="">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="mastodon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-[20px] svg-inline--fa fa-mastodon" data-v-1f10214e=""><path fill="currentColor" d="M433 179.11c0-97.2-63.71-125.7-63.71-125.7-62.52-28.7-228.56-28.4-290.48 0 0 0-63.72 28.5-63.72 125.7 0 115.7-6.6 259.4 105.63 289.1 40.51 10.7 75.32 13 103.33 11.4 50.81-2.8 79.32-18.1 79.32-18.1l-1.7-36.9s-36.31 11.4-77.12 10.1c-40.41-1.4-83-4.4-89.63-54a102.54 102.54 0 0 1-.9-13.9c85.63 20.9 158.65 9.1 178.75 6.7 56.12-6.7 105-41.3 111.23-72.9 9.8-49.8 9-121.5 9-121.5zm-75.12 125.2h-46.63v-114.2c0-49.7-64-51.6-64 6.9v62.5h-46.33V197c0-58.5-64-56.6-64-6.9v114.2H90.19c0-122.1-5.2-147.9 18.41-175 25.9-28.9 79.82-30.8 103.83 6.1l11.6 19.5 11.6-19.5c24.11-37.1 78.12-34.8 103.83-6.1 23.71 27.3 18.4 53 18.4 175z" data-v-1f10214e=""></path></svg>
              </Link>
              <Link href="">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="bluesky" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-[20px] svg-inline--fa fa-bluesky" data-v-1f10214e=""><path fill="currentColor" d="M123.6 34.5c66.4 50.1 137.9 151.5 164.2 206C314 186 385.5 84.5 452 34.5c48-36.1 125.6-64.1 125.6 24.9c0 17.8-10.1 149.2-16.1 170.5c-20.7 74.2-96.1 93.1-163.1 81.6c117.2 20 147 86.3 82.6 152.6C358.7 590 305.2 432.5 291.5 392.1c-2.5-7.5-3.7-10.9-3.7-7.9c0-3.1-1.2 .4-3.7 7.9C270.4 432.5 216.9 590 94.6 464.1C30.2 397.8 60 331.5 177.2 311.5C110.2 322.9 34.8 304 14.1 229.8C8.1 208.5-2 77.1-2 59.3c0-88.9 77.7-61 125.6-24.9z" data-v-1f10214e=""></path></svg>
              </Link>
              <Link href="">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="tiktok" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-[20px] svg-inline--fa fa-tiktok" data-v-1f10214e=""><path fill="currentColor" d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" data-v-1f10214e=""></path></svg>
              </Link>
            </div>
            <div>
              <Link href="" className="bg-[#272626] text-[14px] font-semibold rounded-full py-[6px] px-[20px]">LWGAL INFORMATION</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
