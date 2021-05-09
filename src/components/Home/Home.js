import React from 'react'
import Nav from '../Nav/Nav'

import SloganMaker from '../SloganMaker/SloganMaker'
import Features from '../Features/Features'
import './Home.css'
const Home=()=>{
    return (
       <div className='home'>
        <Nav />
        <SloganMaker/>
        <Features/>
       </div>
    )
}

export default Home
