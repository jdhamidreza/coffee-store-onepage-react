import React,{useState} from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Header = () => {
    const [isMenuOpen,setIsMenuOpen] =useState(false)

    const toggleMenu =()=>{
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <header className="absolute top-0 left-0 w-full text-white z-10" >
            <nav className="px-4 sm:px-6 lg:px-10 py-5" >
                <div className="flex justify-between items-center " >

                    {/* Desktop Logo */}
                    <div className="hidden lg:flex" >
                        <a href="#home" className="text-white hover:text-amber-300 transition-colors duration-300 cursor-pointer">
                            <h1>Corner Cafe</h1>
                        </a>
                    </div>

                    {/* Mobile Logo and Menu Button */}
                    <div className="flex items-center justify-between w-full lg:hidden">
                        <a href="#home" className="text-white hover:text-amber-300 transition-colors duration-300 cursor-pointer">
                            <h1 className="text-lg font-bold">Corner Cafe</h1>
                        </a>
                        <button  
                            onClick={toggleMenu} 
                            className="text-white hover:text-amber-300 transition-colors duration-300 p-2"
                            aria-label="Toggle menu"
                        >
                            <IoMdMenu className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="hidden lg:flex gap-10" >
                        <ul className="flex gap-10" >
                            <li><a href="#home" className="text-white hover:text-amber-300 transition-colors duration-300 cursor-pointer hover:underline underline-offset-4">Home</a></li>
                            <li><a href="#menu" className="text-white hover:text-amber-300 transition-colors duration-300 cursor-pointer hover:underline underline-offset-4">Menu</a></li>
                            <li><a href="#about" className="text-white hover:text-amber-300 transition-colors duration-300 cursor-pointer hover:underline underline-offset-4">About Us</a></li>
                            <li><a href="#contact" className="text-white hover:text-amber-300 transition-colors duration-300 cursor-pointer hover:underline underline-offset-4">Contact</a></li>
                        </ul>
                    </div>

                    <div  className="flex">       
                        <button className="mx-2 hidden bg-cream px-4 py-2 rounded-3xl text-gray-950 lg:block hover:bg-amber-200 transition-colors duration-300 cursor-pointer" >Sign Up</button>
                        <button className="hidden mx-2 lg:block hover:text-amber-300 transition-colors duration-300 cursor-pointer" > Login</button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-20"
                    onClick={toggleMenu}
                ></div>
            )}

            {/* Mobile Menu */}
            <div className={`fixed w-[280px] sm:w-[300px] top-0 right-0 h-screen bg-gray-100 text-gray-950 p-4 transform transition-transform duration-300
            ease-in-out z-30 shadow-2xl ${
                isMenuOpen? "translate-x-0" : "translate-x-full"
            }
            `} >
                {/* Mobile Menu Header */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-xl font-bold">Corner Cafe</h1>
                    <button 
                        onClick={toggleMenu}
                        className="text-gray-600 hover:text-gray-800 p-1 transition-colors duration-300"
                        aria-label="Close menu"
                    >
                        <IoMdClose className="w-6 h-6" />
                    </button>
                </div>

                {/* Mobile Menu Navigation */}
                <nav className="space-y-4">
                    <ul className="space-y-4">
                        <li>
                            <a 
                                href="#home" 
                                className="block text-gray-700 hover:text-amber-600 transition-colors duration-300 py-2 border-b border-gray-200"
                                onClick={toggleMenu}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#menu" 
                                className="block text-gray-700 hover:text-amber-600 transition-colors duration-300 py-2 border-b border-gray-200"
                                onClick={toggleMenu}
                            >
                                Menu
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#about" 
                                className="block text-gray-700 hover:text-amber-600 transition-colors duration-300 py-2 border-b border-gray-200"
                                onClick={toggleMenu}
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#contact" 
                                className="block text-gray-700 hover:text-amber-600 transition-colors duration-300 py-2 border-b border-gray-200"
                                onClick={toggleMenu}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Menu Buttons */}
                <div className="mt-8 space-y-4">
                    <button className="w-full bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-3xl text-white transition-colors duration-300">
                        Sign Up
                    </button>
                    <button className="w-full text-gray-700 hover:text-amber-600 transition-colors duration-300 py-2">
                        Login
                    </button>
                </div>
            </div>

            <div></div>
            
            
        </header>
    );
};

export default Header;
