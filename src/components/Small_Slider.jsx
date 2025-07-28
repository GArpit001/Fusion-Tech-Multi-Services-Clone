import React from 'react'
import img1 from "../assets/img/test980.png"
import img2 from "../assets/img/trdt.png"
import img3 from "../assets/img/try.png"
import img4 from "../assets/img/twest98.png"
import img5 from "../assets/img/uio.png"
import img6 from "../assets/img/yuio.png"
import img7 from "../assets/img/yut.png"

const Small_Slider = () => {
    return (
        <div className=''>
            <div className=' px-34  flex justify-end '>
                <div className="flex">
                    {/* <!-- Previous Button --> */}
                    <a href="#" className="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium border-1 border-gray-500 text-gray-500 hover:bg-cyan-600 hover:text-white">

                        <i className="fa-solid fa-chevron-left font-bold"></i>
                    </a>
                    <a href="#" className="flex items-center justify-center px-3 h-8 text-sm font-medium border-1 border-gray-500 text-gray-500 hover:bg-cyan-600 hover:text-white">
                        <i className="fa-solid fa-chevron-right font-bold"></i>

                    </a>
                </div>
            </div>

            <div className='  flex flex-col justify-center items-center  '>
                <div className='flex justify-between gap-3 overflow-x-hidden pl-34' >

                    <div className='border-2 border-black'>
                        <img className='w-[700px]' src={img1} alt="IMGAGE" />
                    </div>
                    <div className='border-2 border-black'>
                        <img className='w-[700px]' src={img2} alt="IMGAGE" />
                    </div>
                    <div className='border-2 border-black'>
                        <img className='w-[700px]' src={img3} alt="IMGAGE" />
                    </div>
                    <div className='border-2 border-black'>
                        <img className='w-[700px]' src={img4} alt="IMGAGE" />
                    </div>
                    <div className='border-2 border-black'>
                        <img className='w-[700px]' src={img5} alt="IMGAGE" />
                    </div>
                    <div className='border-2 border-black'>
                        <img className='w-[700px]' src={img6} alt="IMGAGE" />
                    </div>
                    <div className='border-2 border-black'>
                        <img className='w-[700px]' src={img7} alt="IMGAGE" />
                    </div>

                </div>


                <div>
                    POINT
                </div>
            </div>
        </div>
    )
}

export default Small_Slider