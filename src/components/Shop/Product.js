import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        return (
            <div className="shop-item">
                <span className="shop-item-title">{this.props.title}</span>
                <img className="shop-item-image" src={this.props.img} alt={this.props.title}/>
                <div className="shop-item-details">
                    <span className="shop-item-price">{this.props.price} $</span>
                    <button
                        className="btn btn-primary shop-item-button"
                        type="button">
                        ADD TO CART
                    </button>
                </div>
            </div>
        )
    }
}
