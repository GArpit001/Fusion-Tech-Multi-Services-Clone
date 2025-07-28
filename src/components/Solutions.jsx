import React from 'react'
import icon1 from "../assets/img/Icon2.png"
import icon2 from "../assets/img/Icon.png"
import icon3 from "../assets/img/aring.png"

const Solutions = () => {
    return (
        <div className='px-4 sm:px-8 md:px-16 lg:px-24 xl:px-34 py-8'>
            <div>
                <div className='text-red-700 flex gap-3 sm:gap-5 items-center'>
                    <i className="fa-solid fa-equals text-2xl sm:text-4xl font-light"></i>
                    <p className='text-base sm:text-xl font-medium'>
                        OUR SOLUTIONS
                    </p>
                </div>

                <div className='flex flex-col sm:flex-row justify-between items-center mt-4 sm:mt-6'>
                    <div>
                        <h1 className='text-3xl sm:text-4xl md:text-5xl font-[600]'>
                            Consulting Services
                        </h1>
                    </div>

                    <div>
                        <button className='bg-red-700 text-white px-6 sm:px-12 py-2 sm:py-4 rounded-lg cursor-pointer text-sm sm:text-base'>
                            CONTACT US <i className="fa-solid fa-angles-right"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className='w-full pt-8 sm:pt-12 md:pt-20 flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-7'>
                <div className='group border border-gray-200 w-full md:w-[33%] px-4 sm:px-6 py-8 sm:py-10 hover:bg-red-700 hover:text-white hover:-translate-y-4 translate-y-0 transition-all duration-400 overflow-hidden'>
                    <div>
                        <img src={icon1} className='w-16 sm:w-20 img-effect' alt="Manpower Consulting" />
                    </div>

                    <h2 className='text-lg sm:text-[22px] py-2 sm:py-3 font-bold'>
                        Manpower Consulting
                    </h2>

                    <p className='text-gray-700 tracking-wider leading-6 sm:leading-7 group-hover:text-white transition-all duration-100 text-sm sm:text-base'>
                        Fusion Tech Multi-services is a leading Manpower Recruitment consultant with global perspective in fulfilling the employment services industry; creating and developing a suitable work force to enable our clients gain an edge over others in the competitive work scenario.
                    </p>
                </div>

                <div className='group border border-gray-200 w-full md:w-[33%] px-4 sm:px-6 py-8 sm:py-10 hover:bg-red-700 hover:text-white hover:-translate-y-4 translate-y-0 transition-all duration-400 overflow-hidden'>
                    <div>
                        <img src={icon2} className='w-16 sm:w-20 img-effect' alt="Payroll Processing" />
                    </div>

                    <h2 className='text-lg sm:text-[22px] py-2 sm:py-3 font-bold'>
                        Payroll Processing
                    </h2>

                    <p className='text-gray-700 tracking-wider leading-6 sm:leading-7 group-hover:text-white transition-all duration-100 text-sm sm:text-base'>
                        We are soon launching our payroll processing services for companies who wish to outsource the same to us. In the best interest of any company majority of their time and resources should focus on growing their business, profitability and developing products, hence outsourcing payroll functions is a very good option for them.
                    </p>
                </div>

                <div className='group border border-gray-200 w-full md:w-[33%] px-4 sm:px-6 py-8 sm:py-10 hover:bg-red-700 hover:text-white hover:-translate-y-4 translate-y-0 transition-all duration-400 overflow-hidden'>
                    <div>
                        <img src={icon3} className='w-16 sm:w-20 img-effect' alt="Placement Services" />
                    </div>

                    <h2 className='text-lg sm:text-[22px] py-2 sm:py-3 font-bold'>
                        Placement Services
                    </h2>

                    <p className='text-gray-700 tracking-wider leading-6 sm:leading-7 group-hover:text-white transition-all duration-100 text-sm sm:text-base'>
                        We are also providing placements services to candidates both at fresher and experience level. We match the resumes of candidates registered with us to our current requirements with our clients and arrange interviews accordingly. We do conduct campus recruitment drives on behalf of our clients as well.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Solutions