import React from 'react'
import '_sass/components/product-grid.scss'

import Product from './Product.jsx'
import mock from '_services/mock'

const products = mock.products

const ProductGrid = () => (
    <div>
        <div className="mdl-progress mdl-js-progress mdl-progress__indeterminate">

        </div>
        <div className="grid">
            {products.map((prod, i) => {
                return <Product key={i} product={prod}/>
            })}
        </div>
    </div>
)

export default ProductGrid
