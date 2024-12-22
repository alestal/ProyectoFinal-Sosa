
import React, { useEffect, useState } from 'react';
import ItemList from './ItemList'; 
import { getProducts } from '../../firebase/firebase';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts()
      .then(res => {
        setProducts(res); 
        setFilteredProducts(res); 
        setLoading(false);
      })
    }, []);
  }

  useEffect(() => {
    if (selectedCategory === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product =>
        product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, products]);
  
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
   <button onClick={() => setSelectedCategory('')}></button> 
   

<ItemList products={filteredProducts} />
</>
);


export default ItemListContainer;




















