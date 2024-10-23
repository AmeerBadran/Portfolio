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
      <div className="min-h-screen w-full bg-[#FBFBFB] pt-52 pb-32">
        <div className="max-w-[850px] mx-auto flex flex-col gap-6 mb-20">
          <p className=" uppercase font-semibold">Featured <span className="text-red-500">projects</span></p>
          <h1 className='uppercase text-6xl font-extrabold text-shadow mr-4'>All Projects</h1>
          <p className='ml-20 text-zinc-600 font-normal text-lg max-w-[500px]'>
            A Collection of my favorites project I’ve designed recently.
            Feeling great while sharing here.
          </p>
        </div>
        <div className="border-t-2 border-black max-w-[1000px] ml-auto mr-[18px] relative">
          <div className="border-t-2 border-[#CFCFCF] top-1.5 left-1.5 max-w-[1000px] ml-auto mr-5 absolute w-full"></div>
        </div>
        <div className="grid grid-cols-3 max-w-[1300px] mx-auto mt-20 gap-x-20">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              altText={project.altText}
              title={project.title}
              href={project.href}
              iconType={project.iconType}
              height={project.height}
              marginTop={project.marginTop}
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
