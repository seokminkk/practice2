import React from 'react'
import { useNavigate } from 'react-router-dom'
const ProductCard = ({item}) => {
  const navigate=useNavigate();
  const showDetail=()=>{
    navigate(`/products/${item.id}`);
  }
  return (
    <div className='product-card' onClick={showDetail}>
      <img src={item?.img}/>
      {/* <div>{item?.choice===true?'concious product':''}</div> */}
      <div>{item?.choice===true?'관심상품':''}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new===true ?'신제품':''}</div>
    </div>
  )
}

export default ProductCard