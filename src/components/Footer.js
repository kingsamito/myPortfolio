import arrow from "../assets/arrow.png"
import { Link } from 'react-scroll'
const Footer = () => {
    return (
        <footer className="relative bg-[#D7D7D7] p-[50px] font-sora">
            <div className="my-[20px]">
                <div className="grid lg:grid-cols-3 gap-5">
                    <div className="flex flex-col bg-[rgba(0,0,0,0.19)] p-5 shadow-xl">
                        <h1 className="font-bold text-[22px]">About</h1>
                        <p className="font-bold text-md text-justify">Dedicated IT professional with a strong foundation in technology and problem-solving. Experienced in developing and implementing innovative solutions that enhance efficiency and user experience.Adept at collaborating with diverse teams to achieve project goals and deliver high-quality results. Passionate about continuous learning and staying current with industry trends to drive technological advancements. </p>
                    </div>
                    <div className="flex flex-col bg-[rgba(0,0,0,0.19)] p-5 shadow-xl">
                        <h1 className="font-bold text-[22px]">Links</h1>
                        <Link to="home" spy={true} smooth={true} offset={-80} duration={500} className="font-bold text-md flex cursor-pointer items-center gap-5 hover:translate-x-2 transition-all duration-2s"><img className="w-7" src={arrow} alt="arrow" />Home</Link>
                        <Link to="about" className="font-bold text-md flex items-center gap-5 cursor-pointer hover:translate-x-2 transition-all duration-2s"><img className="w-7" src={arrow} alt="arrow" />About</Link>
                        <Link to="resume" className="font-bold text-md flex items-center gap-5 cursor-pointer hover:translate-x-2 transition-all duration-2s"><img className="w-7" src={arrow} alt="arrow" />Resume</Link>
                        <Link to="skills" className="font-bold text-md flex items-center gap-5 cursor-pointer hover:translate-x-2 transition-all duration-2s"><img className="w-7" src={arrow} alt="arrow" />Skills</Link>
                        <Link to="projects" className="font-bold text-md flex items-center gap-5 cursor-pointer hover:translate-x-2 transition-all duration-2s"><img className="w-7" src={arrow} alt="arrow" />Projects</Link>
                        <Link to="contact" className="font-bold text-md flex items-center gap-5 cursor-pointer hover:translate-x-2 transition-all duration-2s"><img className="w-7" src={arrow} alt="arrow" />Contact</Link>
                    </div>
                    <div className="flex flex-col bg-[rgba(0,0,0,0.19)] p-5 shadow-xl gap-3">
                        <h1 className="font-bold text-[22px]">Have a question</h1>
                        <div className="flex items-center gap-3">
                            <div className=" bg-[rgba(0,0,0,0.19)] rounded-[50%] p-2">
                                <img width="30" height="30" src="https://img.icons8.com/ios/50/000000/address--v1.png" alt="address--v1" />
                            </div>
                            <div>
                                <h1 className="font-bold text-md">ADDRESS</h1>
                                <p className="font-bold text-sm">Lagos, Nigeria</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className=" bg-[rgba(0,0,0,0.19)] rounded-[50%] p-2">
                                <img width="30" height="30" src="https://img.icons8.com/ios/50/phone--v1.png" alt="phone--v1" />
                            </div>
                            <div>
                                <h1 className="font-bold text-md">CONTACT NUMBER</h1>
                                <p className="font-bold text-sm"><a href="tel:+2348148842010">
                                    +234 814-884-2010
                                </a></p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className=" bg-[rgba(0,0,0,0.19)] rounded-[50%] p-2">
                                <img width="30" height="30" src="https://img.icons8.com/ios/50/new-post--v1.png" alt="new-post--v1" />
                            </div>
                            <div>
                                <h1 className="font-bold text-md">EMAIL ADDRESS</h1>
                                <p className="font-bold text-sm"><a href="malito:+2348148842010">
                                    usikpedosamuel@gmail.com
                                </a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="font-bold text-[22px] flex space-x-7 justify-center">
                <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/facebook-new.png" alt="facebook-new" />
                <a href="https://www.instagram.com/kingsamito_"><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/instagram-new--v1.png" alt="instagram-new--v1" /></a>
                <a href="https://twitter.com/kingsamito_"><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/twitterx.png" alt="twitterx" /></a>
                <a href="https://github.com/kingsamito"><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/github--v1.png" alt="github--v1" /></a>
                <a href="www.linkedin.com/in/samuel-usikpedo"><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/linkedin--v1.png" alt="linkedin--v1" /></a>
            </div>
            <p className="justify-center mt-[30px] font-semibold flex md:flex-row flex-col items-center gap-1"><span>Copyright ©{new Date().getFullYear()} All rights reserved | </span><span className="flex justify-center"><img width="18" height="18" src="https://img.icons8.com/emoji/48/crown-emoji.png" alt="crown-emoji" /> King Samito</span></p>
        </footer >
    )
}

export default Footer