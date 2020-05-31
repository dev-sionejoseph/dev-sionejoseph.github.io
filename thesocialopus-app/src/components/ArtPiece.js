import React from 'react'
import { CardSubtitle, CardTitle, CardBody, CardImg, CardText, Button, Card } from 'reactstrap'

export default function ArtPiece(props){
    const {product} = props;

    return (
        <div className="art-piece-wrapper" id={product.id}>
            <Card>
                <CardImg top width="100%" src={product.image} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{product.title}</CardTitle>
                        <CardSubtitle>{product.price}</CardSubtitle>
                        <CardText>{product.details}</CardText>
                        <Button onClick={props.onClick}>Add to Cart</Button>
                    </CardBody>
            </Card>
        </div>
    )
}
