import React from 'react'

import './Product.css'

const Product=(props)=>{
    
    const {content,imgSrc,title}=props.product

    return (
        <div className='product'>
            <img src={imgSrc} className='product__img'/>
            <h3 className='product__title'>{title}</h3>
            <p className='product__content'>{content}</p>

        </div>
    )
}

export default Product
