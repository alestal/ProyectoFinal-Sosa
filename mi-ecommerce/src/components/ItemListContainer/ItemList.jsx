import { useState,useEffect } from "react";
import {getProducts,} from '../../firebase/firebase';
import Item from './Item';





export default function ItemListContainer(){
 const[myProds, setMyProds] = useState([]);
 const [error, setError] = useState(null); 
}



 useEffect(() =>{
  setLoading(true);
 getProducts()
 .then((products) => {
setMyProds(products); 
})
.catch((error) => {
  console.error ('Error al cargar los productos', error);
});
}, []);
   
return (
  <>  {myProds.length > 0 ? (
    myProds.map((prod) => <Item key={prod.id} prod={prod} />)
  ):(
    <p>No hay productos</p>
  )}
</>
);

 