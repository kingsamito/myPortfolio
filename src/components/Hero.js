import React from "react"
import sam from "../assets/sam.png"
const Hero = () => {
    return (
        <section className=" mb-[10px] flex flex-col-reverse lg:flex-row justify-center items-center h-screen bg-[#D7D7D7]" id="home">
            <div className="lg:pl-[100px] bg-[#D7D7D7] lg:w-1/2 h-full flex flex-col justify-center md:items-start items-center font-[Raleway] relative">
                <h2 className="font-bold md:text-[40px] text-[35px]">Hi, I am</h2>
                <h1 className="font-bold md:text-[60px] text-[40px]">Samuel Usikpedo</h1>
                <h3 className="font-extrabold md:text-[25px] text-[20px] text-[#909090]">Frontend Web | Mobile App Developer </h3>
                <div className="hero-abs-shape bg-[#000000c2] absolute bottom-0 right-[-0.5px] h-full w-[120px] hidden lg:block"></div>
                <div className="font-bold text-[22px] flex space-x-7 mt-3">
                    <a href=""><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/facebook-new.png" alt="facebook-new" /></a>
                    <a href="https://www.instagram.com/kingsamito_"><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/instagram-new--v1.png" alt="instagram-new--v1" /></a>
                    <a href="https://twitter.com/kingsamito_"><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/twitterx.png" alt="twitterx" /></a>
                    <a href="https://github.com/kingsamito"><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/github--v1.png" alt="github--v1" /></a>
                    <a href="www.linkedin.com/in/samuel-usikpedo"><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/linkedin--v1.png" alt="linkedin--v1" /></a>
                </div>
            </div>
            <div className="lg:w-1/2 md:w-[60%] flex justify-center  lg:bg-[#000000c2] h-full  border-b border-b-[#0000001e]">
                <img src={sam} className=" mt-[40px] md:mt-[100px]" alt="samito"/>
            </div>
        </section>
    )
}

export default Hero