import React from 'react'
import { Link } from 'react-router-dom';
import './DetailedRecipe.css'
let n = 0;
export const DetailedReceipe = ({ finalDataTransfer }) => {
    let ingredients = finalDataTransfer.ingredientLines;
    return (
        <div className='whole-container'>
            <div className='make-card'>
                <img src={finalDataTransfer.image} className='img' alt={finalDataTransfer.label} />
                <p className='food-name'>{finalDataTransfer.label}</p>
                <div className='info'>
                    <p>Calories : {finalDataTransfer.calories}</p>
                    <p>Cuisine Type : {finalDataTransfer.cuisineType}</p>
                    <p>Dish Type : {finalDataTransfer.dishType}</p>
                    <p>Total Weight : {finalDataTransfer.totalWeight
                    }</p>
                </div>
                <div className='ingredient'>
                    <ul>
                        {ingredients}
                    </ul>
                </div>
                <Link to={finalDataTransfer.url} target="_blank"> <button className='more-info'> Read More </button></Link>
            </div>
        </div>
    )
}
