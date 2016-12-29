import React from 'react'
import '_sass/components/filter.scss'

import Accordion from './Accordion.jsx'

const Filter = ({ filterField, productField, checkboxData }) => (
    <div>
        <Accordion id={filterField} appearence='mdl-color-text--indigo-500'
            title={<h6>{filterField}</h6>}>
            <ul className="mdl-list">
                {Object.keys(checkboxData).map((key, index) => {
                    return (
                        <li className="mdl-list__item">
                            <div className="mdl-list__item-primary-content">
                                <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect"
                                    htmlFor={`${filterField}-${index}`}>
                                    <input type="checkbox"
                                        checked={checkboxData[key]}
                                        id={`${filterField}-${index}`}
                                    />
                                    <span className="mdl-checkbox__label">
                                        {key}
                                    </span>
                                </label>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </Accordion>
    </div>
)

export default Filter
