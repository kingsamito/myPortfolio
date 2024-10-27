import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import "../styles.css"

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
};

const Navbar = () => {
  const [display, setDisplay] = useState(false)
  const [navbarBg, setNavbarBg] = useState(false);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    
      if (window.scrollY < 100 && display === true) {
        setNavbarBg(true);
      } else if (window.scrollY < 100 && display === false) {
        setNavbarBg(false);
      }
      else {

    }
  }, [display]);

  const offset = windowWidth > 425 ? -80 : -50;


  const displaystyle1 = display ? "absolute w-full bg-[#D7D7D7] left-[0] top-[71px] opacity-100 transition-all ease-in-out duration-1000" : "transition-all ease-in-out w-full duration-1000 absolute lg:w-1/2 left-[0] top-[-351px] opacity-0 lg:block md:opacity-100"
  const displaystyle2 = "text-center font-bold lg:static"
  return (
    <nav className={`z-50 fixed top-0 w-full 2xl:px-[100px] lg:px-[50px]  ${navbarBg ? "bg-[#D7D7D7]" : "bg-transparent"}`}>
      <div className="flex items-center lg:justify-normal justify-between p-3 font-[Montserrat]">
        <div className="flex items-center lg:w-1/2">
          <img width="48" height="48" src="https://img.icons8.com/emoji/48/crown-emoji.png" alt="crown-emoji" />
          <h1 className="text-3xl font-bold">Samito</h1>
        </div>
        <div className={`${displaystyle1} ${displaystyle2}`}>
          <div className={`flex flex-col justify-between lg:flex-row text-[17px] font-bold ${!navbarBg && "lg:text-[white]"}`}>
            <Link to="home" activeClass={`${navbarBg && " bg-[white] rounded-[30px] text-black"}`} spy={true} smooth={true} offset={offset} duration={500} className="p-3 hover:bg-[rgba(0,0,0,0.19)] rounded-[30px]" onClick={() => setDisplay(false)}>Home</Link>
            <Link to="about" activeClass='bg-[white] rounded-[30px] text-black' spy={true} smooth={true} offset={offset} duration={500} className="p-3 hover:bg-[rgba(0,0,0,0.19)] rounded-[30px]" onClick={() => setDisplay(false)}>About</Link>
            <Link to="resume" activeClass='bg-[rgba(0,0,0,0.19)] rounded-[30px] text-black' spy={true} smooth={true} offset={offset} duration={500} className="p-3 hover:bg-[rgba(0,0,0,0.19)] rounded-[30px]" onClick={() => setDisplay(false)}>Resume</Link>
            {/*<Link to="services" spy={true} smooth={true} offset={offset} duration={500} className="p-3 hover:bg-[rgba(0,0,0,0.19)] rounded-[30px]">Services</Link>*/}
            <Link to="skills" activeClass='bg-[white] rounded-[30px] text-black' spy={true} smooth={true} offset={offset} duration={500} className="p-3 hover:bg-[rgba(0,0,0,0.19)] rounded-[30px]" onClick={() => setDisplay(false)}>Skills</Link>
            <Link to="projects" activeClass='bg-[rgba(0,0,0,0.19)] rounded-[30px] text-black' spy={true} smooth={true} offset={offset} duration={500} className="p-3 hover:bg-[rgba(0,0,0,0.19)] rounded-[30px]" onClick={() => setDisplay(false)}>Projects</Link>
            <Link to="contact" activeClass='bg-[white] rounded-[30px] text-black' spy={true} smooth={true} offset={offset} duration={500} className="p-3 hover:bg-[rgba(0,0,0,0.19)] rounded-[30px] bg-[white] text-[black]" onClick={() => setDisplay(false)}>Contact Me</Link>
          </div>
        </div>
        <div className="lg:hidden" onClick={() => setDisplay(!display)}>
          {!display ? <img className='transtion-all ease-in-out duration-1000' width="40" height="40" src="https://img.icons8.com/ios-filled/50/menu--v2.png" alt="menu--v2" /> : <img className='transtion-all ease-in-out duration-1000' width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/delete-sign.png" alt="delete-sign" />}

        </div>
      </div>
    </nav>
  )
}

export default Navbar


