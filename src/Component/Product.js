import React, { useState } from 'react'
import { ProductsData } from '../data/products'
import '../Styles/Product.css'

export default function Product() {
    const [MenuProducts, setMenuProducts] = useState(ProductsData)
    const filterItem = (categItem) => {
        const updateItem = ProductsData.filter((curEle) => {
            return curEle.category === categItem
        })
        setMenuProducts(updateItem)
    }
    return (
        <>
            <div className='ProductContainer'>
                <h1>Our Feature Products</h1>
                <div className='Product'>
                    <ul className='menu'>
                        <li onClick={() => setMenuProducts(ProductsData)}>All</li>
                        <li onClick={() => filterItem('skincare')}>Skin Care</li>
                        <li onClick={() => filterItem('conditioner')}>Conditioner</li>
                        <li onClick={() => filterItem('foundation')}>Foundation</li>
                    </ul>
                    <div className='List'>
                        {MenuProducts.map((product, i) => {
                            return (
                                <>
                                    <div className='SingleProduct' >
                                        <div className='Left'>
                                            <span>{product.name}</span>
                                            <span>{product.detail}</span>
                                            <span>${product.price}</span>
                                            <button className='ShopNowButton'>Shop Now</button>
                                        </div>
                                        <img src={product.img} alt="product"></img>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
