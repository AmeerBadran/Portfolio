import { useEffect, useRef, useState } from 'react';
import myImage from '../assets/images/myImage.jpg';
import myImage2 from '../assets/images/secImage.jpg';
import BorderedButton from '../components/atoms/BorderedButton';
import ColoredButton from '../components/atoms/ColoredButton';
import { FaBootstrap, FaJava, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiPostman } from 'react-icons/si';
import { TfiHtml5 } from 'react-icons/tfi';
import { TbBrandMysql } from 'react-icons/tb';
import { RiTailwindCssFill } from 'react-icons/ri';
import { GoPlus } from 'react-icons/go';
import CertificateModal from '../components/molecule/CertificateModal';
import ContactForm from '../components/organism/ContactForm';
import Navbar from '../components/organism/Navbar';



export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);


  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);
  const scrollContainerRef = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const [upOrDown, setUpOrDown] = useState(0);
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let isScrolling = false;

    const screenWidth = window.innerWidth;
    if (screenWidth < 820) {
      return;
    }

    const handleScroll = (event) => {
      event.preventDefault();
      setIsModalOpen(false)
      if (!isScrolling) {
        isScrolling = true;
        const scrollSpeed = 1.0;
        const currentSectionIndex = sectionRefs.current.findIndex(
          (section) => section.getBoundingClientRect().top >= 0
        );

        if (currentSectionIndex !== -1) {
          if (upOrDown !== event.deltaY) {
            if (upOrDown < event.deltaY) {
              setActiveSection(currentSectionIndex + 1);
            } else {
              setActiveSection(currentSectionIndex - 1);
            }
          } else {
            setActiveSection(currentSectionIndex);
          }
        }

        if (currentSectionIndex >= 0 && currentSectionIndex < sectionRefs.current.length) {
          const currentSection = sectionRefs.current[currentSectionIndex];

          currentSection.classList.add('2md:animate-fadeOutZoomIn');

          setTimeout(() => {
            currentSection.classList.remove('2md:animate-fadeOutZoomIn');
            scrollContainer.scrollBy({
              top: event.deltaY * scrollSpeed,
              behavior: 'smooth',
            });
            isScrolling = false;
          }, 200);
        }

      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener('wheel', handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('wheel', handleScroll);
      }
    };
  }, [upOrDown]);

  useEffect(() => {
    if (activeSection > 4) {
      setActiveSection(4)
    }
    if (activeSection < 0) {
      setActiveSection(0)
    }
  }, [activeSection]);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 820) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.intersectionRatio >= 0.5) {
              entry.target.classList.add('2md:animate-fadeInZoomOut');
              entry.target.classList.remove('2md:animate-fadeOutZoomIn');
            } else if (entry.intersectionRatio <= 0.1) {
              entry.target.classList.remove('2md:animate-fadeInZoomOut');
              entry.target.classList.add('2md:animate-fadeOutZoomIn');
            }
          });
        },
        {
          root: null,
          threshold: [0.1, 0.8],
        }
      );

      sectionRefs.current.forEach((section) => {
        if (section) observer.observe(section);
      });

      return () => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        sectionRefs.current.forEach((section) => {
          if (section) observer.unobserve(section);
        });
      };
    }
  }, []);

  const handleDownload = () => {
    console.log("Download function triggered");
    const pdfPath = `${import.meta.env.BASE_URL}Ameer Badran CV.pdf`;
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'Ameer Badran CV.pdf';
    link.click();
  };

  const handleScrollMove = (index) => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 820) {
      sectionRefs.current[index].scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(index);
  }

  return (
    <>
      
      <Navbar navBg={false} />
      <div className='fixed 2md:flex flex-col gap-5 z-50 right-12 top-[40%] hidden'>
        <div className='border-l border-r h-full border-[#bbbbbb] absolute right-[45%]'></div>
        <button onClick={() => handleScrollMove(0)} className={`w-5 h-5 rotate-45 border-[5px] ${activeSection === 0 ? 'border-[#F64E32]' : 'border-[#bbbbbb]'} hover:border-[#F64E32] transition-all duration-200 bg-[#FBFBFB]`}></button>
        <button onClick={() => handleScrollMove(1)} className={`w-5 h-5 rotate-45 border-[5px] ${activeSection === 1 ? 'border-[#F64E32]' : 'border-[#bbbbbb]'} hover:border-[#F64E32] transition-all duration-200 bg-[#FBFBFB]`}></button>
        <button onClick={() => handleScrollMove(2)} className={`w-5 h-5 rotate-45 border-[5px] ${activeSection === 2 ? 'border-[#F64E32]' : 'border-[#bbbbbb]'} hover:border-[#F64E32] transition-all duration-200 bg-[#FBFBFB]`}></button>
        <button onClick={() => handleScrollMove(3)} className={`w-5 h-5 rotate-45 border-[5px] ${activeSection === 3 ? 'border-[#F64E32]' : 'border-[#bbbbbb]'} hover:border-[#F64E32] transition-all duration-200 bg-[#FBFBFB]`}></button>
        <button onClick={() => handleScrollMove(4)} className={`w-5 h-5 rotate-45 border-[5px] ${activeSection === 4 ? 'border-[#F64E32]' : 'border-[#bbbbbb]'} hover:border-[#F64E32] transition-all duration-200 bg-[#FBFBFB]`}></button>
      </div>
      <div className='container1 w-full bg-[#FBFBFB] overflow-hidden' ref={scrollContainerRef}>
        <section className="section1 flex flex-col 2md:flex-row w-full 2md:opacity-0 2md:h-[100vh]" ref={(el) => { if (window.innerWidth >= 820) { sectionRefs.current[0] = el } }}>
          <div className="mil-bg-title-boxed top-[17%] 2md:top-[36%] 3xl:right-[89%] right-[90%] w-full h-[150px] 2md:block hidden" />
          <div className='flex flex-col items-center justify-center flex-grow  '>
            <div className='max-w-[700px] 2md:text-start text-center 2md:mx-5  xl:mx-20 2md:mt-20'>
              <p className='uppercase text-center slg:text-start font-semibold text-base mb-7'>Full Stack <span className='text-rose-600'>Web</span> Developer</p>
              <h1 className='uppercase text-7xl text-center slg:text-start font-extrabold text-shadow xl:mr-4'>Ameer Badran</h1>
              <p className='2md:ml-7 slg:ml-14 mt-12 text-zinc-600 font-normal text-lg'>
                From Palestine, Tulkarm. I have extensive experience in full stack web development, and I excel at building modern, efficient web applications. I&apos;d be happy to connect and explore how I can help bring your ideas to reality.
              </p>
              <div className="mil-bg-title-boxed top-[36%] left-[38%] w-1/2 h-[150px] 2md:block hidden" />
              <div className='flex flex-col xl:flex-row justify-start w-full mt-10 2md:ml-5 xl:ml-14 p-4 gap-5'>
                <BorderedButton />
                <ColoredButton buttonText='My Projects' linkTo='/myProjects' buttonType='link' />
              </div>
            </div>
          </div>
          <img src={myImage} alt="myImage" className='2md:h-screen xl:w-auto 2md:max-w-[450px] lg:max-w-max object-cover 2md:mt-0 mt-10' />
        </section>
        <section className="section1 flex w-full 2md:opacity-0 2md:h-[100vh]" ref={(el) => { if (window.innerWidth >= 820) { sectionRefs.current[1] = el } }}>
          <div className="mil-bg-title-boxed rounded-tr-[250px] rounded-bl-[250px] rounded-tl-[150px] rounded-br-[150px] top-[-10%]  right-[20%] w-[400px] h-[350px] 2md:block hidden" />
          <div className="mil-bg-title-boxed rounded-tr-[250px] rounded-bl-[250px] rounded-tl-[150px] rounded-br-[150px] top-[30%]  left-[-10%] w-[400px] h-[350px] 2md:block hidden" />
          <div className="mil-bg-title-boxed rounded-tr-[250px] rounded-bl-[250px] rounded-tl-[150px] rounded-br-[150px] bottom-[-15%]  right-[0%] w-[400px] h-[350px] 2md:block hidden" />
          <div className='flex flex-col 2md:flex-row 2md:gap-10 slg:gap-32 items-center max-w-[1300px] p-5'>
            <div className='relative 2md:block hidden'>
              <img src={myImage2} alt="myImage" className='h-[550px] min-w-[400px] object-cover' />
              <div className='absolute h-full w-full inset-0 left-3 top-3 border-2 border-black z-20'></div>
            </div>
            <div className='flex 2md:ml-0 ml-2 flex-col 2md:max-w-[550px]'>
              <p className=' uppercase font-semibold mb-8'><span className='text-rose-600'>Hello</span>, My Name is</p>
              <h1 className='uppercase text-6xl font-bold text-shadow mr-4'>Ameer Badran,</h1>
              <p className='text-zinc-600 font-normal text-lg mt-12 mb-8'>a 2024 graduate from Palestine Technical University – Kadoorie with a Bachelor&apos;s in Applied Computing. I have a strong understanding of IT and am always working to improve my skills, particularly in web development.
                <br></br> <br></br>Since 2023, I’ve focused on studying and working with the MERN stack, applying my knowledge to real-world projects, and aiming to make a meaningful impact in web development.</p>
              <div>
                <ColoredButton buttonText='Download CV' buttonType='button' downloadProp={handleDownload} />
              </div>
            </div>
          </div>
        </section>
        <section className="section1 flex w-full 2md:opacity-0 2md:h-[100vh]" ref={(el) => { if (window.innerWidth >= 820) { sectionRefs.current[2] = el } }}>
          <div className="mil-bg-title-boxed rounded-tr-[250px] rounded-bl-[250px] rounded-tl-[150px] rounded-br-[150px] top-[-10%]  right-[20%] w-[400px] h-[350px] 2md:block hidden" />
          <div className="mil-bg-title-boxed rounded-tl-[200px] rounded-br-[170px] rounded-tr-[80px] rounded-bl-[50px] top-[30%]  left-[5%] w-[250px] h-[250px] 2md:block hidden" />
          <div className="mil-bg-title-boxed rounded-tl-[110px] rounded-br-[90px] rounded-tr-[40px] rounded-bl-[20px] top-[58%]  left-[10%] w-[150px] h-[150px] 2md:block hidden" />
          <div className="mil-bg-title-boxed rounded-tr-[250px] rounded-bl-[250px] rounded-tl-[150px] rounded-br-[150px] bottom-[-15%]  right-[0%] w-[400px] h-[350px] 2md:block hidden" />
          <div className='max-w-[1200px] 2md:w-10/12 w-full mx-auto pr-4'>
            <div>
              <p className=' uppercase font-semibold mb-2'>main <span className='text-rose-600'>skills</span></p>
              <h1 className='uppercase text-4xl 2md:text-[64px] font-bold text-shadow mr-4 ml-1'>Ability or Skills</h1>
            </div>
            <div className='grid grid-cols-1 2md:grid-cols-2 2md:w-10/12 gap-10 2md:ml-28 mt-12'>
              <div className='flex gap-5 w-full items-center'>
                <div className=' relative bg-[#E4E4E4] pt-6 pl-6 pr-2 pb-2'>
                  <TfiHtml5 className='text-3xl' />
                  <div className='absolute h-full w-full inset-0 left-2 top-2 border-2 border-black z-20'></div>
                </div>
                <div className='relative w-full'>
                  <p className=' uppercase font-semibold '>HTML/CSS</p>
                  <div className=' relative border-b-2 border-r-2 h-2 w-[90%] border-red-400'>
                    <span className=' absolute right-[-20px] top-[-20px] text-sm font-semibold text-red-500'>90%</span>
                  </div>
                  <div className='absolute w-full left-2 bottom-[-24%] border-b-2 border-[#c5c5c5] z-20'></div>
                </div>
              </div>
              <div className='flex gap-5 w-full items-center justify-between'>
                <div className=' relative bg-[#E4E4E4] pt-6 pl-6 pr-2 pb-2'>
                  <SiJavascript className='text-3xl' />
                  <div className='absolute h-full w-full inset-0 left-2 top-2 border-2 border-black z-20'></div>
                </div>
                <div className='relative w-full'>
                  <p className=' uppercase font-semibold '>JavaScript</p>
                  <div className=' relative border-b-2 border-r-2 h-2 w-[80%] border-red-400'>
                    <span className=' absolute right-[-20px] top-[-20px] text-sm font-semibold text-red-500'>80%</span>
                  </div>
                  <div className='absolute w-full left-2 bottom-[-24%] border-b-2 border-[#c5c5c5] z-20'></div>
                </div>
              </div>
              <div className='flex gap-5 w-full items-center'>
                <div className=' relative bg-[#E4E4E4] pt-6 pl-6 pr-2 pb-2'>
                  <RiTailwindCssFill className='text-3xl' />
                  <div className='absolute h-full w-full inset-0 left-2 top-2 border-2 border-black z-20'></div>
                </div>
                <div className='relative w-full'>
                  <p className=' uppercase font-semibold '>Tailwind</p>
                  <div className=' relative border-b-2 border-r-2 h-2 w-[90%] border-red-400'>
                    <span className=' absolute right-[-20px] top-[-20px] text-sm font-semibold text-red-500'>90%</span>
                  </div>
                  <div className='absolute w-full left-2 bottom-[-24%] border-b-2 border-[#c5c5c5] z-20'></div>
                </div>
              </div>
              <div className='flex gap-5 w-full items-center'>
                <div className=' relative bg-[#E4E4E4] pt-6 pl-6 pr-2 pb-2'>
                  <FaBootstrap className='text-3xl' />
                  <div className='absolute h-full w-full inset-0 left-2 top-2 border-2 border-black z-20'></div>
                </div>
                <div className='relative w-full'>
                  <p className=' uppercase font-semibold '>BootStrap</p>
                  <div className=' relative border-b-2 border-r-2 h-2 w-[70%] border-red-400'>
                    <span className=' absolute right-[-20px] top-[-20px] text-sm font-semibold text-red-500'>70%</span>
                  </div>
                  <div className='absolute w-full left-2 bottom-[-24%] border-b-2 border-[#c5c5c5] z-20'></div>
                </div>
              </div>
              <div className='flex gap-5 w-full items-center'>
                <div className=' relative bg-[#E4E4E4] pt-6 pl-6 pr-2 pb-2'>
                  <FaReact className='text-3xl' />
                  <div className='absolute h-full w-full inset-0 left-2 top-2 border-2 border-black z-20'></div>
                </div>
                <div className='relative w-full'>
                  <p className=' uppercase font-semibold '>React js</p>
                  <div className=' relative border-b-2 border-r-2 h-2 w-[80%] border-red-400'>
                    <span className=' absolute right-[-20px] top-[-20px] text-sm font-semibold text-red-500'>80%</span>
                  </div>
                  <div className='absolute w-full left-2 bottom-[-24%] border-b-2 border-[#c5c5c5] z-20'></div>
                </div>
              </div>
              <div className='flex gap-5 w-full items-center'>
                <div className=' relative bg-[#E4E4E4] pt-6 pl-6 pr-2 pb-2'>
                  <FaNodeJs className='text-3xl' />
                  <div className='absolute h-full w-full inset-0 left-2 top-2 border-2 border-black z-20'></div>
                </div>
                <div className='relative w-full'>
                  <p className=' uppercase font-semibold '>
                    node js/Express js
                  </p>
                  <div className=' relative border-b-2 border-r-2 h-2 w-[70%] border-red-400'>
                    <span className=' absolute right-[-20px] top-[-20px] text-sm font-semibold text-red-500'>70%</span>
                  </div>
                  <div className='absolute w-full left-2 bottom-[-24%] border-b-2 border-[#c5c5c5] z-20'></div>
                </div>
              </div>
              <div className='flex gap-5 w-full items-center'>
                <div className=' relative bg-[#E4E4E4] pt-6 pl-6 pr-2 pb-2'>
                  <TbBrandMysql className='text-3xl' />
                  <div className='absolute h-full w-full inset-0 left-2 top-2 border-2 border-black z-20'></div>
                </div>
                <div className='relative w-full'>
                  <p className=' uppercase font-semibold '>SQL</p>
                  <div className=' relative border-b-2 border-r-2 h-2 w-[90%] border-red-400'>
                    <span className=' absolute right-[-20px] top-[-20px] text-sm font-semibold text-red-500'>90%</span>
                  </div>
                  <div className='absolute w-full left-2 bottom-[-24%] border-b-2 border-[#c5c5c5] z-20'></div>
                </div>
              </div>
              <div className='flex gap-5 w-full items-center'>
                <div className=' relative bg-[#E4E4E4] pt-6 pl-6 pr-2 pb-2'>
                  <SiMongodb className='text-3xl' />
                  <div className='absolute h-full w-full inset-0 left-2 top-2 border-2 border-black z-20'></div>
                </div>
                <div className='relative w-full'>
                  <p className=' uppercase font-semibold '>MongoDb</p>
                  <div className=' relative border-b-2 border-r-2 h-2 w-[75%] border-red-400'>
                    <span className=' absolute right-[-20px] top-[-20px] text-sm font-semibold text-red-500'>75%</span>
                  </div>
                  <div className='absolute w-full left-2 bottom-[-24%] border-b-2 border-[#c5c5c5] z-20'></div>
                </div>
              </div>
              <div className='flex gap-5 w-full items-center'>
                <div className=' relative bg-[#E4E4E4] pt-6 pl-6 pr-2 pb-2'>
                  <SiPostman className='text-3xl' />
                  <div className='absolute h-full w-full inset-0 left-2 top-2 border-2 border-black z-20'></div>
                </div>
                <div className='relative w-full'>
                  <p className=' uppercase font-semibold '>PostMan</p>
                  <div className=' relative border-b-2 border-r-2 h-2 w-[55%] border-red-400'>
                    <span className=' absolute right-[-20px] top-[-20px] text-sm font-semibold text-red-500'>55%</span>
                  </div>
                  <div className='absolute w-full left-2 bottom-[-24%] border-b-2 border-[#c5c5c5] z-20'></div>
                </div>
              </div>
              <div className='flex gap-5 w-full items-center'>
                <div className=' relative bg-[#E4E4E4] pt-6 pl-6 pr-2 pb-2'>
                  <FaJava className='text-3xl' />
                  <div className='absolute h-full w-full inset-0 left-2 top-2 border-2 border-black z-20'></div>
                </div>
                <div className='relative w-full'>
                  <p className=' uppercase font-semibold '>JAVA</p>
                  <div className=' relative border-b-2 border-r-2 h-2 w-[65%] border-red-400'>
                    <span className=' absolute right-[-20px] top-[-20px] text-sm font-semibold text-red-500'>65%</span>
                  </div>
                  <div className='absolute w-full left-2 bottom-[-24%] border-b-2 border-[#c5c5c5] z-20'></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section1 flex w-full 2md:opacity-0 2md:h-[100vh]" ref={(el) => { if (window.innerWidth >= 820) { sectionRefs.current[3] = el } }}>
          <div className="mil-bg-title-boxed rounded-tl-[80px] rounded-br-[50px] rounded-tr-[200px] rounded-bl-[170px] top-[62%] left-[33%] w-[250px] h-[250px] 2md:block hidden" />
          <div className="mil-bg-title-boxed rounded-tl-[40px] rounded-br-[30px] rounded-tr-[60px] rounded-bl-[70px] top-[75%]  left-[25%] w-[100px] h-[100px] 2md:block hidden" />
          <div className='flex flex-col 2md:flex-row 2md:gap-14 xl:gap-32 p-5'>
            <div className='flex flex-col 2md:text-end 2md:max-w-[550px] slg:w-1/3'>
              <p className=' uppercase font-semibold mb-8'>Certificates</p>
              <h1 className='uppercase text-5xl font-bold text-shadow'>Education<br></br> <span className='text-red-600 text-3xl'>and</span> <br></br>Training</h1>
              <p className='text-zinc-600 font-normal text-xl mt-12 mb-8'>Extensive education in developing web pages using: HTML, CSS, Tailwind, JavaScript, React JS, Node.js, Express js, Bootstrap.</p>
            </div>
            <div className='flex flex-col gap-12'>
              <div className='flex 2md:gap-20 gap-10'>
                <button onClick={() => openModal('ptuk')} className=' relative bg-[#E4E4E4] pt-6 pl-6 pr-2 pb-2 h-min'>
                  <GoPlus className='text-3xl' />
                  <div className='absolute h-full w-full inset-0 left-2 top-2 border-2 border-black z-20'></div>
                  <div className="mil-bg-title-boxed2 top-[-55%]  left-[45%] w-[60px] h-[65px] " />
                </button>
                <div className='max-w-[500px]'>
                  <h1 className='font-semibold text-lg my-2 uppercase'>BACHELOR&apos;S DEGREE IN APPLIED COMPUTING</h1>
                  <p className='font-semibold text-sm mb-5'>2020 <span className='text-red-500'>TO</span> 2024</p>
                  <p>
                    Developed core skills in software development, systems analysis, and IT, preparing for a dynamic tech career.
                  </p>
                </div>
              </div>
              <div className='flex 2md:gap-20 gap-10'>
                <button onClick={() => openModal('palSoft')} className=' relative bg-[#E4E4E4] pt-6 pl-6 pr-2 pb-2 h-min'>
                  <GoPlus className='text-3xl' />
                  <div className='absolute h-full w-full inset-0 left-2 top-2 border-2 border-black z-20'></div>
                  <div className="mil-bg-title-boxed2 top-[-55%]  left-[45%] w-[60px] h-[65px] " />
                </button>
                <div className='max-w-[500px]'>
                  <h1 className='font-semibold text-lg my-3 uppercase'>FRONTEND REACTJS TRAINING</h1>
                  <p className='font-semibold text-sm mb-7 uppercase'>2024 <span className='text-red-500'>150</span> hours</p>
                  <p>
                    Developed skills in building dynamic user interfaces, state management, and responsive design using ReactJS.
                  </p>
                </div>
              </div>
              <div className='flex 2md:gap-20 gap-10'>
                <button onClick={() => openModal('QA')} className=' relative bg-[#E4E4E4] pt-6 pl-6 pr-2 pb-2 h-min'>
                  <GoPlus className='text-3xl' />
                  <div className='absolute h-full w-full inset-0 left-2 top-2 border-2 border-black z-20'></div>
                  <div className="mil-bg-title-boxed2 top-[-55%]  left-[45%] w-[60px] h-[65px] " />
                </button>
                <div className='max-w-[500px]'>
                  <h1 className='font-semibold text-lg my-3'>ISTQB CTFL SOFTWARE TESTING COURSE</h1>
                  <p className='font-semibold text-sm mb-7 uppercase'>2024 <span className='text-red-500'>50</span> hours</p>
                  <p>
                    Participated in a 50-hour course focused on the fundamentals of software testing, covering test design, execution, and quality assurance practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <CertificateModal
            isOpen={isModalOpen}
            closeModal={closeModal}
            imageSrc={selectedImage}
          />
        </section>
        <section className="section1 flex w-full 2md:opacity-0 2md:h-[100vh] 2md:pb-0 pb-20" ref={(el) => { if (window.innerWidth >= 820) { sectionRefs.current[4] = el } }}>
          <div className="mil-bg-title-boxed rounded-tr-[250px] rounded-bl-[250px] rounded-tl-[150px] rounded-br-[150px] top-[-10%]  right-[20%] w-[400px] h-[350px] 2md:block hidden" />
          <div className="mil-bg-title-boxed rounded-tl-[200px] rounded-br-[170px] rounded-tr-[80px] rounded-bl-[50px] top-[30%]  left-[3%] w-[250px] h-[250px] xl:block hidden" />
          <div className="mil-bg-title-boxed rounded-tl-[110px] rounded-br-[90px] rounded-tr-[40px] rounded-bl-[20px] top-[58%]  left-[5%] w-[150px] h-[150px] xl:block hidden" />
          <div className="mil-bg-title-boxed rounded-tr-[250px] rounded-bl-[250px] rounded-tl-[150px] rounded-br-[150px] bottom-[-15%]  right-[30%] w-[400px] h-[350px] 2md:block hidden" />
          <div className=' 2md:w-10/12 lg:w-8/12 mx-auto'>
            <div>
              <p className=' uppercase font-semibold mb-2'>Contact  <span className='text-rose-600'>me</span></p>
              <h1 className='uppercase text-4xl 2md:text-6xl font-bold text-shadow mr-4 ml-1'>Let&apos;s get you an estimate</h1>
            </div>
            <div className='flex 2md:flex-row flex-col w-full slg:gap-20 gap-6'>
              <div className='flex flex-col md:flex-row 2md:flex-col gap-10 2md:w-[30%] min-w-64 mt-14'>
                <div className='border-2 relative border-black border-css before:border-2 md:w-full pl-10 py-8'>
                  <h1 className=' uppercase font-semibold'>Email</h1>
                  <p className='text-lg mt-10 text-gray-800 font-normal'>abadran281@gmail.com</p>
                  <div className="mil-bg-title-boxed2 top-[10%]  right-[3%] w-[60px] h-[65px] " />
                </div>
                <div className='border-2 relative border-black border-css before:border-2 md:w-full pl-10 py-8'>
                  <h1 className=' uppercase font-semibold'>Phone</h1>
                  <p className='text-lg mt-10 text-gray-800 font-normal'>+970 597 319 421</p>
                  <div className="mil-bg-title-boxed2 top-[10%]  right-[3%] w-[60px] h-[65px] " />
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
