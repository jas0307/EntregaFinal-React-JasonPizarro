import React from 'react'
import './App.css'

import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Error from './Components/Error'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import Banner from './Components/Banner/Banner'
import CartProvider from './Components/Context/CartContext'
import { CheckOut } from './Components/Chekout/CheckOut'
import Cart from './Components/Cart/Cart'

function App() {
 

  return (
    <div className='App'>
    <BrowserRouter>
    <CartProvider>
     <NavBar />

     <Routes>
     <Route path={"/"}
        element={
      <React.Fragment>
        <Banner greeting={"Bienvenidos al mundo de la impresión 3D"}/>
        <ItemListContainer />
      </React.Fragment>
  }/>
    <Route path={"/category/:id"} element={<ItemListContainer/>} />
    <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
    <Route path={"/cart"} element={<Cart/>}/>
    <Route path={"/checkout"} element={<CheckOut/>} />
    <Route path={"*"} element={<Error/>}/>
    </Routes>
    </CartProvider>
     </BrowserRouter>
    </div>
  )
}

export default App
