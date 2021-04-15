import React from 'react'
import { Card } from 'react-bootstrap'
import {Link} from 'react-router-dom' 
import Rating from './Components/Rating'


const Product = ({mofe}) => {
    return (
       
        <Card className='my-3 p-3 rounded'>
             <Link to={`/product/${mofe._id}`} >
        <Card.Img src={mofe.image} variant='top' />
        </Link> 
        <Card.Body>
        <Link to={`/product/${mofe._id}`} >
        <Card.Title as="div"> <strong> {mofe.name}</strong>  </Card.Title>
        </Link> 

        <Card.Text as='div'>
            <div className='my-3'>
        <Rating value={mofe.rating} text={`${mofe.numReviews} review`} color='yellow' />
            </div>
        </Card.Text>

        <Card.Text as='h3'> ${mofe.price}</Card.Text>

        </Card.Body>

     

        
        </Card>
  
    ) 
}

export default Product
