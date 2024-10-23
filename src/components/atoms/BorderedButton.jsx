import { toast } from "react-toastify"

export default function BorderedButton() {
  {/*<a href='https://www.facebook.com/profile.php?id=61566735068182' target="_blank" className="bg-white text-sm border-2 border-black font-bold px-10 py-5 uppercase shadow-box hover:shadow-hoverbox transition-all duration-500  ">
      My Business
    </a> */}
  const handleButton = () => {
    toast.warn('This link is not available yet.')
  }
  return (

    <button onClick={handleButton} className="bg-white text-sm border-2 border-black font-bold px-10 py-5 uppercase shadow-box hover:shadow-hoverbox transition-all duration-500  ">
      My Business
    </button>
  )
}
