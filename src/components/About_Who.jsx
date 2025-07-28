import React from 'react'
import Name from './Name'
import logo from "../assets/img/logo.png"
import Footer from './Footer'

const About_Who = () => {
  return (
    <div className=''>

      <Name />

      <div className='flex p-32 w-full gap-8'>

        <div className=' w-[25%]'>
          <img src={logo} className='w-full' alt="" />
        </div>

        <div className='w-[75%]'>
          <p className='text-gray-600 leading-8'>
            Fusion Tech Multi-services is a fast-growing conglomerate focused on altering the landscape of the future with intelligent and inventive thinking. At naukriprovider.com, we see the opportunity to create a world where everything is customized to the shape and size of our dreams and designed to unfold just the way we planned. Through the implementation of radically advanced technology and an integrated business model, we have diversified businesses into HR Solutions, Real Estate, Infrastructure, Foods, Retail and Energy. Work force can help you anticipate and benefit from the changes happening now and next in the contemporary world of work. We have experience in staffing, recruitment, training, HR meuip services, outsourcing and consulting for all industries, skills and levels. At Fusion Tech Multi-services , we are constantly trying to craft work environment that is conducive for the interface with our clients, as we strongly believe that our success is contingent to the success and growth of each of our clients. Our performance driven culture is a constant enabler to accomplish the goals of our cliental organizations. The group has its corporate office in Lucknow. We are specialized in talent acquisitions & executive search & have expertise in head hunting the right talent for right job. We encompass database of potential and result oriented candidates across India.
          </p>
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default About_Who