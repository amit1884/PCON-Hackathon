import React from 'react'
import Navbar from './Sections/Navbar'
import CarouselSection from './Sections/CarouselSecion'
import './assets/style.css'
function Home() {
    return (
        <React.Fragment>
            <Navbar/>
            <CarouselSection/>
        </React.Fragment>
    )
}

export default Home
