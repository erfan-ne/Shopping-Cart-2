import React, { Component } from 'react'

export default class CartProduct extends Component {

    constructor(){
        super()

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler (){
        this.props.onRemoveFromCart(this.props.id)
    }

    render() {
        return (
            <div className="cart-row">
                <div className="cart-item cart-column">
                    <img className="cart-item-image" src={this.props.img} alt={this.props.title} width="100" height="100" />
                    <span className="cart-item-title">{this.props.title}</span>
                </div>
                <span className="cart-price cart-column">{this.props.price} $</span>
                <div className="cart-quantity cart-column">

                    <button className="btn btn-danger" type="button" onClick={this.clickHandler}>REMOVE</button>
                </div>
            </div>
        )
    }
}
