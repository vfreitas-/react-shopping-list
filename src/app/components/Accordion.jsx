import React from 'react'
import '_sass/components/accordion.scss'

const Accordion = ({ id, appearence, title, children }) => (
    <div className={`accordion ${appearence}`}>
        <input className="accordion__radio"
            type="checkbox"
            id={id}
            defaultChecked/>
        <label className="accordion__title"
            htmlFor={id}>
            {title}
        </label>
        <div className="accordion__content">
            {children}
        </div>
    </div>
)

export default Accordion
