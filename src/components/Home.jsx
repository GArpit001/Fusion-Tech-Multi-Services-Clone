import React from 'react'
import Slider from './Slider.jsx'
import About from './About.jsx'
import Solutions from './Solutions.jsx'
import Small_Slider from './Small_Slider.jsx'
import Footer from './Footer.jsx'

const Home = () => {
    return (
        <div className='overflow-x-hidden'>
            <Slider />
            <About />

            <div className="px-34 pb-28">
                <Solutions />
            </div>

            {/* <Small_Slider/> */}

            <Footer/>




        </div>
    )
}

export default Home