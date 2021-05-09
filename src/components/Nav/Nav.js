import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'
import dukaanlogo from '../../assets/logos/dukaanlogo.png'

const Nav =()=>{
    return (
        <nav className='main-nav'>
            
            <img src={dukaanlogo} className='main-nav__logo' />
          
            <div className='main-nav-info'>
                <Link to='/' className='main-nav-signin'>Sign In</Link>
                <button className='main-nav-for-pc'>Dukaan for PC</button>
            </div>
        </nav>
    )
}

export default Nav
