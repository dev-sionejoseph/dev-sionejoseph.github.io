import React, { Component } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { get, post, put, dlt } from '../axios-calls/calls';
import ArtPiece from './ArtPiece';

function SellerExhibit () {

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

    const editProduct = (e) =>{

        put.call(this,`/products/${e.target.id}`).then(response =>{
            if(response !== null){
               console.log(`delete successful : ${response}`)
               this.props.history.push('/profile')
            } else {
                this.setState({
                    error:"Unable to save change; Please try again."
                })
            }
        });
        
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
            return products
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

const mapStateToProps = (state, ownProps) => {
    return{
        auth: state.auth,
        user: state.currentUser,
        role: state.userRole
    }
}


export default connect(mapStateToProps)(SellerExhibit);
