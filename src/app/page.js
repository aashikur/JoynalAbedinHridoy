import Image from "next/image";
import { img } from "./assets/assets";
import { FaInstagram, FaLocationDot, FaMailchimp, FaWhatsapp, FaYoutube } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <>
        <Navbar />
      <div className="flex-grow flex  justify-center">
        <div className="text-center">
          <Image
            src={img.profile}
            alt="Profile Picture"
            width={100}
            height={100}
            className="rounded-full mx-auto"
          />
          <h1 className="text-3xl font-bold mt-4">Joynal Abedin Hridoy</h1>
          <p className="text-gray-400 mt-2 text-sm" >Video Editor | Sound Design | Motion Graphic</p>
          <p className="text-gray-400 mt-2 text-sm flex justify-center items-center gap-2" >
            <FaLocationDot />
            Dhaka, Bangladesh </p>
          <p className="text-gray-400 mt-2 cursor-pointer text-xl flex justify-center items-center gap-4 text-white" >
            <MdOutlineMailOutline />
            <FaInstagram />
            <FaYoutube />
            <FaWhatsapp />
          </p>
          <p className="text-gray-500 mt-4 max-w-md mx-auto hidden">
            A video is a story that speaks without words, <br></br>Connect with unrevealed emotions.
          </p>
        </div>
      </div>
      <footer className="text-center py-4 border-t border-gray-700">
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
