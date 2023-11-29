import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar.jsx'


import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx'
import Card from './Components/ItemListContainer/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="contenedor">

      <NavBar />      
      <ItemListContainer greeting={"Bienvenidos al mundo de la electronica e impresion 3D"}/> 
      
       </div>
      
    </>
  )
}

export default App
