import projectsInfo from "../data/projectsInfo"

const Projects = () => {

    const projectsInfoDetails = projectsInfo.map((item,key) => {
        return(
            <div className="relative group mt-[10px]" key={key}>
                <img src={require(`../assets/${item.img}`)}/>
                <div className="absolute top-0 group-hover:bg-[#ffbd39cc] w-full h-full flex flex-col justify-center items-center">
                   <h1 className="text-2xl font-bold opacity-0 group-hover:opacity-100">{item.name}</h1>
                   <button className="font-bold uppercase opacity-0 group-hover:opacity-100">Click Me{}</button>
                </div>
            </div>
        )
    })
    return (
        <section id="projects" className="relative mx-[50px]">
            <div className="text-center">
                <h3 className="font-bold text-5xl mt-3">My Projects</h3>
                <h3 className="font-bold text-8xl -mt-[50px] -ml-6 text-[rgba(0,0,0,0.19)]">Projects</h3>
            </div>
            <div className="my-[20px]">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {projectsInfoDetails}
                </div>
            </div>

        </section >
    )
}

export default Projects