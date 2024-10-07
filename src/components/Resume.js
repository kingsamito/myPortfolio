import resumeInfo, { cert } from "../data/resumeInfo"
import location from "../assets/location.svg"
import { motion } from 'framer-motion';


const Resume = () => {
    const resumeInfoDetails = resumeInfo.map(info => {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "linear" }}
                viewport={{ amount: 0.1 }}
                className=" py-7 px-5 mt-2 hover:shadow-xl shadow-md transition-all flex flex-col gap-1">
                <h2 className="font-bold md:text-2xl text-xl text-[black] flex justify-between items-start">{info.role} <span className="flex items-center text-[12px] text-[#332b1c93]"><img width="15" height="15" src={location} alt="phone--v1" className="animate-blink" />{info.location}</span></h2>
                <p className="font-bold md:text-xl text-lg text-[rgba(0,0,0,0.59)]" >{info.company}</p>
                <h3 className="font-medium text-[15px] italic text-[#332b1c93]">{info.year}</h3>
                <p className="text-l text-[rgba(0,0,0,0.59)] text-justify">{info.details}</p>
            </motion.div>
        )
    })
    const certDetail = cert.map(info => {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "linear" }}
                viewport={{ amount: 0.1 }}
                className=" py-7 px-5 mt-2 hover:shadow-xl shadow-md transition-all flex flex-col gap-1">
                <h2 className="font-bold md:text-xl text-[black] flex justify-between items-start">{info.role} <span className="flex items-center text-[12px] text-[#332b1c93]"><img width="15" height="15" src={location} alt="phone--v1" className="animate-blink" />{info.location}</span></h2>
                <p className="font-bold md:text-xl text-lg text-[rgba(0,0,0,0.59)]" >{info.company}</p>
                <h3 className="font-medium text-[15px] italic text-[#332b1c93]">{info.year}</h3>
                <p className="text-l text-[rgba(0,0,0,0.59)] text-justify">{info.details}</p>
            </motion.div>
        )
    })
    return (
        <section 
            id="resume" className="relative w-3/4 m-auto pt-[40px] md:py-10">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "linear" }}
                viewport={{ amount: 0.1 }}
                className="text-center">
                <h3 className="font-bold md:text-5xl text-4xl">Resume</h3>
            </motion.div>
            <div className="my-[20px] md:grid lg:grid-cols-2 md:gap-4">
                {resumeInfoDetails}
            </div>
            <div className="text-center">
                <h3 className="font-bold md:text-3xl text-2xl">Certifications & Education</h3>
            </div>
            <div className="my-[20px] md:grid lg:grid-cols-2 md:gap-4">
                {certDetail}
            </div>
        </section>
    )
}

export default Resume