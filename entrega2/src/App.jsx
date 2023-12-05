import React from 'react'
import './App.css'
import CartWidget from './Components/CartWidget/CartWidget'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Error from './Components/Error'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import Banner from './Components/Banner/Banner'


function App() {
 

  return (
    <div className='App'>
    <BrowserRouter>
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
    <Route path={"/cart"} element={<CartWidget/>}/>
    <Route path={"*"} element={<Error/>}/>
    </Routes>
      
     </BrowserRouter>
    </div>
  )
}

export default App
