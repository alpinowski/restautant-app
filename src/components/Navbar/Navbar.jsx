import React from "react";
import { FaCaretDown, FaUser } from "react-icons/fa";

const NavLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "About",
    link: "/#",
  },
  {
    id: 3,
    name: "Contact",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Vegetables",
    link: "/#",
  },
  {
    id: 2,
    name: "Fruits",
    link: "/#",
  },
  {
    id: 3,
    name: "Grains",
    link: "/#",
  },
];

const Navbar = ({HandlePopup}) => {
  return (
    <div data-aos = "fade" className="bg-white shadow-md">
      <div className="container flex justify-between py-4 sm:py-3">
        <div className="font-bold text-3xl">Menu</div>
        <div>
          <ul className="flex items-center gap-10">
            {NavLinks.map(({ id, name, link }) => (
              <li key={id}>
                <a
                  href={link}
                  className="hidden sm:inline-block hover:text-primary text-xl font-semibold"
                >
                  {name}
                </a>
              </li>
            ))}

            <li className="hidden md:block cursor-pointer group relative">
              <div className="flex items-center gap-[2px] py-2">
                <span className="inline-block hover:text-primary text-xl font-semibold">
                  Dropdown
                </span>
                <FaCaretDown className="group-hover:rotate-180 duration-300" />
              </div>

              <div className="absolute z-[9999] hidden group-hover:block w-[200px] bg-white text-black shadow-md p-2">
                <ul>
                  {DropdownLinks.map(({ id, name, link }) => (
                    <li key={id}>
                      <a
                        href={link}
                        className="text-xl inline-block w-full rounded-md p-2 hover:bg-primary/20"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li>
              <button onClick={HandlePopup}
               className="flex justify-center items-center gap-2 bg-secondry text-xl h-[40px] text-white px-2 md:px-5 py-2 hover:scale-105 duration-300"> 
                <FaUser />
                MyAccount
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
