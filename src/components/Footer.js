import arrow from "../assets/arrow.png"
const Footer = () => {
    return (
        <footer className="relative bg-[#FFBD39] p-[50px]">
            <div className="my-[20px]">
                <div className="grid md:grid-cols-3 gap-5">
                    <div className="flex flex-col bg-[rgba(0,0,0,0.19)] p-5 shadow-xl">
                        <h1 className="font-bold text-[22px]">About</h1>
                        <p className="font-bold text-md text-justify">I am a motivated, dedicated and diligent candidate that excels at
                            handling a variety of priorities while maintaining a positive outlook. I
                            have good interpersonal, technical skills and the ability to manage my
                            time and solve problems. I am enthusiastic to use my comprehensive
                            understanding of my talents and abilities to accomplish goals</p>
                    </div>
                    <div className="flex flex-col bg-[rgba(0,0,0,0.19)] p-5 shadow-xl">
                        <h1 className="font-bold text-[22px]">Links</h1>
                        <p className="font-bold text-md flex items-center gap-5"><img className="w-7" src={arrow} alt="arrow" />Home</p>
                        <p className="font-bold text-md flex items-center gap-5"><img className="w-7" src={arrow} alt="arrow" />About</p>
                        <p className="font-bold text-md flex items-center gap-5"><img className="w-7" src={arrow} alt="arrow" />Resume</p>
                        <p className="font-bold text-md flex items-center gap-5"><img className="w-7" src={arrow} alt="arrow" />Services</p>
                        <p className="font-bold text-md flex items-center gap-5"><img className="w-7" src={arrow} alt="arrow" />Skills</p>
                        <p className="font-bold text-md flex items-center gap-5"><img className="w-7" src={arrow} alt="arrow" />Projects</p>
                        <p className="font-bold text-md flex items-center gap-5"><img className="w-7" src={arrow} alt="arrow" />Contact</p>
                    </div>
                    <div className="flex flex-col bg-[rgba(0,0,0,0.19)] p-5 shadow-xl gap-3">
                        <h1 className="font-bold text-[22px]">Have a question</h1>
                        <div className="flex items-center gap-3">
                            <div className=" bg-[rgba(0,0,0,0.19)] rounded-[50%] p-2">
                                <img width="30" height="30" src="https://img.icons8.com/ios/50/000000/address--v1.png" alt="address--v1" />
                            </div>
                            <div>
                                <h1 className="font-bold text-md">ADDRESS</h1>
                                <p className="font-bold text-sm">Church Street, Lagos, Nigeria</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className=" bg-[rgba(0,0,0,0.19)] rounded-[50%] p-2">
                                <img width="30" height="30" src="https://img.icons8.com/ios/50/phone--v1.png" alt="phone--v1" />
                            </div>
                            <div>
                                <h1 className="font-bold text-md">CONTACT NUMBER</h1>
                                <p className="font-bold text-sm">08148842010</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className=" bg-[rgba(0,0,0,0.19)] rounded-[50%] p-2">
                                <img width="30" height="30" src="https://img.icons8.com/ios/50/new-post--v1.png" alt="new-post--v1" />
                            </div>
                            <div>
                                <h1 className="font-bold text-md">EMAIL ADDRESS</h1>
                                <p className="font-bold text-sm">usikpedosamuel@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="font-bold text-[22px] flex space-x-7 justify-center">
                <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/facebook-new.png" alt="facebook-new" />
                <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/instagram-new--v1.png" alt="instagram-new--v1" />
                <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/twitterx.png" alt="twitterx" />
                <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/github--v1.png" alt="github--v1" />
                <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/linkedin--v1.png" alt="linkedin--v1" />
            </div>
        </footer >
    )
}

export default Footer