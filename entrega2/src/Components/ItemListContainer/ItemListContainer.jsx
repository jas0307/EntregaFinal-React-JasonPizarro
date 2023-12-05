import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import productosJson from "../Json/productosJson.json"
import ItemList from '../ItemList/ItemList';



const ItemListContainer = () => {

  const[item,setItem] = useState([])  
const{id} = useParams();

useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(id ? productosJson.filter((item) => item.categoria === id) : productosJson);
        }, 1200);
      });

      setItem(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  fetchData();
}, [id]);


  return (
    <div className='container'>
      
      <ItemList  item={item} />

    </div>
  )
};

export default ItemListContainer