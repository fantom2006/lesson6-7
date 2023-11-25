import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Product';
import { MdFavorite } from "react-icons/md";
import './App.css';
import { Route, Routes,Link } from 'react-router-dom';
import Favori from './Favori';


const Content = () => {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortType, setSortType] = useState('default'); // 'default', 'popularity', 'price', 'alphabetical'

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setSortedProducts(response.data); // Initially set sortedProducts to the same as products
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error, e.g., display an error message to the user
      }
    };
  
    getData();
  }, []); 
  

  const handleSort = (type) => {
    setSortType(type);
    switch (type) {
      case 'popularity':
        setSortedProducts([...products].sort((a, b) => b.rating - a.rating));
        break;
      case 'price':
        setSortedProducts([...products].sort((a, b) => a.price - b.price));
        break;
        case 'pric':
          setSortedProducts([...products].sort((a, b) => b.price - a.price));
          break;
      case 'alphabetical':
        setSortedProducts([...products].sort((a, b) => a.title.localeCompare(b.title)));
        break;
      default:
        setSortedProducts([...products]);
    }
  };

  return (
    <div >
    <div className="hooter">
      <ul><li Link to='/'> Добро пожаловать!</li></ul>
      <span Link to='/Favori'  className='fav'>  <MdFavorite />
</span>
    </div>
      <div className='butt'>
        <button onClick={() => handleSort('default')}>По умолчанию</button>
        <button onClick={() => handleSort('popularity')}>По популярности</button>
        <button onClick={() => handleSort('price')}>от меньшего</button>
        <button onClick={() => handleSort('pric')}>от большого</button>
        <button onClick={() => handleSort('alphabetical')}>По алфавиту</button>
      </div>
      <div className='items-row'>
        {sortedProducts.map((item, index) => (
          <Product  key={index} {...item} />
        ))}
      </div>
      <Routes>
        <Route path='/' element={<Product/>} />
        <Route path='/Favori' element={<Favori/>}/>
      </Routes>
    </div>
  );
};

export default Content;
