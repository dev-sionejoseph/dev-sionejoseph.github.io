import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { post, put, dlt } from '../axios-calls/calls';
import ArtPiece from './ArtPiece';
import { Button, Popover, PopoverHeader, PopoverBody, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function SellerExhibit (props) {

    const user = useSelector(state => state.user)
    const products = useSelector(state => state.user.currentUser.products)
    const [popoverOpen, setPopoverOpen] = useState(false);
    const toggle = () => setPopoverOpen(!popoverOpen);
    const [modal, setModal] = useState(false);
    const toggle2 = () => setModal(!modal);
    const className = props;
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')

    const deleteProduct = (e) =>{
         
        dlt.call(this,`/products/${e.target.id}`).then(response =>{
            if(response !== null){
               console.log(`delete successful : ${response}`)
            } else {
                console.log ("Invalid credentials; Please try again.")
            }
        });
    }

    const editProduct = (e) =>{

        put.call(this,`/products/${e.target.id}`, {
             title: title,
             details: details,
             price: price,
             image: image,
             sellerID: user.id
        }).then(response =>{
            if(response !== null){
               console.log(`delete successful : ${response}`)
            } else {
                console.log("Unable to save change; Please try again.")
                }
        });
    }

    const addProduct = () =>{

         post.call(this,`/products/`,{
             title: title,
             details: details,
             price: price,
             image: image,
             sellerID: user.id
         })

    }

    



    const display=  (user.role === "sellers" 
                    ? "Add your latest masterpiece!"
                    : "Sign up as an Artist!")
   

    const productList = products.map(product => {

        return (
            <div className="art-actions-wrap">
                <div className="art-actions">
                    <Button id={`Popover-${product.id}`} 
                    className="edit-popover" type="button">
                            edit
                        </Button>
                    <Popover placement="bottom" isOpen={popoverOpen} target={`Popover-${product.id}`} toggle={toggle}>
                    <PopoverHeader>Please fill out all fields</PopoverHeader>
                            <PopoverBody>
                                <Input className="edit-inputs" placeholder={product.title} onChange={(event) => setTitle(event.target.value)}/>
                                <Input className="edit-inputs" placeholder={product.details}onChange={(event) => setDetails(event.target.value)}/>
                                <Input className="edit-inputs" placeholder={product.price}onChange={(event) => setPrice(event.target.value)}/>
                                <Input className="edit-inputs" placeholder={product.image}onChange={(event) => setImage(event.target.value)}/>
                                <Button className="submit-edit" onClick={editProduct} id={product.id}>Submit</Button>
                            </PopoverBody>
                        </Popover>
                        <Button className="delete" id={product.id} onClick={deleteProduct}>Delete</Button>
                </div>
                <ArtPiece type="seller" product={product} key={product.id}/>
            </div>
        )
    })

    return (
        <div className="exhibit-wrap">
            <div className="modal-lauch-wrapper">
                {display}
                <Button color="primary" onClick={toggle2}>+</Button>
                <Modal isOpen={modal} toggle={toggle2} className={className} animated={false} backdrop={true} keyboard={true}>
                    <ModalHeader toggle={toggle2}>Please fill all fields</ModalHeader>
                        <ModalBody>
                            <Input className="add-product-inputs" placeholder="Title" onChange={(event) => setTitle(event.target.value)}/>
                            <Input className="add-product-inputs" placeholder="Details" onChange={(event) => setDetails(event.target.value)}/>
                            <Input className="add-product-inputs" placeholder="Price" onChange={(event) => setPrice(event.target.value)}/>
                            <Input className="add-product-inputs" placeholder="Image URL" onChange={(event) => setImage(event.target.value)}/>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={addProduct}>Add</Button>{' '}
                            <Button color="secondary" onClick={toggle2}>Cancel</Button>
                        </ModalFooter>
                </Modal>
            </div>
            <div className="products-wrapper">
                {productList}
            </div>
        </div>
    )
   
}


