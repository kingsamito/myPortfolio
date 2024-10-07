import sam1 from "../assets/sam1.png"
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "linear" }}
            viewport={{ amount: 0.1 }} // Triggers every time the section is in view
            id="about" className=" w-[90%] m-auto flex flex-col lg:flex-row py-10 relative md:mt-0 lg:px-10 lg:justify-between lg:pt-[100px]">
            <div className="md:w-[400px] lg:w-[500px] lg:mx-0 md:mx-auto">
                <img src={sam1} alt='sam' className="" />
            </div>
            <div className="p-[20px] w-full lg:w-1/2 md:relative md:text-left md:p-0 md:px-[40px] font-nunito">
                <h3 className="font-bold text-[48px] font-playfair leading-[130%] lg:text-left md:text-center">About Me</h3>
                <p className="text-justify font-[24px] leading-[150%]">Dedicated IT professional with a strong foundation in technology and problem-solving. Experienced in developing and implementing innovative solutions that enhance efficiency and user experience.Adept at collaborating with diverse teams to achieve project goals and deliver high-quality results. Passionate about continuous learning and staying current with industry trends to drive technological advancements.</p>
                <table className="w-full md:w-[70%] mt-[20px]">
                    <tr>
                        <td className="font-bold text-[17px] pb-3">Name: </td>
                        <td className="pb-3">Usikpedo Samuel</td>
                    </tr>
                    <tr>
                        <td className="font-bold text-[17px] pb-3">Date of birth: </td>
                        <td className="pb-3">June 23</td>
                    </tr>
                    <tr>
                        <td className="font-bold text-[17px] pb-3">Address: </td>
                        <td className="pb-3">Lagos, Nigeria</td>
                    </tr>
                    <tr>
                        <td className="font-bold text-[17px] pb-3">Email: </td>
                        <td className="pb-3">usikpedosamuel@gmail.com</td>
                    </tr>
                    <tr>
                        <td className="font-bold text-[17px] pb-3">Phone: </td>
                        <td className="pb-3">+234 814-884-2010</td>
                    </tr>
                </table>

                {/*                 <p className="font-bold text-[20px] mt-5"><span className="text-[#FFBD39] font-extrabold">12</span> Project complete</p>
 */}                <a href="/Usikpedo, Samuel Ogagaoghene_CV.pdf" target="_blank"><button className="bg-[#D7D7D7] py-4 px-8 mt-5 font-bold rounded-[8px]">DOWNLOAD CV</button></a>
            </div>

        </motion.section>
    )
}

export default About