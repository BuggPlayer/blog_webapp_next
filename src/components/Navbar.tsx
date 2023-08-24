import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex item-center justify-between p-6">

      <Link href="/">
        <div className="flex items-center cursor-pointer">
          <Image src="/favicon.ico" alt="no img" height={35} width={40} />
          <span className="font-bold ml-2 text-primary">Tech Blog</span>
        </div>
      </Link>


      <ul className="flex items-center">
        <li className="mr-6 font-medium text-gray-600">
          <a href="#">Products</a>
        </li>
        <li className="mr-6 font-medium text-gray-600">
          <a href="#">pricing</a>
        </li>
        <li className="mr-6 font-medium text-gray-600">
          <a href="#">Docs</a>
        </li>
        <li className="mr-6 font-medium text-gray-600">
          <a href="#">Company</a>
        </li>
      </ul>
      
      <ul className="flex items-center">
      <li className="mr-6 font-medium text-gray-600">
          <a href="#" className="hover:text-gray-400">
       notify
          </a>
        </li>
        <li className="mr-6 font-medium text-gray-600">
          <a href="#" className="hover:text-gray-400">
          profile
          </a>
        </li>
        <li className="font-medium text-gray-600">
          <a
            href="#"
            className="bg-primary py-2 px-4 rounded-sm text-white hover:bg-primary-dark transition-all"
          >
       Write
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
