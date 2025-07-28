import React, { useEffect, useState } from 'react'
import Logo from "../assets/img/logo.png"
import { Link, useLocation, useNavigate } from 'react-router'

const Navbar = () => {


    const navigation = useNavigate()
    const location = useLocation()
    const [about, setAbout] = useState("+")
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const refre = () => {
        useEffect(() => {
            navigation("/")
        }, [])
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }




    return (
        <nav className='flex w-full bg-white z-10 sticky top-0 shadow-2xl'>
            <div className='flex items-center w-full px-4 sm:px-8 py-2'>
                <div>
                    <img src={Logo} className='w-32 sm:w-40 md:w-[200px] cursor-pointer' alt="Logo" />
                </div>

                <button
                    className='sm:hidden ml-auto text-black focus:outline-none'
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
                    </svg>
                </button>

                <div className={`${isMenuOpen ? 'flex' : 'hidden'
                    } flex justify-center lg:w-[100%] sm:flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 md:gap-16 font-[600] w-full sm:w-auto mt-4 sm:mt-0 absolute sm:static top-16 left-0 bg-white sm:bg-transparent w-full sm:w-auto px-4 sm:px-0 pb-4 sm:pb-0 shadow sm:shadow-none`}>
                    <Link className='text-black hover:text-red-700 transition duration-300 text-sm sm:text-base' onClick={() => { refre(); setIsMenuOpen(false); }} to="/">Home</Link>
                    <div className='text-black hover:text-red-700 transition duration-300 relative main'>
                        <span className='btn text-sm sm:text-base'>
                            ABOUT US {about}
                        </span>
                        <ul className='list-none cont sm:absolute top-full sm:top-8.5 left-0 sm:left-[-30px] bg-white w-full sm:w-[250px] shadow sm:shadow-lg'>
                            <Link className='block p-3 sm:p-5 link text-sm sm:text-base hover:bg-gray-100' to="/who-we-are" onClick={() => setIsMenuOpen(false)}>Who We Are</Link>
                            <Link className='block p-3 sm:p-5 link border-y-1 border-gray-200 text-sm sm:text-base hover:bg-gray-100' to="/our-mission-&-vision" onClick={() => setIsMenuOpen(false)}>Our Mission & Vision</Link>
                            <Link className='block p-3 sm:p-5 link text-sm sm:text-base hover:bg-gray-100' to="/company-Profile" onClick={() => setIsMenuOpen(false)}>Company Profile</Link>
                        </ul>
                    </div>

                    <div className='text-black hover:text-red-700 transition duration-300 relative main'>
                        <span className='btn text-sm sm:text-base'>
                            OUR SERVICES +
                        </span>
                        <ul className='list-none cont sm:absolute top-full sm:top-8.5 left-0 sm:left-[-30px] bg-white w-full sm:w-[250px] shadow sm:shadow-lg'>
                            <Link className='block p-3 sm:p-5 link text-sm sm:text-base hover:bg-gray-100' to="/staffing" onClick={() => setIsMenuOpen(false)}>Staffing</Link>
                            <Link className='block p-3 sm:p-5 link border-y-1 border-gray-200 text-sm sm:text-base hover:bg-gray-100' to="/RPO" onClick={() => setIsMenuOpen(false)}>RPO</Link>
                            <Link className='block p-3 sm:p-5 link text-sm sm:text-base hover:bg-gray-100' to="/project-consultancy" onClick={() => setIsMenuOpen(false)}>Project Consultancy</Link>
                        </ul>
                    </div>

                    <Link className='text-black hover:text-red-700 transition duration-300 text-sm sm:text-base' to="/contact" onClick={() => setIsMenuOpen(false)}>CONTACT US</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar