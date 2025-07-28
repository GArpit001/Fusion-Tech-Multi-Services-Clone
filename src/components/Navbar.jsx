import React, { useEffect, useState } from 'react'
import Logo from "../assets/img/logo.png"
import { Link, useLocation, useNavigate } from 'react-router'

const Navbar = () => {


    const navigation = useNavigate()
    const location = useLocation()
    const [about , setAbout] = useState("+")

    const refre = () => {
        useEffect(() => {
            navigation("/")
        })
    }

 


    return (
        <nav className='flex w-full bg-white z-10 sticky top-0  shadow-2xl '>
            {/* sticky top-10 */}
            <div className='flex items-center w-full px-8 py-1'>



                <div>

                    <img src={Logo} className='w-[200px] cursor-pointer' alt="" />

                </div>

                {/* <div className='flex flex-row items-center justify-center'> */}

                <div className='flex justify-center gap-16 font-[600]  w-full'>
                    <Link className={`text-black hover:text-red-700 transition duration-300`} onClick={refre} to="/">Home</Link>
                    <div className='text-black hover:text-red-700 transition duration-300 relative main'  >

                        <span className='btn'>
                            ABOUT US {about}
                        </span>

                        <ul className='list-none cont absolute top-8.5 left-[-30px] bg-white w-[250px] '>
                            <Link className='p-5 link' to="/who-we-are" >Who We Are</Link>
                            <Link className='p-5 link border-y-1 border-gray-200' to="/our-mission-&-vision">Our Mission & Vision</Link>
                            <Link className='p-5 link' to="/company-Profile">Company Profile</Link>
                        </ul>

                    </div>

                    <div className='text-black hover:text-red-700 transition duration-300 relative main' >

                        <span className='btn'>
                            OUR SERVICES +
                        </span>

                        <ul className='list-none cont absolute top-8.5 left-[-30px] bg-white w-[250px]' >
                            <Link className='p-5 link' to="/staffing" >Staffing</Link>
                            <Link className='p-5 link border-y-1 border-gray-200' to="/RPO">RPO</Link>
                            <Link className='p-5 link' to="/project-consultancy">Project Consultancy</Link>
                        </ul>

                    </div>

                    <Link className='text-black hover:text-red-700 transition duration-300' to="/contact">CONTACT US</Link>
                </div>

                {/* </div> */}


            </div>

        </nav>
    )
}

export default Navbar