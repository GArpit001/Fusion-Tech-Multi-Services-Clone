import React from 'react'
import slider1 from "../assets/img/slider1-1.jpg"
import slider2 from "../assets/img/slider1-2.jpg"

const Slider = () => {
    return (
        <>



            <div id="default-carousel" className="relative w-full z-0 " data-carousel="slide">
                <div className="relative h-56 overflow-hidden  md:h-[500px]">
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>

                        <div className=' flex flex-col gap-5 w-[650px] top-[180px] left-[100px] text-white z-20 absolute'>

                            <h1 className=' text-6xl text-white font-bold'>
                                Recruitment Solutions
                            </h1>
                            <p>
                                Our Costomized Service For Newly Start-Up Companies Covers All Aspects Of Hiring From Screeing To Final Placement Of The Candidate.
                            </p>

                            <button className='bg-red-700 text-white flex w-[120px] justify-center text-center px-14 py-2 font-medium rounded-3xl cursor-pointer hover:bg-transparent hover:border-2 hover:border-white '>More</button>


                        </div>


                        <img src={slider1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />

                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>

                      <div className=' flex flex-col gap-5 w-[650px] top-[180px] left-[100px] text-white z-20 absolute'>

                            <h1 className=' text-6xl text-white font-bold'>
                                Facility Management
                            </h1>
                            <p>
                                Our Integrated Facility Management Teams Consistently Increase To Productivity Of Your Real Estate Portfolio By Reducing Costs,Minimizing Risk And Increase End - User Satisfacation.
                            </p>

                              <button className='bg-red-700 text-white flex w-[120px] justify-center text-center px-14 py-2 font-medium rounded-3xl cursor-pointer hover:bg-transparent hover:border-2 hover:border-white '>More</button>


                        </div>


                        <img src={slider2} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />

                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>

                        <div className=' flex flex-col gap-5 w-[650px] top-[180px] left-[100px] text-white z-20 absolute'>

                            <h1 className=' text-6xl text-white font-bold'>
                                Placements Assistance 
                            </h1>
                            <p>
                               We Are Also Providing Placements Services To Candidates Both At Fresh And Experience Level. We Match The Resumes Of Candidates Registered With Us To Our Current Requirements To Our Clients. And Arrange Interviews Accordingly. 
                            </p>

                               <button className='bg-red-700 text-white flex w-[120px] justify-center text-center px-14 py-2 font-medium rounded-3xl cursor-pointer hover:bg-transparent hover:border-2 hover:border-white '>More</button>


                        </div>


                        <img src={slider1} className="z-0 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>

                </div>
                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>

                </div>
                <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer  focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer  focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>

        </>
    )
}

export default Slider