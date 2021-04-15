import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button, ListGroupItem} from 'react-bootstrap'
import Rating from '../Components/Rating'
import '../index.css'
import axios from 'axios'

const ProductScreen = ({match}) => {
    const [product, setProduct ] = useState({})


    useEffect(() => {
     const fetchProduct = async ()=> {
         const {data} = await axios.get(`/api/products/${match.params.id}`)
         setProduct(data)
     
        }
        fetchProduct()
    }, )


    // const product = products.find((p) => p._id === match.params.id)

    return (
        <div>
            <Link className="btn btn-light my-3" to='/'>
                go back
            </Link>
            <Row>
                <Col md={5}>
                    <Image src={product.image} alt={product.name}  fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>
                                {product.name}
                            </h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} review`} color={product.color} />
                        </ListGroup.Item>
                        <ListGroupItem>
                            <h3>price:${product.price}</h3>
                        </ListGroupItem>
                        <ListGroupItem className="csc">
                            <h3 >description:{product.description}</h3>
                        </ListGroupItem>
                    </ListGroup>

                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroupItem>
                                <Row>
                                    <Col>
                                    price:
                                    </Col>
                                    <Col>
                                    ${product.price}</Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row>
                                    <Col>
                                    status:
                                    </Col>
                                    <Col>
                                   { product.countInStock > 0 ? 'in stock' : 'out of stock'}
                                   </Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Button className="btn-block" type='button'>Add to cart</Button>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
            {product.name}
            
        </div>
    )
}

export default ProductScreen
