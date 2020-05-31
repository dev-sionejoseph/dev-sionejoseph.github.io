import React from 'react'
import { CardSubtitle, CardTitle, CardBody, CardImg, CardText, Button, Card } from 'reactstrap'

export default function ArtPiece() {
    return (
        <div art-piece-wrapper id={this.props.product.id}>
            <Card>
                <CardImg top width="100%" src={this.props.product.image} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{this.props.product.title}</CardTitle>
                        <CardSubtitle>{this.props.product.price}</CardSubtitle>
                        <CardText>{this.props.product.details}</CardText>
                        <Button onClick={this.props.onClick}>Add to Cart</Button>
                    </CardBody>
            </Card>
        </div>
    )
}
