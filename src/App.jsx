import React from 'react'
import '_sass/app.scss'

import Header from '_components/Header.jsx'
import SidePanel from '_components/SidePanel.jsx'
import ProductGrid from '_components/ProductGrid.jsx'

const App = () => (
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
        <Header />
        <SidePanel />
        <div className="mdl-layout__content mdl-color--grey-100">
            <ProductGrid />
        </div>
    </div>
)

export default App
