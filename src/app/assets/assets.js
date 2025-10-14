import { FaFacebook, FaGithub, FaGithubAlt, FaInstagram, FaInstagramSquare, FaYoutube } from 'react-icons/fa';
import profile from './profile.png';
import { FaLinkedin } from 'react-icons/fa6';




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
            icon: <FaFacebook/>

        }, {
            platform: "LinkedIn",
            link: "https://www.linkedin.com/in/joynalabedinhridoy",
            text: "Connect with me",
            icon: <FaLinkedin/>

        }, {
            platform: "GitHub",
            link: "https//github.com/joynalabedinhridoy",
            text: "My code repository",
            icon: <FaGithubAlt/>

        }, 
        {
            platform: "Youtube",
            link: "https://www.youtube.com/@joynalabedinhridoy",
            text: "Nothing there",
            icon: <FaYoutube/>

        },
        {
            platform: "Instagram",
            link: "https://www.instagram.com/joynalabedinhridoy",
            text: "Cool stuff",
            icon: <FaInstagramSquare/>

        }
    ]




}