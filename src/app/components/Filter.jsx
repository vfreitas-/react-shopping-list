import React from 'react'
import '_sass/components/filter.scss'

import Accordion from './Accordion.jsx'


const Filter = ({ label, filterName, items, updateFilter }) => (
    <div>
        <Accordion id={label} appearence='mdl-color-text--indigo-500'
            title={<h6>{label}</h6>}>
            <ul className="mdl-list">
                {Object.keys(items).map((key, index) => (
                    <li key={index} className="mdl-list__item">
                        <div className="mdl-list__item-primary-content">
                            <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect"
                                htmlFor={`${label}_${index}`}>
                                <input className="mdl-checkbox__input"
                                    type="checkbox"
                                    checked={items[key]}
                                    id={`${label}_${index}`}
                                    onChange={() => updateFilter(filterName, key)}
                                />
                                <span className="mdl-checkbox__label">
                                    {key}
                                </span>
                            </label>
                        </div>
                    </li>
                ))}
            </ul>
        </Accordion>
    </div>
)

Filter.defaultProps = {
    items: {}
}

export default Filter
