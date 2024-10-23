import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function RootLayout() {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      once: true,
    });
  }, []);

  return (
    <div className="bg-[#FFF]">
      
      <Outlet />
    </div>
  );
}