import { createContext, useEffect, useState } from "react";
import { getProducts } from "../data/asyncMock";
import { createContext } from "react";

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
    <ProductContext.Provider value ={ [products,setProducts,loading]}>
   
    {children}

</ProductContext.Provider>

);

}