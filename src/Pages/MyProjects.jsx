import Navbar from "../components/organism/Navbar";
import { projects } from "../constants/projects";
import ProjectCard from "../components/organism/ProjectCard";
import Pagination from "../components/molecule/pagination";

export default function MyProjects() {
  const handlePageChange = (page) => {
    console.log(`Current page is ${page}`);
  };
  return (
    <>
      <Navbar navBg={true} />
      <div className="min-h-screen w-full bg-[#FBFBFB] 2md:pt-52 pt-36 pb-32">

        <div className="max-w-[850px] mx-auto text-center xl:text-start flex flex-col gap-6 mb-20 justify-center p-5 relative">
          <p className=" uppercase font-semibold">Featured <span className="text-red-500">projects</span></p>
          <h1 className='uppercase xmobile:text-6xl text-4xl font-extrabold text-shadow mr-4'>All Projects</h1>
          <p className='xl:ml-20 text-zinc-600 font-normal text-lg xl:max-w-[500px]'>
            A Collection of my favorites project I’ve designed recently.
            <br></br>Feeling great while sharing here.
          </p>
        </div>
        <div className="border-t-2 border-black w-9/12 ml-auto mr-[18px] relative">
          <div className="border-t-2 border-[#CFCFCF] top-1.5 left-1.5 max-w-[1000px] ml-auto mr-5 absolute w-full"></div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-x-32 justify-center mx-auto mt-20 2md:max-w-[1380px] 2md:p-20">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              altText={project.altText}
              title={project.title}
              href={project.href}
              iconType={project.iconType}
              marginTop={project.marginTop}
              index={index}
            />
          ))}
        </div>

        <div className="border-t-2 flex justify-center border-black max-w-[1300px] mx-auto relative my-20">
          <div className="border-t-2 border-[#CFCFCF] top-1.5 max-w-[1300px] left-3 absolute w-full"></div>
        </div>
        <Pagination totalPages={1} onPageChange={handlePageChange} />
      </div>
    </>
  )
}
