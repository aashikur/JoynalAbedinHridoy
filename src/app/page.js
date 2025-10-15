import Image from "next/image";
import { img } from "./assets/assets";
import { IoMdArrowDown } from "react-icons/io";

import Navbar from "./components/Navbar";
import LinkSection from "./components/LinkSection";
import Profile from "./components/Profile";
import { FaArrowAltCircleDown } from "react-icons/fa";
import Navigation from "./components/Navigation";
import Link from "next/link";
import NavButton from "@/app/components/ui/NavButton";


export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col   justify-center">
        <div className="text-center">
          {/* Profile Image */}
          <Profile />

          <Navigation />

          {/* Link Sections */}
          <LinkSection />
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600 text-sm">Explore other side of Hridoy</p>
          
          {/* NavButton  */}
          <NavButton to={'/explore'}/>


        </div>

      </div>


      <footer className="text-center py-4 border-t border-gray-700 mt-10">
        <p className="text-sm text-gray-400">&copy; 2025 Joynal Abedin Hridoy. All rights reserved.</p>
      </footer>

    </>
  );
}


const metadata = {
  title: 'Joynal Abedin Hridoy | Video Editor | Sound Design | Motion Graphic',
  description: 'Video is a story that Mound a unmount word into visual wiout saying a word.',
}

export { metadata }
