import { useState } from "react";
import projectsInfo from "../data/projectsInfo";
import { motion } from 'framer-motion';


const Projects = () => {
    const [hovered, setHovered] = useState(null); // Track which item is hovered

    const handleMouseEnter = (index) => {
        setHovered(index);
    };

    const handleMouseLeave = () => {
        setHovered(null);
    };

    const projectsInfoDetails = projectsInfo.map((item, key) => {
        const isHovered = hovered === key;

        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "linear" }}
                viewport={{ amount: 0.1 }}
                className="bg-white rounded-b-xl shadow-md hover:shadow-2xl"
                key={key}
                onMouseEnter={() => handleMouseEnter(key)}
                onMouseLeave={handleMouseLeave}>
                <div
                    className="relative group h-[150px] md:h-[250px] 2xl:h-[400px] overflow-hidden z-10 transition-all duration-500 "
                >
                    <img
                        alt="website"
                        src={require(`../assets/${item.img}`)}
                        className={`transition-all duration-[3s] ${isHovered && item.scroll ? (item.scrollPercent ? `translate-y-[-${item.scrollPercent}]` : "translate-y-[-70%]") : ""}`}
                    />
                </div>
                <div className="p-5 text-[#393939] flex flex-col gap-3 lg:h-[300px] 2xl:h-[237px]">
                    <h1 className="capitalize font-bold md:text-[24px] flex items-center justify-between">{item.name} <span className="text-[12px] animate-blink w-[10px] h-[10px] bg-green-600 rounded-full"></span></h1>
                    <p className="text-justify">{item.details}</p>
                    <div className="flex justify-between items-center mt-auto">
                        <a href={`https://${item.link}`} className={item.link && item.link !== "#" ? "" : " opacity-50"}>
                            <button
                                className={`bg-[black] text-white text-[12px] p-2 rounded-md font-extrabold uppercase transition-opacity duration-500 flex items-center gap-1 ${
                                    !item.link || item.link === "#" ? "cursor-not-allowed" : ""
                                  }`}
                                  disabled={!item.link || item.link === "#"}>
                                <img src={require("../assets/preview.png")} className="h-[25px]" alt="preview icon" />
                                Preview
                            </button>
                        </a>

                        {item.status && <p>Status:<span className="text-sm">{item.status}</span></p>}
                    </div>
                </div>
            </motion.div>
        );
    });

    return (
        <section
            id="projects" className="relative mx-[50px] mt-[40px] md:mt-0 font-sora">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "linear" }}
                viewport={{ amount: 0.1 }}
                className="text-center">
                <h3 className="font-bold md:text-5xl text-4xl">My Projects</h3>
            </motion.div>
            <div className="my-[20px] mt-[40px] md:w-3/4 mx-auto">
                <div className="grid lg:grid-cols-2 gap-5">
                    {projectsInfoDetails}
                </div>
            </div>
        </section>
    );
};

export default Projects;
