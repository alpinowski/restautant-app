import React from "react";
import { FaPhone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="text-white mt-20">
        < div data-aos = "fade-down" className="container bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl">
                <h1 className="py-10 text-3xl font-bold text-yellow text-center">
                    Contact Us
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6">
                    <div className="text-center space-y-4"> 
                        <div className="flex justify-center">
                            <IoLocationSharp className="text-5xl" />
                        </div>
                        <p> Ziegelstrasse 28, <br /> 10117 Berlin</p>
                    </div>

                    <div className="text-center space-y-4"> 
                        <div className="flex justify-center">
                            <MdEmail className="text-5xl" />
                        </div>
                        <div>
                            <p>info@example.com</p>
                            <p>hr@example.com</p>
                        </div>
                    </div>

                    <div className="text-center space-y-4">
                        <div className="flex justify-center">
                            <FaPhone className="text-5xl" />
                        </div>
                        <div>
                            <p>+49 123 456 789 Front Desk</p>
                            <p>+49 987 654 321 Whatsapp</p>
                            <p>+49 555 555 555 Support</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between p-4 items-center">
                    <p>© 2025 All rights reserved</p>
                    <div className="flex itens-center gap-6">
                        <a href="#"> Privacy Policy</a>
                        <a href="#"> Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;