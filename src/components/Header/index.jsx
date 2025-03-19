import { Img, Text, Heading } from '../../components';
import React, { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from 'react-router-dom';

export default function Header({ ...props }) {
    const location = useLocation();
    const currentPath = location.pathname;
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate=useNavigate()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className='fixed top-0 left-0 text-white z-[9999] w-full'>
            <div className={`flex flex-row  items-center bg-gray-200  ${
                isScrolled ? 'py-2 px-4 md:px-16 space-x-16 justify-center mt-2 w-fit mx-auto bg-rblack-900 shadow-lg rounded-b-lg rounded-l-full rounded-r-full '
                : 'py-4 h-24 px-8 md:px-32 justify-between w-full '
                    } transition-all duration-300 ` }>
                <Link to="/Home">
                    <Img
                        src="images/img_header_logo.png"
                        alt="Headerlogo"
                        className="h-12 w-12"
                    />
                </Link>
                <button
                    className="block md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    >
                    <svg
                        width="24"
                        height="24"
                        fill="none"
                        stroke="black"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                    </button>
                    <div className="hidden md:flex">
                        <div className="pt-1">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2 18V2H18"
                                    stroke="gray"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <div className="flex flex-row space-x-8 py-4 ">
                            <div
                                className="font-semibold cursor-pointer group relative"
                                onClick={() => navigate('/Home')}
                            >
                                Home
                                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-gray-900 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                            </div>
                            <div
                                className="cursor-pointer group relative"
                                onClick={() => navigate('/projects')}
                            >
                                Projects
                                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-gray-900 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                            </div>
                            <div
                                className="cursor-pointer group relative"
                                onClick={() => navigate('/gis-integration')}
                            >
                                Maps
                                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-gray-900 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                            </div>
                            <div
                                className="cursor-pointer group relative"
                                onClick={() => navigate('/contact')}
                            >
                                Contact Us
                                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-gray-900 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                            </div>
                            <div
                                className="cursor-pointer group relative"
                                onClick={() => navigate('/about')}
                            >
                                About us
                                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-gray-900 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                            </div>
                            <div
                                className="cursor-pointer group relative"
                                onClick={() => navigate('/survey')}
                            >
                                Survey
                                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-gray-900 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                            </div>
                        </div>
                    </div>

                <div className="w-16 h-16">
                    <Link to="/profile">
                        <Img
                            src="images/img_avatar.png"
                            alt="Avatar"
                            className="h-full w-full object-cover "
                        />
                    </Link>
                </div>
            </div>
            {isOpen && (
                <div className="absolute top-32 left-0 w-full bg-gray-200 border-t-2 shadow-lg md:hidden">
                    <div className="flex flex-col space-y-4 p-4">
                        <div
                            className="cursor-pointer border-b border-gray-400 pb-2  hover:text-gray-600"
                            onClick={() => navigate('/Home')}
                        >
                            Home
                        </div>
                        <div
                            className="cursor-pointer border-b border-gray-400 pb-2 hover:text-gray-600"
                            onClick={() => navigate('/projects')}
                        >
                            Projects
                        </div>
                        <div
                            className="cursor-pointer border-b border-gray-400 pb-2 hover:text-gray-600"
                            onClick={() => navigate('/gis-integration')}
                        >
                            Maps
                        </div>
                        <div
                            className="cursor-pointer border-b border-gray-400 pb-2 hover:text-gray-600"
                            onClick={() => navigate('/contact')}
                        >
                            Contact Us
                        </div>
                        <div
                            className="cursor-pointer border-b border-gray-400 pb-2 hover:text-gray-600"
                            onClick={() => navigate('/about')}
                        >
                            About us
                        </div>
                        <div
                            className="cursor-pointer border-b border-gray-400 pb-2 hover:text-gray-600"
                            onClick={() => navigate('/survey')}
                        >
                            Survey
                        </div>
                    </div>
                </div>
            )}

        </header>
    );
}