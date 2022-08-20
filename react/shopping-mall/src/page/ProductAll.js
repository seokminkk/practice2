import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';

const ProductAll = () => {
  const [productList,setProductList]=useState([]);
  const getProducts=async()=>{
    let url = 'http://localhost:5000/products';
    let response =await fetch(url);
    let data = await response.json();
    // console.log(data);
    setProductList(data);
  };
  useEffect(()=>{
    getProducts()
  },[])
  return (
    <div>
      <Container>
        <Row>
        {productList.map((item)=>(
           <Col sm={3}><ProductCard item={item}/></Col>
        ))}

          
        </Row>
      </Container>
      
    </div>
  )
}

export default ProductAll