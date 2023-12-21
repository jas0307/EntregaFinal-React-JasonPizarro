import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList';
import {getFirestore, collection, getDocs, where, query} from "firebase/firestore";

const ItemListContainer = () => {

  const [item, setItem] = useState([])
  const {id} = useParams();


 useEffect(()=>{
  const queryDb = getFirestore();
  const queryCollection = collection(queryDb, 'productos');

  if(id){
   const queryFilter = query(queryCollection, where('categoryId', '==', id));
   getDocs(queryFilter).then((res)=>
   setItem(res.docs.map((p)=> ({id: p.id, ...p.data() })))
   );
  } else{
   getDocs(queryCollection).then((res)=>
   setItem(res.docs.map((p)=> ({id: p.id, ...p.data() })))
   );
  }
 }, [id])

 return (
   <div className='container'>
     <div className='row'>
      
      <ItemList item={item} />


     </div>
   </div>
 )
}
export default ItemListContainer