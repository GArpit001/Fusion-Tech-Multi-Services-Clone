import React from 'react'
import icon1 from "../assets/img/Icon2.png"
import icon2 from "../assets/img/Icon.png"
import icon3 from "../assets/img/aring.png"

const Solutions = () => {
    return (
        <div>

            <div>

                <div className='text-red-700 flex gap-5 items-center'>
                    <i className="fa-solid fa-equals text-4xl font-light"></i>
                    <p className='text-xl font-medium'>
                        OUR SOLUTIONS
                    </p>
                </div>

                <div className='flex justify-between items-center'>

                    <div className=''>
                        <h1 className='text-5xl font-[600]'>
                            Consulting Services
                        </h1>
                    </div>

                    <div>
                        <button className='bg-red-700 text-white px-12 py-4 rounded-lg  cursor-pointer'>CONTACT US <i className="fa-solid fa-angles-right"></i></button>
                    </div>

                </div>


            </div>

            <div className='w-full pt-20 flex gap-7'>


                <div className='group border-1 border-gray-200 w-[33%] px-6 py-10 hover:bg-red-700 hover:text-white hover:translate-y-[-15px] translate-y-[0px] hover:transition-all hover:duration-400 overflow-hidden '>
                    <div>
                        <img src={icon1} className='w-20 img-effect' alt="" />
                    </div>

                    <h2 className='text-[22px] py-3 font-bold'>
                        Manpower Consulting
                    </h2>

                    <p className='text-gray-700 tracking-wider leading-7 group-hover:text-white group-hover:transition-all duration-100'>
                        Fusion Tech Multi-services is a leading Manpower Recruitment consultant with global perspective in fulfilling the employment services industry; creating and developing a suitable work force to enable our clients gain an edge over others in the competitive work scenario.
                    </p>
                </div>


                <div className='group border-1 border-gray-200 w-[33%] px-6 py-10 hover:bg-red-700 hover:text-white hover:translate-y-[-15px] translate-y-[0px] hover:transition-all hover:duration-400 overflow-hidden'>
                    <div>
                        <img src={icon2} className='w-20 img-effect' alt="" />
                    </div>

                    <h2 className='text-[22px] py-3 font-bold'>
                        Payroll Processing
                    </h2>

                    <p className='text-gray-700 tracking-wider leading-7 group-hover:text-white group-hover:transition-all duration-100'>
                        We are soon launching our payroll processing services for companies who wish to outsource the same to us . In the best interest of any company majority of their time and resources should focus on growing their business, profitability and developing products,hence outsourcing payroll functions is a very good option for them .
                    </p>
                </div>


                <div className='group border-1 border-gray-200 w-[33%] h-[550px] px-6 py-10 hover:bg-red-700 hover:text-white hover:translate-y-[-15px] translate-y-[0px] hover:transition-all hover:duration-400 overflow-hidden'>
                    <div>
                        <img src={icon3} className='w-20 img-effect' alt="" />
                    </div>

                    <h2 className='text-[22px] py-3 font-bold'>
                        Placement Services
                    </h2>

                    <p className='text-gray-700 tracking-wider leading-7 group-hover:text-white group-hover:transition-all duration-100'>
                        We are also providing placements services to candidates both at fresher and experience level. We match the resumes of candidates registered with us to our current requirements with our clients and arrange interviews accordingly. We do conduct campus recruitment drives on behalf of our clients as well.
                    </p>
                </div>
            </div>


        </div>
    )
}

export default Solutions