import React, { Component } from 'react'

export default class Product extends Component {

    constructor(){
        super()

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.props.onAddToCart(this.props)
    }

    render() {

        let {title, img, price} = this.props

        return (
            <div className="shop-item">
                <span className="shop-item-title">{title}</span>
                <img className="shop-item-image" src={img} alt={title}/>
                <div className="shop-item-details">
                    <span className="shop-item-price">{price} $</span>
                    <button
                        className="btn btn-primary shop-item-button"
                        type="button"
                        onClick={this.clickHandler}>
                        ADD TO CART
                    </button>
                </div>
            </div>
        )
    }
}
