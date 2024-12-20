import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { getProducts } from '../../data/asyncMock'


const ItemListContainer = () => {
 const [products, setProducts ]=useState([])

 
 useEffect(() => {
 getProducts()
 .then (res =>setProducts(res))
 .catch ( e => console.error(e))
 .finally (console.log ('se resolvio la promesa'))
 },[])
  
 
 
 return (
    <>
    <div>
        <ItemList products = {products}/>
    </div>
    </>

  )
}

export default ItemListContainer