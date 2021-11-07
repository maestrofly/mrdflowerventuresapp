import React from 'react'
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import  { HeroContainer, HeroContent, HeroItems, HeroH1, 
    HeroP, HeroBtn } from './HeroElements'

const Hero = () => {
    return (
        <HeroContainer>
            <Navbar />
            <Sidebar />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Indoor and Outdoor plants for sale</HeroH1>
                    <HeroP>Affordable plants at a go!</HeroP>
                    <HeroBtn>Call us</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
