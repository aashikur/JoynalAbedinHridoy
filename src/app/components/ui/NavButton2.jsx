import Link from 'next/link';
import React from 'react';
import { IoMdArrowDown } from 'react-icons/io';

const NavButton2 = ({to = '/explore'}) => {
    return (
          <Link href={to}>
            <button className="border border-gray-500 rounded-full p-2 mt-2 cursor-pointer group hover:text-gray-700 hover:bg-gray-200 transition">
            <IoMdArrowDown className="text-[1.5rem] transform rotate-90 transition-transform duration-300 group-hover:-translate-x-1" />
            </button>
          </Link>
    );
};

export default NavButton2;

