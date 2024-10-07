import call from "../assets/phone-call.svg"
import mail from "../assets/email.svg"
import location from "../assets/location.svg"
import smallCircle from "../assets/smallbottomcircle.svg"
import largeCircle from "../assets/largebottomcircle.svg"
import letterSend from "../assets/letter_send.png"
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "linear" }}
            viewport={{ amount: 0.1 }}
            id="contact" className="relative mx-[50px] lg:py-[100px] py-[50px]">
            <div className="items-center flex flex-col gap-4 mb-5">
                <h3 className="font-bold md:text-5xl text-4xl">Contact</h3>
                <p className="font-medium lg:text-2xl md:text-xl md:text-left text-center">Any question or remarks? Just write us a message!</p>
            </div>
            <div className="flex flex-col lg:flex-row md:w-[75%] 2xl:w-[60%] lg:h-[550px] m-auto bg-[white] md:p-5 rounded-[20px]">
                <div className="bg-[#D7D7D7] relative text-black flex flex-col gap-4 lg:justify-between  md:px-[40px] px-[20px] py-[20px] lg:w-[40%] md:rounded-[20px] rounded-t-[20px]">
                    <div>
                        <h2 className="font-semibold text-[28px]">Contact Information</h2>
                        <p>Say something to start a live chat!</p>
                    </div>
                    <div className="flex flex-col lg:gap-10 gap-5">
                        <div className="flex gap-2 items-center">
                            <img width="25" height="25" src={call} alt="phone--v1" />
                            <a href="tel:+2348148842010">
                                +234 814-884-2010
                            </a>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img width="25" height="25" src={mail} alt="phone--v1" />
                            <a href="malito:+2348148842010">
                                usikpedosamuel@gmail.com
                            </a>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img width="25" height="25" src={location} alt="phone--v1" />
                            <p> Lagos, Nigeria </p>
                        </div>
                    </div>
                    <div className="font-bold text-[22px] flex space-x-7">
                        <a href="/"><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/facebook-new.png" alt="facebook-new" /></a>
                        <a href="https://www.instagram.com/kingsamito_"><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/instagram-new--v1.png" alt="instagram-new--v1" /></a>
                        <a href="https://twitter.com/kingsamito_"><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/twitterx.png" alt="twitterx" /></a>
                        <a href="https://github.com/kingsamito"><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/github--v1.png" alt="github--v1" /></a>
                        <a href="www.linkedin.com/in/samuel-usikpedo"><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/linkedin--v1.png" alt="linkedin--v1" /></a>
                    </div>
                    <div className="absolute bottom-0 right-0">
                        <img src={smallCircle} alt="circle" className="absolute bottom-[50px] right-[100px]" />
                        <img src={largeCircle} alt="circle" />
                    </div>
                </div>
                <div className="lg:w-[65%] relative">
                    <form action="https://formsubmit.co/usikpedosamuel@gmail.com" method="POST" className="grid md:grid-cols-2 w-full gap-7 md:p-[40px] px-[20px] py-[40px]">
                        <div className="flex flex-col">
                            <label htmlFor="firstname">First Name</label>
                            <input id="firstname" type="text" name="firstname" required className="border-b-2 outline-none" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="lastname">Last Name</label>
                            <input id="lastname" type="text" name="lastname" required className="border-b-2 outline-none" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" name="email" required className="border-b-2 outline-none" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="phonenumber">Phone Number</label>
                            <input id="phonenumber" type="text" name="phonenumber" required className="border-b-2 outline-none" />
                        </div>
                        <div className="flex flex-col col-span-full">
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                                Subject of Inquiry
                            </label>
                            <select
                                id="subject"
                                name="subject"
                                className="mt-1 block w-full py-2 px-3 border-b-2 bg-white rounded-md hover:shadow-sm outline-none sm:text-sm"
                            >
                                <option value="">Select a subject...</option>
                                <option value="general">General Inquiry</option>
                                <option value="proposal">Project Proposal</option>
                                <option value="job">Job Opportunity</option>
                                <option value="collaboration">Collaboration Request</option>
                                <option value="support">Technical Support</option>
                                <option value="freelance">Freelance Work</option>
                                <option value="speaking">Speaking Engagement</option>
                                <option value="feedback">Feedback</option>
                                <option value="consultation">Consultation</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="flex flex-col col-span-full">
                            <label htmlFor="message">Message</label>
                            <input id="message" type="text" name="message" placeholder="Write your message" required className="border-b-2 outline-none" />
                        </div>
                        <button type="submit" className="bg-[#D7D7D7] p-4 md:col-start-2 z-50">Send Message</button>
                        <img src={letterSend} alt="circle" className="absolute bottom-[-220px] right-[1%] md:block hidden" />
                    </form>
                </div>
            </div>


        </motion.section >
    )
}

export default Contact