/* eslint-disable react/prop-types */
import { FaLink, FaYoutube } from "react-icons/fa";

const ProjectCard = ({ image, altText, title, href, iconType, height, hoverWidth, hoverHeight, marginTop }) => {
  const Icon = iconType === "youtube" ? FaYoutube : FaLink;

  return (
    <div className={`${marginTop}`}>
      <div className={`relative group w-[400px] ${height}`}>
        <div className={`transform origin-center absolute w-full h-full ${hoverWidth} ${hoverHeight} border-2 border-black top-4 left-4 group-hover:scale-90 group-hover:top-2 group-hover:left-2 transition-all duration-700 z-10`}></div>
        <img
          src={image}
          alt={altText}
          className="transform origin-center group-hover:scale-90 transition-all w-full h-full object-cover object-left duration-500 border border-gray-300"
        />
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="flex hover:text-red-600 justify-center shadow-box hover:shadow-hoverbox items-end absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 origin-center w-[60px] h-[60px] border-2 border-black opacity-0 group-hover:opacity-85 top-1/2 left-1/2 scale-90 group-hover:scale-100 transition-all duration-300 z-10 bg-[#FBFBFB]"
        >
          <Icon className="group-hover:text-xl group-hover:h-full transition-all duration-500" />
        </a>
      </div>
      <p className="mt-12 text-2xl font-bold text-center uppercase">{title}</p>
    </div>
  );
};

export default ProjectCard;
