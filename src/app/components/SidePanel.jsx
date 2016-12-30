import React from 'react'
import '_sass/components/side-panel.scss'

import Filter from './Filter.jsx'

import mock from '_services/mock.js'

class SidePanel extends React.Component {
    constructor () {
        super()

        this.state = {filters: mock.filters}
    }

    updateFilter (filterName, key) {
        this.setState({
            filters: {
                ...this.state.filters,
                [filterName]: {
                    ...this.state.filters[filterName],
                    [key]: !this.state.filters[filterName][key]
                }
            }
        })
    }

    render () {
        return (
            <div className="mdl-layout__drawer mdl-color--white">
                <header className="mdl-color--pink-500 mdl-color-text--white">
                    <div className="title mdl-color--pink-500">
                        <h5>Filters</h5>
                    </div>
                </header>
                <Filter label="Categories"
                    filterName='categories'
                    items={this.state.filters.categories}
                    vih={this.updateFilter.bind(this)}/>
                <Filter label="Variations"
                    filterName='variations'
                    items={this.state.filters.variations}/>
            </div>
        )
    }
}

export default SidePanel
