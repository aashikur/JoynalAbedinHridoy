import Image from "next/image";
import { img } from "./assets/assets";
import { IoMdArrowDown } from "react-icons/io";

import Navbar from "./components/Navbar";
import LinkSection from "./components/LinkSection";
import Profile from "./components/Profile";
import { FaArrowAltCircleDown } from "react-icons/fa";


export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col   justify-center">
        <div className="text-center">
          {/* Profile Image */}
          <Profile />

          {/* Link Sections */}
          <LinkSection />
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600 text-sm">Explore other side of Hridoy</p>
          <button className="border border-gray-500 rounded-md p-2 mt-2 cursor-pointer group hover:text-gray-700 hover:bg-gray-200 transition">
            <IoMdArrowDown className="text-[1.5rem] transform -rotate-135 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </button>



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
