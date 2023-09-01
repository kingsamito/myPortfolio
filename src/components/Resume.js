import resumeInfo from "../data/resumeInfo"

const Resume = () => {
    const resumeInfoDetails = resumeInfo.map(info => {
        return (
            <div className="bg-[rgba(0,0,0,0.19)] py-7 px-5 mt-2">
                <h3 className="font-bold text-2xl text-[#332b1c93]">{info.year}</h3>
                <h2 className="font-bold text-3xl text-[black]">{info.role}</h2>
                <p className="font-bold text-2xl text-[rgba(0,0,0,0.59)]" >{info.company}</p>
                <p className="text-l text-[rgba(0,0,0,0.59)] text-justify">{info.details}</p>
            </div>
        )
    })
    return (
        <section id="resume" className="relative mx-[50px]">
            <div className="text-center">
                <h3 className="font-bold text-5xl mt-3">Resume</h3>
                <h3 className="font-bold text-8xl -mt-[50px] -ml-6 text-[rgba(0,0,0,0.19)]">Resume</h3>

            </div>
            <div className="my-[20px] md:grid md:grid-cols-2 md:gap-4">
                {resumeInfoDetails}
            </div>

        </section>
    )
}

export default Resume