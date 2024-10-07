import { motion } from 'framer-motion';

const Skills = () => {

    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "linear" }}
            viewport={{ amount: 0.1 }}
            id="skills" className="relative md:my-[100px] py-[30px] w-3/4 mx-auto flex flex-col gap-10">
            <div className="text-center">
                <h3 className="font-bold md:text-5xl text-4xl">Skills</h3>
            </div>
            <div className="grid lg:grid-cols-8 md:grid-cols-4 grid-cols-2 gap-5">
                <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5 Badge" />
                <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS Badge" />
                <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript Badge" />
                <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript Badge" />
                <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Badge" />
                <img src="https://img.shields.io/badge/React_Native-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React Native Badge" />
                <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js Badge" />
                <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux Badge" />
                <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS Badge" />
                <img src="https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white" alt="GraphQL Badge" />
                <img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP Badge" />
                <img src="https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="SQL Badge" />
            </div>
            {/* <div className="my-[20px]">
                <div className="grid grid-cols-2 gap-5">
                    {Object.keys(skillsInfo).map((key, index) => (
                        <div key={index} className="mt-[15px]">
                            <p>{key}</p>
                            <p>{skillsInfo[key]}</p>
                            <div className="bg-[rgba(0,0,0,0.19)] h-5 rounded-r-lg">
                                <div className="h-5 bg-[rgba(33,34,42,50%)] rounded-r-lg" style={{ width: skillsInfo[key] }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}

        </motion.section >
    )
}

export default Skills