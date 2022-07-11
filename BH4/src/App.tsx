import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Home from './client/Home';
import Product from './client/Products/product.';


function App() {

  return (
    <Container>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='/products' element={<Product/>}/>
        </Route>
      </Routes>
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
`


export default App
