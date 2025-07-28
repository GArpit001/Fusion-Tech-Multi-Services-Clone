import React from 'react'
import Name from './Name'
import logo from "../assets/img/logo.png"
import Footer from './Footer'

const About_Who = () => {
  return (
    <div>
      <Name />
      <div className='flex flex-col md:flex-row px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-8 sm:py-12 md:py-16 w-full gap-6 sm:gap-8'>
        <div className='w-full md:w-[25%]'>
          <img src={logo} className='w-full h-auto object-contain' alt="Fusion Tech Multi-services Logo" />
        </div>
        <div className='w-full md:w-[75%]'>
          <p className='text-gray-600 leading-6 sm:leading-7 md:leading-8 text-sm sm:text-base'>
            Fusion Tech Multi-services is a fast-growing conglomerate focused on altering the landscape of the future with intelligent and inventive thinking. At naukriprovider.com, we see the opportunity to create a world where everything is customized to the shape and size of our dreams and designed to unfold just the way we planned. Through the implementation of radically advanced technology and an integrated business model, we have diversified businesses into HR Solutions, Real Estate, Infrastructure, Foods, Retail and Energy. Work force can help you anticipate and benefit from the changes happening now and next in the contemporary world of work. We have experience in staffing, recruitment, training, HR meuip services, outsourcing and consulting for all industries, skills and levels. At Fusion Tech Multi-services , we are constantly trying to craft work environment that is conducive for the interface with our clients, as we strongly believe that our success is contingent to the success and growth of each of our clients. Our performance driven culture is a constant enabler to accomplish the goals of our cliental organizations. The group has its corporate office in Lucknow. We are specialized in talent acquisitions & executive search & have expertise in head hunting the right talent for right job. We encompass database of potential and result oriented candidates across India.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About_Who