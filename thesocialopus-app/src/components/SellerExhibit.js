import React, { Component, useState } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { get, post, put, dlt } from '../axios-calls/calls';
import ArtPiece from './ArtPiece';
import { Button, Popover, PopoverHeader, PopoverBody, Input } from 'reactstrap';

function SellerExhibit () {

    const user = useSelector(state => state.user)
    const products = useSelector(state => state.user.currentUser.products)
    const [popoverOpen, setPopoverOpen] = useState(false);
    const toggle = () => setPopoverOpen(!popoverOpen);

    // let userID = props.user.id
    

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
       
        let final;

        if ((user !== null) && (user.role === "sellers")){
            console.log(`current user: ${user.currentUser.firstName}`)
            
            return `this is running ${final}`
        } else if (user.role === "sellers"){
            return "Add your first art piece!"
        } else {
            return "Sign up as an Artist!"
        }
    }

    const productList = products.map(product => {

        return (
            <div className="editableArt">
                <div className="popoverDiv">
                    <Button id={`Popover-${product.id}`} 
                    className="edit-popover" type="button">
                            edit
                        </Button>
                    <Popover placement="bottom" isOpen={popoverOpen} target={`Popover-${product.id}`} toggle={toggle}>
                    <PopoverHeader>Edit</PopoverHeader>
                            <PopoverBody>
                                <Input className="edit-inputs" placeholder={product.title}></Input>
                                <Input className="edit-inputs" placeholder={product.details}></Input>
                                <Input className="edit-inputs" placeholder={product.price}></Input>
                                <Input className="edit-inputs" placeholder={product.image}></Input>
                                <Button className="submit-edit" onClick={editProduct}></Button>
                            </PopoverBody>
                        </Popover>
                </div>
                <ArtPiece type="seller" product={product} key={product.id}/>
            </div>
        )
    })

    return (
        <div className="exhibit-wrap">
            {productList}}
        </div>
    )
   
}

const mapStateToProps = (state) => {
    return{
        auth: state.auth.auth,
        user: state.user.currentUser,
        userID: state.user.id,
        role: state.user.role
    }
}


export default connect(mapStateToProps)(SellerExhibit);
