import { Preloader } from './Preloader';
import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import './BottomPage.css'


const app_id = "1c7d774b";
const app_key = "85764feddf14401f49a1cc95c7ff7ebe";
let num = 0;
let num2 = 0;

export const BottomPage = ({ onSearchFoods }) => {
    const [loading, setLoading] = useState(true);
    const [allMeals, setAllMeals] = useState([]);
    const [searchedMeals, setsearchedMeals] = useState([]);
    const [isSearched, setIsSsearched] = useState(false);

    let element = onSearchFoods;
    const foodSearched = () => {
        let ln = element.length;
        if (ln > 0) { setIsSsearched(true); }
        else { setIsSsearched(false); }
    }


    const showFoodSearched = async (element) => {
        try {
            const data = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${element}&app_id=${app_id}&app_key=${app_key}`)
            const response = await data.json();
            setLoading(false);
            return response;
        }
        catch (e) {
            console.log(e, 'Something wrong happend');
            setLoading(false);
            return e
        }
    }
    useEffect(() => {
        foodSearched();
        const timer = setTimeout(() => {
            if (isSearched) {
                showFoodSearched(`${element}`).then((resp) => {
                    setsearchedMeals(resp.hits);
                });;
            }
        }, 500);
        return () => clearTimeout(timer);
    }, [onSearchFoods, isSearched])

    const foodItems = async (query) => {
        try {
            const data = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${app_id}&app_key=${app_key}`)
            const response = await data.json();
            setLoading(false);
            return response;
        }
        catch (e) {
            console.log(e, 'Something wrong happend');
            setLoading(false);
            return e;
        }
    }

    useEffect(() => {
        foodItems('veg').then((resp) => {
            setAllMeals(resp.hits);
        });
    }, [])

    let l = searchedMeals.length;

    return (
        <>
            {
                (loading) ? <Preloader /> :
                    (isSearched) ? <div className='searched-food' > {
                        (l === 0) ? <h2>Food is Not Found </h2>
                            : <div className='bottom-cntainer'>
                                {searchedMeals.map((data) => {
                                    return (<Card key={num2++} allMealData={data.recipe} />)
                                })}</div>}</div>
                        :
                        <div className='bottom-cntainer'> {allMeals.map((data) => {
                            return (
                                <Card key={num++} allMealData={data.recipe} />
                            )
                        })}</div>
            }
        </>
    )
}
