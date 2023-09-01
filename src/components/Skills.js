import skillsInfo from "../data/skillsInfo"

const Skills = () => {

    return (
        <section id="skills" className="relative mx-[50px] py-[30px]">
            <div className="text-center">
                <h3 className="font-bold text-5xl mt-3">My Skills</h3>
                <h3 className="font-bold text-8xl -mt-[50px] -ml-6 text-[rgba(0,0,0,0.19)]">Skills</h3>
            </div>
            <div className="my-[20px]">
                <div className="grid grid-cols-2 gap-5">
                    {Object.keys(skillsInfo).map((key, index) => (
                        <div key={index} className="mt-[15px]">
                            <p>{key}</p>
                            <p>{skillsInfo[key]}</p>
                            <div className="bg-[rgba(0,0,0,0.19)] h-5 rounded-r-lg">
                                <div className="h-5 bg-[#FFBD39] rounded-r-lg" style={{width:skillsInfo[key]}}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section >
    )
}

export default Skills