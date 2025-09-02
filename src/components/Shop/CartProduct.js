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

        let{img, title, price} = this.props

        return (
            <div className="cart-row">
                <div className="cart-item cart-column">
                    <img className="cart-item-image" src={img} alt={title} width="100" height="100" />
                    <span className="cart-item-title">{title}</span>
                </div>
                <span className="cart-price cart-column">{price} $</span>
                <div className="cart-quantity cart-column">

                    <button className="btn btn-danger" type="button" onClick={this.clickHandler}>REMOVE</button>
                </div>
            </div>
        )
    }
}
