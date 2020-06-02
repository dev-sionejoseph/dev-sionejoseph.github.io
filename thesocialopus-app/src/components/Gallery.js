import React, { Component } from 'react'
import { get } from '../axios-calls/calls';
import ArtPiece from './ArtPiece';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
// import Axios from 'axios';


class Gallery extends Component {
    constructor(props){
        super(props);

        this.state={
            cart:[],
            products:[]
        }

        this.addToCart = this.addToCart.bind(this);
        props = this.props;
    }

    addToCart(e){
        let selectedItem= e.target.value
        console.log(selectedItem)
        let products = this.state.products
        console.log(products[0].id)
        let filteredProduct = products.filter(product => product.id == selectedItem)
        console.log(filteredProduct)
        let newCartItem = {
            id: filteredProduct[0].id,
            title: filteredProduct[0].title,
            price: filteredProduct[0].price
        }
        this.setState(state => {
            const cart = [newCartItem, ...this.state.cart]
       
            return {
              cart,
            };
          });
          this.props.addToCart(newCartItem)
        };

    

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
                        <Button onClick={this.addToCart} value={product.id}>Add to Cart</Button>   
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

const mapDispatchToProps = (dispatch) =>{
    return{
        addToCart: (cart) => {dispatch({type:"add_item", payload: cart}) },
    }
}


export default connect(null, mapDispatchToProps)(Gallery);