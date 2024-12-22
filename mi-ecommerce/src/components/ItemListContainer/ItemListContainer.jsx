import React, { useState, useEffect } from 'react';
import filterProductsByCategory from '../../firebase/firebase'
import {ItemList} from './ItemList'

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [error, setError] = useState(null);
  
   useEffect(() => {
    setLoading(true);
    filterProductsByCategory(selectedCategory)
    .then((products) => {
    setProducts(products);
    setLoading(false);
  })
  .catch((err) => { 
   setError(err.message); 
   setLoading(false);
   });
}, [selectedCategory]);   
    
if (loading) { 
return <p>Cargando productos...</p>; 
}
if (error) {
return <p>Error al cargar productos: {error}</p>;
}

    return (
      <>
        <button onClick={() => setSelectedCategory('maquillaje')}>Maquillaje</button>
        <button onClick={() => setSelectedCategory('accesorios')}>Accesorios</button>
        <button onClick={() => setSelectedCategory('perfumes')}>Perfumes</button>
        <button onClick={() => setSelectedCategory('')}>Ver todos</button>
        
        <ItemList products={products} />
      </>
    );
  };

export default ItemListContainer
          