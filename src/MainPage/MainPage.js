import React from 'react'
import Content from './Components/Content';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';

function MainPage() {
    return (
        <div >
            <Navbar />
            <Hero />
            <Content />
            <Footer />
        </div>
    )
}

export default MainPage;

