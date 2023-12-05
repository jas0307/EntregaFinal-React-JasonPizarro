import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import productosJson from "../Json/productosJson.json"
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const[item,setItem] = useState([])  
    const{id} = useParams();
    
    useEffect(() => { 
      const promesa = new Promise ((resolve)=>{
    setTimeout(()=>{
        resolve(productosJson.find(item=> item.id === parseInt(id)))
    
    }, 1200)
    });
    promesa.then((data)=>{
        setItem(data)    
    })
    }, [id]);

  return (
    <div className='itemdetailcontainer'>
        <ItemDetail item={item} />
    </div>
  )
}

export default ItemDetailContainer