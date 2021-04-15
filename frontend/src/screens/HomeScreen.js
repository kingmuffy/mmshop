import React, {useState, useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import axios from "axios"
import Product from "../Product"
 

const HomeScreen = () => {
    const [products, setProducts] = useState([])


    useEffect(()=>{ 
            const fetchProducts = async () => {
                const {data} = await axios.get('/api/products')

                setProducts(data)
            }
            fetchProducts()
    }, [])

    return (
        <>
        <h3>Latest sales</h3>

        
   <Row> 
       { products.map((product)=>(
            <Col md={6} sm={12} lg={4} xl={3}  >
           <Product mofe={product}/>


            </Col>
        

      

       ))}
   
</Row>
            
        </>
    )
}

export default HomeScreen
