import React from 'react'
import Name from './Name'
import Footer from './Footer'

const Service_Project = () => {
    return (
        <div>
            <Name />
            <div className='px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-8 sm:py-12 md:py-16 text-gray-600 leading-6 sm:leading-7 md:leading-8'>
                <p className='text-sm sm:text-base'>
                    Leading Project Management company providing end-to-end solutions to the Client using the best of standards and practices with primary focus. We are a reliable name in the industrial world for offering integrated technical consultancy services. Its various services are: Pre-feasibility study, New Project Identification, Project Feasibility and Market Study, Identification of Profitable Industrial Project Opportunities, Preparation of Project Profiles / Pre-Investment and Pre-Feasibility Studies, Market Surveys / Studies, Preparation of Techno-Economic Feasibility Reports, Identification and Section of Plant /Process / Equipment, General Guidance, Technical and Commercial Counseling for setting up new industrial projects.
                </p>
            </div>

            <Footer />

        </div>
    )
}

export default Service_Project