import React from 'react'

import Nav from '../Nav/Nav'
import SloganMaker from '../SloganMaker/SloganMaker'
import Features from '../Features/Features'
import FreeProducts from '../FreeProducts/FreeProducts'

import './Home.css'
const Home=()=>{
    return (
       <div className='home'>
        <Nav />
        <SloganMaker/>
        <Features/>
        <FreeProducts/>
       </div>
    )
}

export default Home
