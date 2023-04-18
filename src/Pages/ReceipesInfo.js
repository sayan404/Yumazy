import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DetailedReceipe } from '../Components/DetailedReceipe';
import { Preloader } from '../Components/Preloader';


const app_id = "1c7d774b";
const app_key = "85764feddf14401f49a1cc95c7ff7ebe";

export const ReceipesInfo = () => {
  const [loading, setLoading] = useState(true);
  const [foodData, setFoodData] = useState([]);
  const { foodReceipe } = useParams();
  const f = foodReceipe;
  const itemReceipe = async (f) => {
    try {
      const data = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${f}&app_id=${app_id}&app_key=${app_key}`)
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
    itemReceipe(f).then((resp) => {
      setFoodData(resp.hits[0].recipe);
    })
  }, [f])
  return (
    <>
      {
        (loading) ? <Preloader /> : 
        <DetailedReceipe finalDataTransfer={foodData} />
      }
    </>
  )
}