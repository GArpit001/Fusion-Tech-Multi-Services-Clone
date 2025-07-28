import React from 'react'
import Name from './Name'
import Footer from './Footer'

const Contact = () => {
  return (
    <div>
      <Name />
      <div className='px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-8 sm:py-12 md:py-16 flex flex-col md:flex-row w-full gap-6 sm:gap-8 md:gap-12 lg:gap-20'>
        <div className='w-full md:w-[40%]'>
          <div className='bg-[#cbcbcb50] px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-10'>
            <h1 className='text-xl sm:text-2xl md:text-3xl font-medium mb-4 sm:mb-6'>
              Contact Us
            </h1>
            <div className='flex flex-col gap-4 sm:gap-6 md:gap-8'>
              <input type="text" className='w-full py-2 sm:py-3 bg-gray-100 border border-gray-300 rounded-md text-sm sm:text-base placeholder-gray-500' placeholder='Email' />
              <input type="text" className='w-full py-2 sm:py-3 bg-gray-100 border border-gray-300 rounded-md text-sm sm:text-base placeholder-gray-500' placeholder='Name' />
              <textarea className='w-full h-24 sm:h-32 md:h-36 py-2 sm:py-3 bg-gray-100 border border-gray-300 rounded-md text-sm sm:text-base placeholder-gray-500' placeholder='Message' name="" id=""></textarea>
            </div>
            <div className='mt-4 sm:mt-6 md:mt-8'>
              <button className='bg-red-700 px-6 sm:px-8 md:px-10 py-2 sm:py-3 rounded-md text-white font-medium text-sm sm:text-base'>
                Submit <i className="fa-solid fa-angles-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div className='w-full md:w-[60%]'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-6 sm:mb-8 md:mb-10'>
            Get In Touch
          </h1>
          <div className='w-full pt-4 sm:pt-6 md:pt-8'>
            <table className='flex flex-col gap-6 sm:gap-8 md:gap-10 w-full'>
              <tr className='flex flex-col sm:flex-row sm:items-center'>
                <th className='font-medium text-base sm:text-lg md:text-[22px] sm:w-40 text-left'>Regd Office :</th>
                <td className='text-gray-700 text-sm sm:text-base md:text-lg sm:pl-4 md:pl-12'>G-20, Janki Plaza, Jankipuram Ring Road Lucknow</td>
              </tr>
              <tr className='flex flex-col sm:flex-row sm:items-center'>
                <th className='font-medium text-base sm:text-lg md:text-[19px] sm:w-40 text-left'>Corporate Office :</th>
                <td className='text-gray-700 text-sm sm:text-base md:text-lg sm:pl-4 md:pl-8'>5/573 Vikas Khand Gomti Nagar Lucknow -226010</td>
              </tr>
              <tr className='flex flex-col sm:flex-row sm:items-center'>
                <th className='font-medium text-base sm:text-lg md:text-[22px] sm:w-40 text-left'>Email Address :</th>
                <td className='text-gray-700 text-sm sm:text-base md:text-lg sm:pl-4 md:pl-8'>info@ftms.co.in</td>
              </tr>
              <tr className='flex flex-col sm:flex-row sm:items-center'>
                <th className='font-medium text-base sm:text-lg md:text-[22px] sm:w-40 text-left'>Phone Number :</th>
                <td className='text-gray-700 text-sm sm:text-base md:text-lg sm:pl-4 md:pl-8'>0522- 4303131<br />+91 9415341334</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact