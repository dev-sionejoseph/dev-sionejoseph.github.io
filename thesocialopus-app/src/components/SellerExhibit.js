import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get, post, put, dlt } from '../axios-calls/calls';
import ArtPiece from './ArtPiece';

export default function SellerExhibit () {

    const user = useSelector(state => state.user)

    const deleteProduct = (e) =>{
         
        dlt.call(this,`/products/${e.target.id}`).then(response =>{
            if(response !== null){
               console.log(`delete successful : ${response}`)
            } else {
                this.setState({
                    error:"Invalid credentials; Please try again."
                })
            }
        });
    }

    const editProduct = () =>{
        
    }

    const addProduct = () =>{

    }
    
    const getProducts = () => {
        let products;
        if ((user !== null) && (user.userRole === "sellers")){
            get.call(this,`/byseller/${user.currentUser.id}`).then(response=>{
                products = response;
            })

            products.map(product => {
                return <ArtPiece type="seller" product={product} key={product.id}/>
            })
        } else if (user.userRole === "sellers"){
            return "Add your first art piece!"
        } else {
            return "Sign up as an Artist!"
        }
    }

    return (
        <div className="exhibit-wrap">
            {getProducts}
        </div>
    )

   
    
}
