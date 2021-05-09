import React from 'react'
import product1 from '../../assets/products/product1.png'
import product2 from '../../assets/products/product2.png'
import product3 from '../../assets/products/product3.png'
import product4 from '../../assets/products/product4.png'



import Product from '../FreeProducts/Product/Product'

import './FreeProduct.css'
let productsInfo = [
    {
        imgSrc:product1,
        title : "Privacy Policy Generator",
        content:"Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging."
    },
    {
        imgSrc:product2,
        title : "Terms & Conditions Generator",
        content:"Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging."
    },
    {
        imgSrc:product3,
        title : "Domain Name Generator",
        content:"Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging."
    },
    {
        imgSrc:product4,
        title : "Invoice Generator",
        content:"Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging."
    }

]
const FreeProducts=()=>{
    return (
        <div className='free-products'>
            <h1 className='free-products__title'>Try our other free products</h1>
            <div className='free-products__products'>
            {
               productsInfo.map(singleProduct =>{
                   return(
                    <Product key={singleProduct.title} product={singleProduct}/>
                   )
               })
           }  
            </div> 
        </div>
    )
}

export default FreeProducts
