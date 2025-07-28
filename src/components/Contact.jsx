import React from 'react'
import Name from './Name'
import Footer from './Footer'

const Contact = () => {
  return (
    <div>

      <Name />

      <div className='p-32 flex w-full gap-20'>

        <div className='  w-[40%] '>

          <div className='bg-[#cbcbcb50] px-10 py-10'>
            <h1 className='text-3xl font-medium mb-6'>
              Contact Us
            </h1>

            <div className='flex flex-col gap-8'>
              <input type="text" className='w-[100%] py-3 bg-gray-100 border border-gray-300 rounded-md ' placeholder='Email' />
              <input type="text" className='w-[100%] py-3 bg-gray-100 border border-gray-300 rounded-md' placeholder='Name' />
              <textarea className='w-[100%] h-36 py-3 bg-gray-100 border border-gray-300 rounded-md' placeholder='Message' name="" id=""></textarea>
            </div>

            <div className='mt-8'>
              <button className='bg-red-700 px-10 py-3 rounded-md text-white font-medium'>
                Submit  <i className="fa-solid fa-angles-right"></i>
              </button>
            </div>


          </div>

        </div>

        <div className='w-[60%]'>
          <h1 className='text-5xl font-medium mb-10'>
            Get In Touch
          </h1>

          <div className='w-full pt-8'>
            <table className='flex flex-col gap-10'>
              <tr className=''>
                <th className='font-medium text-[22px] float-left '>Regd Office :</th>
                <td className='text-gray-700 text-lg pl-12  '>G-20, Janki Plaza, Jankipuram Ring Road Lucknow</td>
              </tr>

              <tr>
                <th className='font-medium text-[19px] float-left'>Corporate Office :</th>
                <td className='text-gray-700 text-lg pl-8'>5/573 Vikas Khand Gomti Nagar Lucknow -226010</td>
              </tr>

              <tr>
                <th className='font-medium text-[22px]'>Email Address :</th>
                <td className='text-gray-700 text-lg pl-8'>info@ftms.co.in</td>
              </tr>

              <tr>
                <th className='font-medium text-[22px]'>Phone Number :</th>
                <td className='text-gray-700 text-lg pl-8'>0522- 4303131
                  <br />
                  +91 9415341334</td>
              </tr>
            </table>
          </div>

        </div>
      </div>



           {/* <div className='grid grid-rows-4 border border-black '>
            <div>
              <span className='font-medium text-[22px]'>
                Regd Office :
              </span>
              <span className='text-gray-700 text-lg ml-6'>
                G-20, Janki Plaza, Jankipuram Ring Road Lucknow
              </span>
            </div>

            <div>
              <span className='font-medium text-[22px]'>
                Corporate Office :
              </span>
              <span>
                5/573 Vikas Khand Gomti Nagar Lucknow -226010
              </span>
            </div>

            <div>
              <span className='font-medium text-[22px]'>
                Email Address :
              </span>
              <span>
                info@ftms.co.in
              </span>

            </div>

            <div>
              <span className='font-medium text-[22px]'>
                Phone Number:
              </span>
              <span>
                0522- 4303131
                +91 9415341334
              </span>
            </div>
          </div> */}





      <Footer />

    </div>
  )
}

export default Contact