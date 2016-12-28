import React from 'react'
import '_sass/components/header.scss'

const Header = () => (
    <header className="mdl-layout__header mdl-color--indigo-500 mdl-color-text--white">
        <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">
                Home
            </span>
            <div className="mdl-layout-spacer"></div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
                <label className="mdl-button mdl-js-button mdl-button--icon"
                    htmlFor="search">
                    <i className="material-icons">search</i>
                </label>
                <div className="mdl-textfield__expandable-holder mdl-color--white">
                    <input className="mdl-textfield__input"
                        type="text"
                        id="search"/>
                    <label className="mdl-textfield__label .mdl-color--white"
                        htmlFor="search">
                        Enter your query...
                    </label>
                </div>
            </div>
        </div>
    </header>
)


export default Header
