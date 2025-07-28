import React from "react";

const TopNavbar = () => {
    return (
        <>
            {/* Hello Top Navbar */}

            <div className="w-full h-10 bg-gray-700 flex">
                <div className="w-[42rem] bg-red-700 flex gap-3 justify-center items-center text-white ">

                    <i className="fa-solid fa-location-dot"></i>


                    <h2 className="font-medium text-[17px]">
                        5/573 Vikas Khand Gomti Nagar Lucknow - 226010
                    </h2>

                </div>

                <div className="w-full bg-black flex justify-end px-2 items-center  text-white">

                    <div className="flex w-[340px] justify-around items-center ">

                        <div className="flex items-center gap-4 ">

                            <i className="fa-solid fa-envelope text-red-700"></i>
                            <p className="text-[17px] font-medium">
                                info@ftms.co.in
                            </p>

                        </div>

                        <p className="text-gray-500 text-2xl">|</p>

                        <div className=" flex justify-center items-center gap-5">
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-twitter"></i>
                        </div>

                    </div>

                </div>

            </div>


        </>
    )
}

export default TopNavbar