import Image from "next/image";
import { img } from "./assets/assets";

import Navbar from "./components/Navbar";
import LinkSection from "./components/LinkSection";
import Profile from "./components/Profile";


export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col   justify-center">
        <div className="text-center">
          {/* Profile Image */}
          <Profile/>

          {/* Link Sections */}
          <LinkSection />
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
