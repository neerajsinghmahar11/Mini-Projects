import React, { useEffect, useState } from 'react'
import classes from "./AvailableMeals.module.css";
import Card from '../UI/Card/Card';
import MealItem from './MealItem/MealItem';



const AvailableMeals = () => {
  const [meals,setMeals]=useState();

useEffect(()=>{

  const getData=async()=>{
    let mealsData=[];    
    const res=await fetch(`https://food-ordering-a6827-default-rtdb.firebaseio.com/meals.json`)
    const data=await res.json();
    
    for(let key in data){
      mealsData.push({
        id:key,
        name:data[key].name,
        description:data[key].description,
        price:data[key].price
      })
    }
    setMeals(mealsData);
  }
  getData()
},[])

    const mealsList= meals.map((meal)=> (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />))
  return (
    <section className={classes.meals}>
        <Card>
        <ul>{mealsList}</ul>
        </Card>
    </section>
  )
}

export default AvailableMeals