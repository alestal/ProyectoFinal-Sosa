import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';

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

  const filteredProducts = products.filter(product =>
    selectedCategory ? product.name.toLowerCase().includes(selectedCategory.toLowerCase()) : true
  );


    if (loading) {
      return <p>Cargando productos...</p>;
    }
  
    if (error) {
      return <p>{error}</p>;
    }
  
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
      
          