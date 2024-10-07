import React, { useState, useEffect } from "react";
import sam from "../assets/IMG_1693-removebg.png"
import sam1 from "../assets/IMG_3844-removebg.png"

const Slide = () => {
    const slides = [
        {
            h2: <h2 className="font-bold text-[2rem] lg:text-5xl">I'm <span className='text-[#FFBD39] mt-3'>Samuel Usikpedo</span></h2>,
            h3:<>A <span className='text-[#FFBD39] mt-3'>web developer</span></> ,
            url: sam
        },
        {
            h2: <h2 className="font-bold text-[2rem] lg:text-5xl"><span className='text-[#FFBD39] mt-3'>I'm a web developer</span> based in Nigeria</h2>,
            h3: "",
            url: sam1
        }
    ];

    const [count, setCount] = useState(0);
    useEffect(() => {
        if (count >= slides.length - 1) {
            setTimeout(() => {
                setCount(0)
            }, 5000)

        } else {
            setTimeout(() => {
                setCount(count + 1)
            }, 5000)

        }

    }, [count])
    // Function to increment count by 1

    return (
        <>
            <div className="w-[90%] ml-auto mr-auto flex items-center  pb-3 relative lg:px-10 lg:gap-10 h-screen">
                <div className="text-center absolute z-10 w-full top-[400px] md:w-1/2 md:relative md:top-auto md:text-left">
                    <p className="font-bold text-3xl">Hello!</p>
                    {slides[count].h2}
                    <h3 className="font-bold text-3xl mt-3">{slides[count].h3}</h3>
                    <div className="flex gap-6 font-bold mt-3 justify-center md:justify-start">
                        <button className="bg-[#FFBD39] p-5 rounded-full">HIRE ME</button>
                        <button className="bg-[black] text-[white] p-5 rounded-full">MY WORKS</button>
                    </div>
                </div>
                <div className="absolute top-0 md:w-1/2 md:relative md:top-auto">
                    <img src={slides[count].url} alt='sam' className="h-[400px] relative z-3 xl:h-screen" />
                    <div className="bg-white rounded-[50%] absolute top-[130px] w-[100%] h-[100%]"></div>
                </div>
            </div>
        </>
    )
}

export default Slide;