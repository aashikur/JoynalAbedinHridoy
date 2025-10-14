import { FaInstagram } from "react-icons/fa";
import { img } from "../assets/assets";
import Container from "./Container";

export default function LinkSection({ href, title, description }) {
    return (
        <Container className="mt-10  w-full">


            <div className="w-full border text-gray-600 cursor-pointer p-3 text-lg  bg-[#FFFFFE] rounded-2xl flex gap-4">
                <div className="text-[3rem] bold text-gray-800">
                    <FaInstagram />
                </div>
                <div className="text-center flex-1">
                    <h2 className="text-lg text-gray-800">Instragram</h2>
                    <p className="text-sm text-gray-400">Follow me on Instagram</p>
                </div>
            </div>
        </Container>
    );
}