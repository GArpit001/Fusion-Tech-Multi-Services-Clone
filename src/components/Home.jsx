import React from 'react'
import Slider from './Slider.jsx'
import About from './About.jsx'
import Solutions from './Solutions.jsx'
import Footer from './Footer.jsx'

const Home = () => {
    return (
        <div className='overflow-x-hidden'>
            <Slider />
            <About />
            <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-34 py-8 sm:pb-12 md:pb-20 lg:pb-28">
                <Solutions />
            </div>
            <Footer />
        </div>
    )
}

export default Home