import React from 'react'
import '_sass/components/side-panel.scss'

import Filter from './Filter.jsx'

import mock from '_services/mock.js'

const filters = mock.filters
console.log(filters.categories);
const SidePanel = () => (
    <div className="mdl-layout__drawer mdl-color--white">
        <header className="mdl-color--pink-500 mdl-color-text--white">
            <div className="title mdl-color--pink-500">
                <h5>Filters</h5>
            </div>
        </header>
        <Filter filterField='categories' productField='category'
            checkboxData={filters.categories}/>
        <Filter filterField='variations' productField='variation'
            checkboxData={filters.variations}/>
    </div>
)

export default SidePanel
