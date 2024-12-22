import { useState,useEffect } from "react";
import {getProducts,
  getSingleProduct,
  filterProductsByCategory,} from '../../firebase/firebase'

import ItemListContainer from "./ItemListContainer";

export default function ProductsComponents(){
  const [singleProd, setSingleProd] = useState(null);
  const[myProds, setMyProds] = useState([]);
  const [category, setCategory] = useState('')
}


useEffect(() => {
}, [category]);
 /* getSingleProduct('Q5MXI6mELJU7AAsZeUqe')..then((product) =>
    setSingleProd(product)); */

/* getProducts().then((products) => setMyProds(products));*/

/*filterProductsByCategory(category).then((products) => setMyProds(products));
}, []);*/


return (
<>

  {singleProd && (
    <p>
    Prodcucto: {singleProd.name} - Category: {singleProd.category} - Precio ${singleProd.price}
    </p>
  )}

  {myProds &&
    myProds.map((prod) => <ProductCard key={prod.id} prod={prod} />)}
</>
);

