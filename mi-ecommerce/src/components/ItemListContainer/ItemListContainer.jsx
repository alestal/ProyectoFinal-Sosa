import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import filterProductsByCategory from '../../firebase/firebase'

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setProducts([]);
    }, 3000);
  }, []);

  useEffect(() => {
  filterProductsByCategory(category).then((products) => setMyProds(products));
}, []);


  
    return (
      <>
        <button onClick={() => setSelectedCategory('maquillaje')}>Maquillaje</button>
        <button onClick={() => setSelectedCategory('accesorios')}>Accesorios</button>
        <button onClick={() => setSelectedCategory('perfumes')}>Perfumes</button>
        <button onClick={() => setSelectedCategory('')}>Ver todos</button>
        
        <ItemList products={filteredProducts} />
      </>
    );
  };

 export default ItemListContainer;
      
          