import React from "react"
import sam from "../assets/sam.JPG"
const Hero = () => {
    return (
        <section className="overflow-hidden mb-[10px] flex flex-col-reverse lg:flex-row justify-center font-sora h-screen bg-[#D7D7D7]" id="home">
            <div className="lg:pl-[100px] lg:hero-right-shape lg:bg-[#D7D7D7] bg-gradient-to-t lg:from-transparent from-[#333] from-10% z-10 lg:w-1/2 h-full flex flex-col justify-center md:justify-center lg:items-start items-center font-[Raleway] relative">
                <h2 className="font-extrabold md:text-[45px] text-[35px] lg:mt-[200px] mt-[350px] text-white lg:text-black">Hi, I am</h2>
                <h1 className="font-extrabold md:text-[65px] text-[40px] text-white lg:text-black">Samuel Usikpedo</h1>
                <h3 className="font-black md:text-[30px] text-[20px] text-[#909090]">Frontend Web | Mobile App Developer </h3>
                <div className="font-bold text-[22px] flex space-x-7 mt-3">
                    <a href=""><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/facebook-new.png" alt="facebook-new" /></a>
                    <a href="https://www.instagram.com/kingsamito_"><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/instagram-new--v1.png" alt="instagram-new--v1" /></a>
                    <a href="https://twitter.com/kingsamito_"><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/twitterx.png" alt="twitterx" /></a>
                    <a href="https://github.com/kingsamito"><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/github--v1.png" alt="github--v1" /></a>
                    <a href="www.linkedin.com/in/samuel-usikpedo"><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/linkedin--v1.png" alt="linkedin--v1" /></a>
                </div>
                <a href="/Usikpedo, Samuel Ogagaoghene_CV.pdf" target="_blank"><button className="lg:bg-black bg-white text-black lg:text-[#D7D7D7] py-4 px-8 mt-5 font-bold rounded-[8px]">DOWNLOAD CV</button></a>
            </div>
            <div className="lg:w-1/2 translate-x-[-10px] md:translate-x-[-50px] border-b border-b-[#0000001e]">
                <img src={sam} className="top-[280px] md:top-[185px] absolute scale-[2.1] md:scale-[1.5] rotate-12" alt="samito" />
            </div>
        </section>
    )
}

export default Hero