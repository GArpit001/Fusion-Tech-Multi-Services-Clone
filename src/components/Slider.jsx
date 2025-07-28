import React from 'react'
import slider1 from "../assets/img/slider1-1.jpg"
import slider2 from "../assets/img/slider1-2.jpg"

const Slider = () => {
    return (
        <div id="default-carousel" className="relative w-full z-0" data-carousel="slide">
            <div className="relative h-64 sm:h-96 md:h-[500px] overflow-hidden">
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <div className='flex flex-col gap-4 sm:gap-5 w-full sm:w-[500px] md:w-[650px] top-10 sm:top-20 md:top-[180px] left-4 sm:left-8 md:left-[100px] text-white z-20 absolute p-4 sm:p-0'>
                        <h1 className='text-3xl sm:text-4xl md:text-6xl font-bold'>
                            Recruitment Solutions
                        </h1>
                        <p className='text-sm sm:text-base'>
                            Our Costomized Service For Newly Start-Up Companies Covers All Aspects Of Hiring From Screeing To Final Placement Of The Candidate.
                        </p>
                        <button className='bg-red-700 text-white flex w-24 sm:w-[120px] justify-center text-center px-4 sm:px-14 py-1 sm:py-2 font-medium rounded-3xl cursor-pointer hover:bg-transparent hover:border-2 hover:border-white text-sm sm:text-base'>
                            More
                        </button>
                    </div>
                    <img src={slider1} className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Recruitment Solutions" />
                </div>
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <div className='flex flex-col gap-4 sm:gap-5 w-full sm:w-[500px] md:w-[650px] top-10 sm:top-20 md:top-[180px] left-4 sm:left-8 md:left-[100px] text-white z-20 absolute p-4 sm:p-0'>
                        <h1 className='text-3xl sm:text-4xl md:text-6xl font-bold'>
                            Facility Management
                        </h1>
                        <p className='text-sm sm:text-base'>
                            Our Integrated Facility Management Teams Consistently Increase To Productivity Of Your Real Estate Portfolio By Reducing Costs, Minimizing Risk And Increase End - User Satisfacation.
                        </p>
                        <button className='bg-red-700 text-white flex w-24 sm:w-[120px] justify-center text-center px-4 sm:px-14 py-1 sm:py-2 font-medium rounded-3xl cursor-pointer hover:bg-transparent hover:border-2 hover:border-white text-sm sm:text-base'>
                            More
                        </button>
                    </div>
                    <img src={slider2} className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Facility Management" />
                </div>
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <div className='flex flex-col gap-4 sm:gap-5 w-full sm:w-[500px] md:w-[650px] top-10 sm:top-20 md:top-[180px] left-4 sm:left-8 md:left-[100px] text-white z-20 absolute p-4 sm:p-0'>
                        <h1 className='text-3xl sm:text-4xl md:text-6xl font-bold'>
                            Placements Assistance
                        </h1>
                        <p className='text-sm sm:text-base'>
                            We Are Also Providing Placements Services To Candidates Both At Fresh And Experience Level. We Match The Resumes Of Candidates Registered With Us To Our Current Requirements To Our Clients. And Arrange Interviews Accordingly.
                        </p>
                        <button className='bg-red-700 text-white flex w-24 sm:w-[120px] justify-center text-center px-4 sm:px-14 py-1 sm:py-2 font-medium rounded-3xl cursor-pointer hover:bg-transparent hover:border-2 hover:border-white text-sm sm:text-base'>
                            More
                        </button>
                    </div>
                    <img src={slider1} className="z-0 absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Placements Assistance" />
                </div>
            </div>
            <div className="absolute z-30 flex -translate-x-1/2 bottom-3 sm:bottom-5 left-1/2 space-x-2 sm:space-x-3">
                <button type="button" className="w-2 sm:w-3 h-2 sm:h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-2 sm:w-3 h-2 sm:h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-2 sm:w-3 h-2 sm:h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            </div>
            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-2 sm:px-4 cursor-pointer focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-3 sm:w-4 h-3 sm:h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-2 sm:px-4 cursor-pointer focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-3 sm:w-4 h-3 sm:h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    )
}

export default Slider