import sam from "../assets/sam.jpeg"

const About = () => {
    return (
        <section id="about" className="mt-[550px] w-[90%] m-auto flex py-3 relative md:mt-0 lg:px-10 lg:gap-10">
            <div className="hidden md:block md:w-1/2 md:relative md:top-auto">
                <img src={sam} alt='sam' className="xl:h-screen" />
            </div>
            <div className="p-[20px] w-full md:w-1/2 md:relative md:text-left md:p-0">
                <h3 className="font-bold text-5xl mt-3">About Me</h3>
                <h3 className="font-bold text-8xl -mt-8 -ml-6 text-[rgba(0,0,0,0.19)]">About</h3>
                <p className="text-justify">I am a motivated, dedicated and diligent candidate that excels at
handling a variety of priorities while maintaining a positive outlook. I
have good interpersonal, technical skills and the ability to manage my
time and solve problems. I am enthusiastic to use my comprehensive
understanding of my talents and abilities to accomplish goals</p>
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
                        <td className="pb-3">Church street, Lagos, Nigeria</td>
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

                <p className="font-bold text-[20px] mt-5"><span className="text-[#FFBD39]">12</span> Project complete</p>
                <button className="bg-[#FFBD39] p-5 mt-5 font-bold rounded-full">DOWNLOAD CV</button>
            </div>

        </section>
    )
}

export default About