import React from 'react'
import Card from './Card'

const ItemList = ({list}) => {
   
    const listMap = list.map((digimon)=>{
        return <Card digimon={digimon} key={digimon.id}/>   
    
    })
    console.log(listMap)
  return (
    <div>
        {list.map((digimon) => <Card digimon={digimon} key={digimon.id}/> )}
    
    </div>
  )
}

export default ItemList