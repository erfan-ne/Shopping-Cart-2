import React from 'react'

export default function Product (props) {

    const clickHandler = () => {
        props.onAddToCart(props)
    }

    let {title, img, price} = props

    return (
        <div className="shop-item">
            <span className="shop-item-title">{title}</span>
            <img className="shop-item-image" src={img} alt={title}/>
            <div className="shop-item-details">
                <span className="shop-item-price">{price} $</span>
                <button
                    className="btn btn-primary shop-item-button"
                    type="button"
                    onClick={clickHandler}>
                    ADD TO CART
                </button>
            </div>
        </div>
    )
}
