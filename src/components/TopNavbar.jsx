import React from "react";

const TopNavbar = () => {
    return (
        <div className="w-full h-16 sm:h-10 bg-gray-700 flex flex-col sm:flex-row">
            <div className="w-full sm:w-[42rem] bg-red-700 flex gap-2 sm:gap-3 justify-center items-center text-white py-2 sm:py-0">
                <i className="fa-solid fa-location-dot text-sm sm:text-base"></i>
                <h2 className="font-medium text-sm sm:text-[17px] text-center">
                    5/573 Vikas Khand Gomti Nagar Lucknow - 226010
                </h2>
            </div>

            <div className="w-full bg-black flex justify-center sm:justify-end px-2 sm:px-4 items-center text-white">
                <div className="flex flex-col sm:flex-row w-full sm:w-[340px] justify-center sm:justify-around items-center gap-2 sm:gap-4">
                    <div className="flex items-center gap-2 sm:gap-4">
                        <i className="fa-solid fa-envelope text-red-700 text-sm sm:text-base"></i>
                        <p className="text-sm sm:text-[17px] font-medium">
                            info@ftms.co.in
                        </p>
                    </div>
                    <p className="text-gray-500 text-lg sm:text-2xl hidden sm:block">|</p>
                    <div className="flex justify-center items-center gap-3 sm:gap-5">
                        <i className="fa-brands fa-facebook-f text-sm sm:text-base"></i>
                        <i className="fa-brands fa-instagram text-sm sm:text-base"></i>
                        <i className="fa-brands fa-twitter text-sm sm:text-base"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopNavbar