
import BorderedButton from '../atoms/BorderedButton';
import ColoredButton from '../atoms/ColoredButton';

// eslint-disable-next-line react/prop-types
export default function ProfileSection({ title, subtitle, description, buttonText, imageSrc }) {
  return (
    <section className="section1 flex w-full opacity-0 h-[100vh]">
      <div className="mil-bg-title-boxed top-[36%] 3xl:right-[89%] right-[90%] w-full h-[150px]" />
      <div className='flex flex-col items-center justify-center flex-grow'>
        <div className='max-w-[700px] mx-20 mt-20'>
          <p className='uppercase font-semibold text-base mb-7'>{subtitle}</p>
          <h1 className='uppercase text-7xl font-extrabold text-shadow mr-4'>{title}</h1>
          <p className='ml-14 mt-12 text-zinc-600 font-normal text-lg'>
            {description}
          </p>
          <div className="mil-bg-title-boxed top-[36%] left-[38%] w-1/2 h-[150px]" />
          <div className='flex justify-start w-full mt-10 ml-14 gap-5'>
            <BorderedButton />
            <ColoredButton buttonText={buttonText} buttonType='link' />
          </div>
        </div>
      </div>
      <img src={imageSrc} alt="profile" className='h-screen' />
    </section>
  );
}
