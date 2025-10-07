import React from 'react'

export default function CartProduct (props) {

    const clickHandler = () => {
        props.onRemoveFromCart(props.id)
    }

    let{img, title, price} = props

    return (
        <div className="cart-row">
            <div className="cart-item cart-column">
                <img className="cart-item-image" src={img} alt={title} width="100" height="100" />
                <span className="cart-item-title">{title}</span>
            </div>
            <span className="cart-price cart-column">{price} $</span>
            <div className="cart-quantity cart-column">
                <button className="btn btn-danger" type="button" onClick={clickHandler}>REMOVE</button>
            </div>
        </div>
    )}