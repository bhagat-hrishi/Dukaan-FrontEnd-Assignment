import React from 'react'
import {Link} from 'react-router-dom'
import dukaanlogo from '../../assets/logos/dukaanlogo.png'
import {ReactComponent as India} from '../../assets/footer/india.svg'

import './Footer.css'

const Footer=()=>{
    let cnt=3;
    return (
        <div className='footer'>
            <div className='footer-content'>
                <img src={dukaanlogo} id="footer-content__logo"/>
                <div className='footer-content__links'>
                    <div className='link-grp' >
                        <Link to='/' className='link'>Contact</Link>
                        <Link to='/' className='link'>FAQ's</Link>
                    </div>
                    <div className='link-grp' >
                        <Link to='/' className='link'>Tutorials</Link>
                        <Link to='/' className='link'>Blog</Link>
                    </div>
                    <div className='link-grp' >
                        <Link to='/' className='link'>Privacy</Link>
                        <Link to='/' className='link'>Banned items</Link>
                    </div>
                    <div className='link-grp' >
                        <Link to='/' className='link'>About</Link>
                        <Link to='/' className='link'>Jobs <span id="jobs-count">{cnt}</span></Link>
                    </div>
                    <div className='link-grp' >
                        <Link to='/' className='link'>Facebook</Link>
                        <Link to='/' className='link'>Twitter</Link>
                        <Link to='/' className='link'>LinkedIn</Link>
                    </div>
                </div>
            </div>
            <div className='footer-detail'>
                <hr id='line'/>
                <div className='footer-detail__info'>
                    <div>Dukaan 2020, All rights reserved.</div>
                    <div className='madein'>
                        <p style={{paddingRight:'1rem'}}>Made in</p>
                        <India/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer
