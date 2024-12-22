import { useState,useEffect } from "react";
import {getProducts,} from '../../firebase/firebase';
import ItemListContainer from "./ItemListContainer";


export default function ItemListContainer(){
 const[myProds, setMyProds] = useState([]);
}



 useEffect(() =>{ getProducts().then((products) => setMyProds(products));
 }, []);

   
return (
  <>  {myProds &&
    myProds.map((prod) => <Item key={prod.id} prod={prod} />)}
 </>
)

 