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
        return (
            <div className="shop-item">
                <span className="shop-item-title">{this.props.title}</span>
                <img className="shop-item-image" src={this.props.img} alt={this.props.title}/>
                <div className="shop-item-details">
                    <span className="shop-item-price">{this.props.price} $</span>
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
