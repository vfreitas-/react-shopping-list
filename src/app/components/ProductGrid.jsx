import React from 'react'
import PubSub from 'pubsub-js'
import '_sass/components/product-grid.scss'

import Product from './Product.jsx'
import mock from '_services/mock'
import * as service from '_services/product'

class ProductGrid extends React.Component {
    constructor () {
        super()

        this.state = {products: mock.products}
    }

    componentWillMount () {
        this.subToken = PubSub.subscribe('filters-updated', (msg, filters) => {
            this.setState({
                products: service.filter(filters)
            })
        })
    }

    componentWillUnmount () {
        PubSub.unsubscribe(this.subToken)
    }

    render () {
        return (
            <div>
                <div className="mdl-progress mdl-js-progress mdl-progress__indeterminate">

                </div>
                <div className="grid">
                    {this.state.products.map((prod, i) => {
                        return <Product key={i} product={prod}/>
                    })}
                </div>
            </div>
        )
    }
}

export default ProductGrid
