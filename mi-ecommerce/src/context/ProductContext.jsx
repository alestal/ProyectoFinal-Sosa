import { createContext, useEffect, useState } from "react";
import { getProducts } from '../firebase/firebase';


export const ProductContext = createContext (false);

export function ProductProvaider ({children}) {
    const [products,setProducts] = useState ([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts().then((data) => {
          setProducts(data);
          setLoading(false);
        });
      }, []);  

return (

  <div class= "card">
    <ProductContext.Provider value ={ [products,setProducts,loading]}>
   
    {children}

</ProductContext.Provider>
</div>
);

}