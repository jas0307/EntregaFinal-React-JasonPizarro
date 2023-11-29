import { Container } from "react-bootstrap"
import banner from "../ItemListContainer/banner.png"
import ItemList from "./ItemList"
import React, { useEffect, useState } from 'react'




const ItemListContainer = ({greeting}) => {
  
    const [list, setList] = useState([])
    const url = 'https://www.digi-api.com/api/v1/digimon/'
    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            
            setList(data.content) // Ejemplo Digimon
            
        })
    }, [])    
    return(
        <Container>
           <div>
            <h1>{greeting}</h1>
            <img src={banner} width="100%" alt="banner"/>
            </div>
            <Container>
            <ItemList list={list} />           
            </Container>
        </Container>
        
        )
    }
    export default ItemListContainer