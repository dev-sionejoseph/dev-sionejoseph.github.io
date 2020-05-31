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
            products:[]
        }
    }

    async componentDidMount(){
        get.call(this,`products`).then(response =>{
            this.setState({
                products: response
            })
        })
        
        // **KEEPING THIS HERE IN CASE ABOVE CALL BREAKS**

        // Axios.get('/products/').then(res => {
            
        //    console.log(res);
        //    console.log(res.data);
        //    console.log(res.data[0]);

        //    this.setState({
        //        products: res.data
        //    })

        // }).catch((e) =>{
        //     console.log(e);
        // })
        
    }
    
    render() {
        const gallery = this.state.products.map(product => {return <ArtPiece key={product.id} product={ product }/>})
       
        return (
            <div>
                 Gallery Page
                 {gallery}
            </div>
        )
    }
}
