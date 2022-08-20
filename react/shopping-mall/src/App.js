
import './App.css';
import { Routes, Route, } from "react-router-dom";
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

function App() {
  const[authenticate,setAuthenticate]=useState(false)//true이면 로그인
  useEffect(()=>{
    console.log('aaa',authenticate)
  },[authenticate])
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ProductAll/>}/>
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>}/>
        <Route path='/products/:id' element={<ProductDetail/>}/>

      </Routes>
    </div>
  );
}

export default App;
