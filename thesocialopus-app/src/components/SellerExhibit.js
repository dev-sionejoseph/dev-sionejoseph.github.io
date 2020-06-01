import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get, post, put, dlt } from '../axios-calls/calls';

export default function SellerExhibit () {

    const user = useSelector(state => state.user)
    console.log(user);

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
    
    return (
        <div className="exhibit-wrap">
            
        </div>
    )

   
    
}
