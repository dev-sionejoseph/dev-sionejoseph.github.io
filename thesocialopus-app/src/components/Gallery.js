import React, { Component } from 'react'
import { get } from '../axios-calls/calls';
import ArtPiece from './ArtPiece';
import { Button } from 'reactstrap';
// import Axios from 'axios';


export default class Gallery extends Component {
    constructor(props){
        super(props);

        this.state={
            cart:["test"],
            products:[]
        }

        this.addToCart = this.addToCart.bind(this);
    }

    addToCart(e){
        let newCartItem= e.target.value

        this.setState({
            cart: [newCartItem, ...this.state.cart]
        })
        console.log(this.state.cart);
    }

    async componentDidMount(){
        get.call(this,`products`).then(response =>{
            this.setState({
                products: response
            })
        })
        
    }
    
    render() {
        const gallery = this.state.products.map(product => {
            return (
                <div className="art-actions-wrap">
                    <div className="art-actions">
                        <Button onClick={this.addToCart} value={product}>Add to Cart</Button>   
                    </div>
                    <ArtPiece key={product.id} product={ product } />
                </div>
            
            )})
       
        return (
            <div className="gallery-wrap">
                 {gallery}
            </div>
        )
    }
}
