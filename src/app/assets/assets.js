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
