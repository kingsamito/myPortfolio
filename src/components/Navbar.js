import { useState } from 'react'
import { Link } from 'react-scroll'
import "../styles.css"

const Navbar = () => {
    const [display, setDisplay] = useState(false)
    const displaystyle1 = display ? "absolute w-full left-[0] top-[71px] opacity-100 transition-all ease-in-out duration-1000" : "transition-all ease-in-out duration-1000 absolute w-full left-[0] top-[-351px] opacity-0 md:block md:opacity-100"
    const displaystyle2 = "text-center bg-[#FFBD39] font-bold md:static md:w-auto"
    return (
        <nav className="bg-[#FFBD39] z-50 fixed top-0 w-full">
            <div className="flex items-center justify-between p-3 bg-[#FFBD39]">
                <div className="flex items-center">
                    <img width="48" height="48" src="https://img.icons8.com/emoji/48/crown-emoji.png" alt="crown-emoji" />
                    <h1 className="text-3xl font-bold">Samito</h1>
                </div>
                <div className={`${displaystyle1} ${displaystyle2}`}>
                    <div className="flex flex-col md:flex-row ">
                        <Link to="home" spy={true} smooth={true} offset={-80} duration={500} className="p-3 hover:underline decoration-2">Home</Link>
                        <Link to="about" spy={true} smooth={true} offset={-80} duration={500} className="p-3 hover:underline decoration-2">About</Link>
                        <Link to="resume" spy={true} smooth={true} offset={-80} duration={500} className="p-3 hover:underline decoration-2">Resume</Link>
                        {/*<Link to="services" spy={true} smooth={true} offset={-80} duration={500} className="p-3 hover:underline decoration-2">Services</Link>*/}
                        <Link to="skills" spy={true} smooth={true} offset={-80} duration={500} className="p-3 hover:underline decoration-2">Skills</Link>
                        <Link to="projects" spy={true} smooth={true} offset={-80} duration={500} className="p-3 hover:underline decoration-2">Projects</Link>
                        <Link to="contact" spy={true} smooth={true} offset={-80} duration={500} className="p-3 hover:underline decoration-2">Contact</Link>
                    </div>
                </div>
                <div className="md:hidden" onClick={() => setDisplay(!display)}>
                    {!display ? <img className='transtion-all ease-in-out duration-1000' width="40" height="40" src="https://img.icons8.com/ios-filled/50/menu--v2.png" alt="menu--v2" /> : <img className='transtion-all ease-in-out duration-1000' width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/delete-sign.png" alt="delete-sign" />}

                </div>
            </div>
        </nav>
    )
}

export default Navbar


