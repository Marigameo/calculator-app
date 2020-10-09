import React, { Component } from 'react'
import '../../styles/switcher.css'
const switcher = {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '30px',
    padding: '30px'
}

class ColorSwitcher extends Component {

    changeColor = (e) => {
        switch (e.target.id) {
            case 'white':
                document.body.style.backgroundColor = '#fcfcfc'
                break;
            case 'green':
                document.body.style.backgroundColor = '#e6f5e9'
                break;
            case 'pink':
                document.body.style.backgroundColor = '#f2e6f5'
                break;
            case 'yellow':
                document.body.style.backgroundColor = '#f5f4e6'
                break;
            default: document.body.style.backgroundColor = '#fcfcfc'
        }
    }
    render() {
        return (
            <div style={switcher}>
                <ul id="switcher" onClick={this.changeColor}>
                    <li id="white"></li>
                    <li id="green"></li>
                    <li id="pink"></li>
                    <li id="yellow"></li>
                </ul>
            </div>
        )
    }
}

export default ColorSwitcher
