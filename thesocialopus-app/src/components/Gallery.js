import React, { Component } from 'react'
import { get } from '../axios-calls/calls';
import ArtPiece from './ArtPiece';
// import Axios from 'axios';


export default class Gallery extends Component {
    constructor(props){
        super(props);

        this.state={
            cart:[],
            auth: false,
            products:{}
        }
    }

    async componentDidMount(){
        let products = get.call(this,`products`)
        // products.map(product => <ArtPiece product={product}/>)

        // Axios.get('/products/').then(res => {
        //    console.log(res.data);
        // }).catch((e) =>{
        //     console.log(e);
        // })

        console.log(products);
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
