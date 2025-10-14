
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
import Navigation from "../components/Navigation";














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
                <Navigation />


                {/* Gallery Sections */}
                <ProjectGallery />
            </div>

            <div className="mt-10 text-center">
                <p className="text-gray-600 text-sm">Back to Home Page</p>
                <Link href={'/'}>
                    <button className="border border-gray-500 rounded-md p-2 mt-2 cursor-pointer group hover:text-gray-700 hover:bg-gray-200 transition">
                        <IoMdArrowDown className="text-[1.5rem] transform rotate-90 transition-transform duration-300 group-hover:-translate-x-1" />
                    </button>
                </Link>



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
