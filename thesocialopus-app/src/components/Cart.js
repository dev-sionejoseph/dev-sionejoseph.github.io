import React from 'react'
import { useSelector } from 'react-redux'
import { Card, CardTitle, Button, CardSubtitle } from 'reactstrap'

export default function Cart() {
    const cart = useSelector(state => state.cart.cart)
    const cartItems = cart.map(item => {
        return (
            <div className="cart-item">
                <Card>
                    <CardTitle>{item.title}</CardTitle>
                    <CardSubtitle>{item.price}</CardSubtitle>
                    <Button color="danger" id={item.id}>Remove</Button>
                </Card>
            </div>
        )
    })
    return (
        <div className="cart-wrap-main">
                <div className="cart-items-container">
                    {cartItems}
                </div>
                <div className="checkout-wrap">
                    <Button color="primary" className="checkout">Proceed to Checkout</Button>
                </div> 
        </div>
    )
}
