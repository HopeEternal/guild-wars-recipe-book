import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div style={headerCont} className="teal darken-4">
                <header className="white-text center-align">
                    <h1>Guild Wars 2 Recipe Book</h1>
                </header>
            </div>
        )
    }
}

const headerCont = {
        padding: '2px 40px',
}