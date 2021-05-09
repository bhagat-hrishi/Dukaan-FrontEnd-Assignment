import React,{useEffect} from 'react'
import './SloganMaker.css'
import {ReactComponent as NextArrow} from '../../assets/other/next-arrow.svg'

const slogans=[
    {
        content:"There is no Sore it will Not Heal, No cool it will not Subdue."
    },
    {
        content:"coziness building for tomorrow"
    },
    {
        content:"There is no Sore it will Not Heal, No cool it will not Subdue."
    },
    {
        content:"coziness building for tomorrow"
    },
    {
        content:"There is no Sore it will Not Heal, No cool it will not Subdue."
    },
    {
        content:"coziness building for tomorrow"
    },
    {
        content:"There is no Sore it will Not Heal, No cool it will not Subdue."
    },
    {
        content:"coziness building for tomorrow"
    },
    {
        content:"There is no Sore it will Not Heal, No cool it will not Subdue."
    },
    {
        content:"coziness building for tomorrow"
    },
    {
        content:"There is no Sore it will Not Heal, No cool it will not Subdue."
    },
    {
        content:"coziness building for tomorrow"
    },
    {
        content:"There is no Sore it will Not Heal, No cool it will not Subdue."
    },
    {
        content:"coziness building for tomorrow"
    },
    {
        content:"There is no Sore it will Not Heal, No cool it will not Subdue."
    },
    {
        content:"coziness building for tomorrow"
    },
    {
        content:"There is no Sore it will Not Heal, No cool it will not Subdue."
    },
    {
        content:"coziness building for tomorrow"
    }
]
const SloganMaker=()=>{

    const generateSloganFormHandler =(e)=>{
        e.preventDefault();
    }
    return (
        <div className='slogan-container'>
            <div className='slogan-main-container'>
                <h1 className='slogan-main-container__title'>Free slogan maker</h1>
                <p className='slogan-main-container__info'>Simply enter a term that describes your business, and get up to 1,000 relevant slogans for free.</p>

                <form id='generate-slogan-form' onSubmit={generateSloganFormHandler}>
              
                    <label className='input-lable' htmlFor='slogan-word'>Word for your slogan</label>
                    <input id='slogan-word'></input>
                    <button  id='generate-slogan-btn'>Generate slogans</button>
                </form>
                <hr className='line'/>
                <div className='slogans-metadata'>
                    <p className='slogans-metadata-count'>We have generated 1,023 slogans for “cozy”</p>
                    <button className='download-all-slogans-btn'>Download all</button>
                </div>
                <div className='all-slogans'>
                    {
                        slogans.map((singleSlogan,index) =>{
                            return(
                                <div key={index+1} className='single-slogan' >
                                    {singleSlogan.content}
                                </div>
                            )
                        })
                    }
                </div>
                <hr className='line' />
                <div className='slogan-controller'>
                    <div>
                        <span className='number active'>1</span>
                        <span className='number'>2</span>
                        <span className='number'>3</span>
                        <span className='delimiter'>...</span>
                        <span className='number'>21</span>
                    </div>
                    <div className='next-controller'>Next <NextArrow/> </div>
                </div>
            </div>
        </div>
    )
}

export default SloganMaker
