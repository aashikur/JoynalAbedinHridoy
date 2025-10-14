import Container from "./Container";
import { FaShareAlt } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";

export default function Navbar() {
    return (
        <Container>
            <nav className="py-4 flex w-full justify-between  items-center">
                <button className="cursor-pointer flex items-center gap-1  font-bold bg-white text-gray-600 rounded-full py-1 px-3">
                    <CiBellOn className="" />
                    <span className="text-xs">Subscribe</span>
                </button>
                <button className="cursor-pointer text-xs font-bold bg-white text-gray-600 rounded-full py-1 px-3">
                    <FaShareAlt />
                </button>
            </nav>
        </Container>
    )
}