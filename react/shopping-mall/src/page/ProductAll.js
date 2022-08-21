import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';
const ProductAll = () => {
  const [productList,setProductList]=useState([]);
  const [query,setQuery]=useSearchParams();
  const getProducts=async()=>{
    let searchQuery=query.get(`q`)||'';
    let url = `http://localhost:5000/products?q=${searchQuery}`;
    let response =await fetch(url);
    let data = await response.json();
    // console.log(data);
    setProductList(data);
  };
  useEffect(()=>{
    getProducts()
  },[query])
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