import { useState,useEffect } from "react";
import {getProducts,  getSingleProduct} from '../firebase/firebase';
/*import{ filterProductsByCategory} from '../firebase/firebase';*/
import ItemListContainer from "./ItemListContainer";

export default function ProductsComponents(){
  const [singleProd, setSingleProd] = useState(null);
  const[myProds, setMyProds] = useState([]);
}


useEffect(() => {
  getSingleProduct('Q5MXI6mELJU7AAsZeUqe')  
    .then((product) => setSingleProd (product))
    .catch((error) => console.error("Error al obtener el producto:", error));
}, []); 


useEffect(() => {
  getProducts()
    .then((products) => setMyProds(products))
    .catch((error) => console.error("Error al obtener los productos:", error));
}, []); 

return (
<>
  {singleProd && (

    <p>
    Prodcucto: {singleProd.name} - Imagen: <img src={singleProd.img} alt={singleProd.name} /> - Precio ${singleProd.price}
    </p>
  )}


{myProds && myProds.map ((prod) => ( <ItemListContainer key = {prod.id} prod={prod} />) )}

</>
);

