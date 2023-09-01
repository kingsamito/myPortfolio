
const Contact = () => {
    return (
        <section id="contact" className="relative mx-[50px]">
            <div className="text-center">
                <h3 className="font-bold text-5xl mt-3">My Contact</h3>
                <h3 className="font-bold text-8xl -mt-[50px] -ml-6 text-[rgba(0,0,0,0.19)]">Contact</h3>
            </div>
            <div className="my-[20px]">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div className="flex flex-row md:flex-col md:justify-center items-center md:text-center gap-2 md:gap-0 ">
                        <div className=" bg-[rgba(0,0,0,0.19)] rounded-[50%] p-5">
                            <img width="50" height="50" src="https://img.icons8.com/ios/50/000000/address--v1.png" alt="address--v1" />
                        </div>
                        <div><h1 className="font-bold text-[22px]">ADDRESS</h1>
                            <p className="font-bold text-md">Church Street, Lagos, Nigeria</p>
                        </div>
                    </div>
                    <div className="flex flex-row md:flex-col md:justify-center items-center md:text-center gap-2 md:gap-0 ">
                        <div className=" bg-[rgba(0,0,0,0.19)] rounded-[50%] p-5">
                            <img width="50" height="50" src="https://img.icons8.com/ios/50/phone--v1.png" alt="phone--v1" />                        </div>
                        <div>
                            <h1 className="font-bold text-[22px]">CONTACT NUMBER</h1>
                            <p className="font-bold text-md">08148842010</p>
                        </div>
                    </div>
                    <div className="flex flex-row md:flex-col md:justify-center items-center md:text-center gap-2 md:gap-0 ">
                        <div className=" bg-[rgba(0,0,0,0.19)] rounded-[50%] p-5">
                            <img width="50" height="50" src="https://img.icons8.com/ios/50/new-post--v1.png" alt="new-post--v1" />                        </div>
                        <div>
                            <h1 className="font-bold text-[22px]">EMAIL ADDRESS</h1>
                            <p className="font-bold text-md">usikpedosamuel@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex flex-row md:flex-col md:justify-center items-center md:text-center gap-2 md:gap-0">
                        <div className=" bg-[rgba(0,0,0,0.19)] rounded-[50%] p-5">
                            <img width="50" height="50" src="https://img.icons8.com/ios/50/link--v1.png" alt="link--v1" />                        </div>
                        <div>
                        <h1 className="font-bold text-[22px]">SOCIAL MEDIA</h1>
                            <div className="font-bold text-[22px] flex space-x-7">
                                <a href=""><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/facebook-new.png" alt="facebook-new" /></a>
                                <a href=""><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/instagram-new--v1.png" alt="instagram-new--v1" /></a>
                                <a href=""><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/twitterx.png" alt="twitterx" /></a>
                                <a href=""><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/github--v1.png" alt="github--v1" /></a>
                                <a href=""><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/linkedin--v1.png" alt="linkedin--v1"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section >
    )
}

export default Contact