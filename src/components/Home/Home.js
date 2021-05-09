import React from 'react'
import Nav from '../Nav/Nav'

import SloganMaker from '../SloganMaker/SloganMaker'
import './Home.css'
const Home=()=>{
    return (
       <div className='home'>
        <Nav />
        <SloganMaker/>
       </div>
    )
}

export default Home
