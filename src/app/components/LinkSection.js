
import { FaInstagram } from "react-icons/fa";
import { img, user } from "../assets/assets";
import Container from "./Container";

export default function LinkSection({ href, title, description }) {

    console.log(user)
    return (
        <Container className="mt-10  w-full">


            {
                user.social.map((social, index) => (
                    <div className="w-full mb-4 border text-gray-600 cursor-pointer p-3 text-lg  bg-[#FFFFFE] rounded-2xl flex gap-4">
                        <div className="text-[3rem] bold text-gray-800">
                           { social.icon }
                        </div>
                        <div className="text-center flex-1">
                            <h2 className="text-lg text-gray-800">{social.platform}</h2>
                            <p className="text-sm text-gray-400">{social.text}</p>
                        </div>
                    </div>
                ))
            }

        </Container>
    );
}