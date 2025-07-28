import React from 'react'

const Footer = () => {
    return (
        <div className='fullFooter'>
            <div className=''>
                {/* <div className=' px-34  py-12'> */}

                {/* <div className=" bg-red-700 px-34 text-white py-12 assistance flex justify-between  "> */}
                <div className=" bg-red-700 back px-34 text-white py-12 assistance flex justify-between  ">
                    <h2 className='text-5xl font-bold'>
                        Need Any Assistance
                    </h2>

                    <button className='border-1 border-white px-10 py-3 rounded-lg font-bold'>
                        CONTACT US <i className="fa-solid fa-angles-right"></i>
                    </button>


                </div>

                <div className="footer bg-[#000000ee] footBack text-white">

                    <div className='px-34 py-28   grid grid-cols-4 gap-12 '>
                        <div className='mt-5 flex flex-col gap-5'>

                            <p className='text-gray-300'>Fusion Tech Multi-services is one of the leading Placement Firms, placing candidates in leading companies. The chief objective being promoting employment of Indian manpower in India & foreign countries.</p>

                            <div className='flex gap-5'>

                                <span className='hover:bg-red-700 transition-all duration-300 cursor-pointer px-4.5 py-4 bg-[#343434]  rounded-full flex justify-center items-center'>
                                    <i className="fa-brands fa-facebook-f"></i>
                                </span>

                                <span className='hover:bg-red-700 transition-all duration-300 cursor-pointer px-4 py-4 bg-[#343434] rounded-full flex justify-center items-center'>
                                    <i className="fa-brands fa-instagram"></i>
                                </span>

                                <span className='hover:bg-red-700 transition-all duration-300 cursor-pointer px-4 py-4 bg-[#343434] rounded-full flex justify-center items-center'>
                                    <i className="fa-brands fa-twitter"></i>
                                </span>

                            </div>

                        </div>

                        <div className='flex flex-col gap-4'>
                            <h2 className='text-2xl font-bold mb-3 ' >Quick Link</h2>

                            <p className='text-gray-300 hover:text-red-700 transition-all duration-400'>Home</p>
                            <p className='text-gray-300 hover:text-red-700 transition-all duration-400'>About Us</p>
                            <p className='text-gray-300 hover:text-red-700 transition-all duration-400'>Contact Us</p>
                        </div>

                        <div className='flex gap-8 flex-col'>
                            <div className='flex gap-3 flex-col'>

                                <h2 className='text-2xl font-bold mb-3' >Regd Office</h2>

                                <div className='flex gap-4 text-gray-300'>
                                    <span className='border border-gray-800 p-1 w-18 h-11 rounded-full flex justify-center items-center'>
                                        <i className="ri-map-pin-line text-red-700"></i>
                                    </span>
                                    <p className='hover:text-red-700 transition-all duration-400 cursor-pointer'>G-20, Janki Plaza, Jankipuram Ring Road Luckno</p>
                                </div>

                            </div>

                            <div className='flex gap-3 flex-col'>

                                <h2 className='text-2xl font-bold mb-3' >Corporate Office</h2>
                                <div className='flex gap-4 text-gray-300'>
                                    <span className='border border-gray-800 p-1 w-18 h-10 rounded-full flex justify-center items-center'>
                                        <i className="ri-map-pin-line text-red-700"></i>
                                    </span>
                                    <p className='hover:text-red-700 transition-all duration-400 cursor-pointer'>5/573 Vikas Khand Gomti Nagar Lucknow -226010</p>
                                </div>
                            </div>

                        </div>

                        <div className='flex gap-5 flex-col'>

                            <h2 className='text-2xl font-bold mb-3'>Subscribe</h2>

                            <p className='text-gray-300'>Join over <span className='text-red-700'> 68,000 </span> people getting our emails</p>

                            <div className='relative'>
                                {/* <textarea name="" id="" cols={25} placeholder='Email Address' className='p-2.5  rounded-[5px]  focus:border focus:border-red-700 border border-gray-800 focus:outline-0 focus:outline-none' ></textarea> */}

                                <input type="text" placeholder='Email Address' className='bg-black p-5 rounded-[5px] focus-border focus-border-red-700 border border-gray-800   ' />

                                <button className='bg-red-700 p-3 absolute top-1.5 right-4 rounded-[5px] cursor-pointer'><i className="ri-telegram-2-fill  text-2xl"></i></button>
                            </div>

                        </div>
                    </div>


                    <hr className='text-[#1f1e1ec9]' />

                    <div className='p-10 text-center'>
                        <p>
                            © 2023 Fusion Tech Multi Services. All Rights Reserved.
                        </p>
                    </div>



                </div>



            </div>


        </div>
    )
}

export default Footer