import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ReceipesInfo.css'
import { DetailedReceipe } from '../Components/DetailedReceipe';

const app_id = "1c7d774b";
const app_key = "85764feddf14401f49a1cc95c7ff7ebe";

export const ReceipesInfo = () => {
  const [foodData, setFoodData] = useState([]);
  const { foodReceipe } = useParams();
  const f = foodReceipe;
  const itemReceipe = async (f) => {
    try {
      const data = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${f}&app_id=${app_id}&app_key=${app_key}`)
      const response = await data.json();
      return response;
    }
    catch (e) {
      console.log(e, 'Something wrong happend');
      return e
    }
  }
  useEffect(() => {
    itemReceipe(f).then((resp) => {
      setFoodData(resp.hits[0].recipe);
    })
  }, [])
  return (
    <>
      {
        < DetailedReceipe finalDataTransfer={foodData} />
      }
    </>
  )
}