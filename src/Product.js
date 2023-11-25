import React, { useState } from 'react';
import './App.css';
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";


const Product = ({ image, title,price}) => {

    const [favorite, setFavoirte] = useState(false)

    const handleFavorite = () => {
        setFavoirte(!favorite)
        
    }
    return (
        <div className='product'>
            <div>
                <img  src={image} alt='image'/>
            </div>
            <div>
                <h2>{title}</h2>
            </div>
            <div>
               <p> <b>{price}$</b></p>
                <p onClick={handleFavorite} className='pix'>{favorite ? <  MdFavorite/> :<MdFavoriteBorder />}</p>
            </div>
        </div>
    );
}

export default Product;
