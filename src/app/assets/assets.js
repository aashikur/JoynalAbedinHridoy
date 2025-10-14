import { FaFacebook, FaGithub, FaGithubAlt, FaInstagram, FaInstagramSquare, FaPinterest, FaSpotify, FaYoutube } from 'react-icons/fa';
import profile from './profile.png';
import { FaLinkedin } from 'react-icons/fa6';

import { IoLogoFacebook } from "react-icons/io";
import img02 from './img02.jpg';
import img03 from './img03.jpg';
import img04 from './img04.jpg';
import img05 from './img05.jpg';
import img06 from './img06.jpg';
import img07 from './img07.jpg';
import img08 from './img08.jpg';
import img09 from './img09.jpg';
import img10 from './img10.jpg';
import img11 from './img11.jpg';
import img12 from './img12.jpg';

// thamnail 
import thamb1 from './t1.jpg';
import thamb2 from './t2.jpg';
import thamb3 from './t3.jpg';
import thamb4 from './t4.jpg';
import thamb5 from './t5.jpg';
import thamb6 from './t6.jpg';
import thamb7 from './t7.jpg';
import thamb8 from './t8.jpg';
import thamb9 from './t9.jpg';



export const img = {
    profile,
}

export const user = {
    name: "Joynal Abedin Hridoy",
    email: "joynalabedin@gmail.com",
    address: "Dhaka, Bangladesh",
    phone: "+880 1704-123456",
    social: [
        {
            platform: "Facebook",
            link: "https://www.facebook.com/joynalabedinhridoy",
            text: "My social link",
            icon: <IoLogoFacebook />


        }, {
            platform: "LinkedIn",
            link: "https://www.linkedin.com/in/joynalabedinhridoy",
            text: "Connect with me",
            icon: <FaLinkedin />

        }, {
            platform: "GitHub",
            link: "https//github.com/joynalabedinhridoy",
            text: "My code repository",
            icon: <FaGithub />


        },
        {
            platform: "Youtube",
            link: "https://www.youtube.com/@joynalabedinhridoy",
            text: "Nothing there",
            icon: <FaYoutube />

        },
        {
            platform: "Instagram",
            link: "https://www.instagram.com/joynalabedinhridoy",
            text: "Cool stuff",
            icon: <FaInstagramSquare />

        },
        {
            platform: "Pinterest",
            link: "https://www.instagram.com/joynalabedinhridoy",
            text: "Yes i love cool stuff",
            icon: <FaPinterest />

        },

        {
            platform: "Spotify",
            link: "https://www.instagram.com/joynalabedinhridoy",
            text: "Playlist that keeps me going",
            icon: <FaSpotify />

        }
    ]




}


export const gallery = [
  { id: 1, title: "Nature's Beauty", src: img02 },
  { id: 2, title: "City Lights", src: img03 },
  { id: 3, title: "Mountain Escape", src: img04 },
  { id: 4, title: "Ocean Breeze", src: img05 },
  { id: 5, title: "Golden Sunset", src: img06 },
  { id: 6, title: "Forest Trail", src: img07 },
  { id: 7, title: "Urban Jungle", src: img08 },
  { id: 8, title: "Starry Night", src: img09 },
  { id: 9, title: "Desert Mirage", src: img10 },
  { id: 10, title: "Blooming Garden", src: img11 },
  { id: 11, title: "Hidden Waterfall", src: img12 },
];



export const projects = [
  {
    id: 1,
    title: "Cinematic Travel Edit",
    description: "A motion-driven travel video showcasing storytelling transitions.",
    thumbnail: thamb1,
    youtube: "https://youtu.be/_xa2iSByc5Q?si=twvGU4wHp83-Ax2r",
  },
  {
    id: 2,
    title: "Brand Ad - Tech Commercial",
    description: "High-energy commercial edit with synced sound design.",
    thumbnail: thamb2,
    youtube: "https://youtu.be/_xa2iSByc5Q?si=twvGU4wHp83-Ax2r",
  },
  {
    id: 3,
    title: "Short Film - The Last Light",
    description: "Emotive color grading and ambient audio storytelling.",
    thumbnail: thamb3,
    youtube: "https://youtu.be/_xa2iSByc5Q?si=twvGU4wHp83-Ax2r",
  },
  {
    id: 4,
    title: "Music Visualizer Concept",
    description: "Beat-synced visuals blending motion graphics and sound design.",
    thumbnail: thamb4,
    youtube: "https://youtu.be/_xa2iSByc5Q?si=twvGU4wHp83-Ax2r",
  },
  {
    id: 5,
    title: "Corporate Brand Reel",
    description: "Clean storytelling edit crafted for brand identity showcase.",
    thumbnail: thamb5,
    youtube: "https://youtu.be/_xa2iSByc5Q?si=twvGU4wHp83-Ax2r",
  },
  {
    id: 6,
    title: "Product Ad – Lifestyle Shoot",
    description: "Smooth slow-motion transitions and high-end grading.",
    thumbnail: thamb6,
    youtube: "https://youtu.be/_xa2iSByc5Q?si=twvGU4wHp83-Ax2r",
  },
  {
    id: 7,
    title: "Fashion Promo Edit",
    description: "Energetic pacing with color-rich motion graphics and typography.",
    thumbnail: thamb7,
    youtube: "https://youtu.be/_xa2iSByc5Q?si=twvGU4wHp83-Ax2r",
  },
  {
    id: 8,
    title: "Short Documentary Cut",
    description: "Narrative-based edit combining interviews and cinematic B-roll.",
    thumbnail: thamb8,
    youtube: "https://youtu.be/_xa2iSByc5Q?si=twvGU4wHp83-Ax2r",
  },
  {
    id: 9,
    title: "Creative Motion Design Piece",
    description: "Abstract animation blending 2D and 3D motion elements.",
    thumbnail: thamb9,
    youtube: "https://youtu.be/_xa2iSByc5Q?si=twvGU4wHp83-Ax2r",
  },
];
