import React from 'react'
import {ReactComponent as Search} from '../../assets/features/search.svg'
import {ReactComponent as Select} from '../../assets/features/select.svg'
import {ReactComponent as StandOut} from '../../assets/features/stand-out.svg'
import  './Features.css'

let features = [
    {
        imgSrc:<Search/>,
        title : "Search",
        content:"Simply add a keyword or a term related to your business in the slogan maker search box. Wait for the magic to happen."
    },
    {
        imgSrc:<Select/>,
        title : "Select",
        content:"Choose from thousands of options generated by the slogan maker that fit your needs."
    },
    {
        imgSrc:<StandOut/>,
        title : "Sand out",
        content:"Congrats on your new slogan. It's time to win the world!"
    }

]
const Features=()=>{
    return (
        <div className='features'>
            <div className='features__content'>
            {
                features.map(singleFeature =>{
                    return(
                        
                        <div className='feature' key={singleFeature.title}>
                            <div >{singleFeature.imgSrc}</div>
                            <h3 className='feature__title'>{singleFeature.title}</h3>
                            <p className='feature__content'>{singleFeature.content}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Features