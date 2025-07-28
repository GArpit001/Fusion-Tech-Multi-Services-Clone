import React from 'react'
import Name from './Name'
import Footer from './Footer'

const About_Our = () => {
    return (
        <div>
            <Name />

            <div className='flex  flex-col gap-8 p-32 text-gray-600 leading-8'>

                <p>
                    Mission Sharpen our clients’ competitive edge through the provision of impeccable HR solutions. Deliver top-notched HR services to our clients. Deliver top-notched HR services to our clients. Add value to our customers through the people we place. Ensure a long lasting symbiotic relationship with all our clients

                </p>

                <p>

                    Vision Our HR vision is to bring you a cost savings Human Resource Department that will make all HR tasks (including Employee Selection, HR Administration, Employee Orientation, Training and Legal/Compliance functions) contribute to the company’s top and bottom line results.
                </p>

            </div>

            <Footer/>


        </div>
    )
}

export default About_Our