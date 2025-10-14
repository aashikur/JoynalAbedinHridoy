
import Image from "next/image";
import { IoMdArrowDown } from "react-icons/io";

import { FaArrowAltCircleDown } from "react-icons/fa";
import { img } from "../assets/assets";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import LinkSection from "../components/LinkSection";
import Gallery from "../components/Gallery";
import Link from "next/link";
import ProjectGallery from "../components/ProjectGallery";














export default function ExplorePage() {

  const phone = "01511762807"; // your number
  const message = encodeURIComponent(
    "Hey, I viewed your profile and wanted to discuss a topic with you (formally)."
  );




  return <>
    <Navbar />
    <div className="flex flex-col   justify-center">
      <div className="text-center">
        {/* Profile Image */}
        <Profile />

        {/* Link Sections */}
        <div className="mt-6 flex justify-center gap-4">
          <Link href={'/'} className="border hover:opacity-75 text-sm border-gray-600 rounded-lg p-1 px-4">
            Home
          </Link>
          <Link href={'/explore'} className="border hover:opacity-75 text-sm border-gray-600 rounded-lg p-1 px-4">
            Gallery
          </Link>
          <Link href={'/projects'} className="border hover:opacity-75 text-sm border-gray-600 rounded-lg p-1 px-4">
            Projects
          </Link>
          <Link
            href={`https://wa.me/88${phone}?text=${message}`}
            target="_blank"
            className="border hover:opacity-80 text-sm border-gray-600 rounded-lg p-1 px-4 flex items-center gap-2 text-green-400 hover:text-green-300 transition"
          >
           Quick Connect WhatsApp 
          </Link>

        </div>

        {/* Gallery Sections */}
        <ProjectGallery />
      </div>

      <div className="mt-10 text-center">
        <p className="text-gray-600 text-sm">Back to Home Page</p>
        <button className="border border-gray-500 rounded-md p-2 mt-2 cursor-pointer group hover:text-gray-700 hover:bg-gray-200 transition">
          <IoMdArrowDown className="text-[1.5rem] transform rotate-90 transition-transform duration-300 group-hover:-translate-x-1" />
        </button>



      </div>

    </div>


    <footer className="text-center py-4 border-t border-gray-700 mt-10">
      <p className="text-sm text-gray-400">&copy; 2025 Joynal Abedin Hridoy. All rights reserved.</p>
    </footer>

  </>;
}





const metadata = {
  title: 'Joynal Abedin Hridoy | Video Editor | Sound Design | Motion Graphic',
  description: 'Video is a story that Mound a unmount word into visual wiout saying a word.',
}

export { metadata }
