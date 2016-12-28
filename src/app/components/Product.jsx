import React from 'react'
import '_sass/components/product.scss'


const Product = ({ product }) => (
    <div className="product mdl-card mdl-shadow--4dp">
        <div className="mdl-card__title mdl-card--expand"
            style={
                {backgroundImage: `url(${product.image})`}
            }>
            <h2 className="mdl-card__title-text">{product.category}</h2>
        </div>
        <div className="mdl-card__supporting-text">
            {`${product.name} - ${product.variation}`}
        </div>
        <div className="mdl-card__actions mdl-card--border">
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                Add To Cart
            </a>
        </div>
    </div>
)


export default Product
