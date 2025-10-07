import React, { Component } from 'react'
import Shop from './components/Shop/Shop'
import './App.css'

//start refactoring to functional components
export default class App extends Component {

    render() {
        return (
            <div>
                <Shop />
            </div>
        )
    }
}
