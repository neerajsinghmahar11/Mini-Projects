import React from 'react';
import Card from '../../UI/Card/Card';
import ItemData from '../ItemData/ItemData';
import classes from "./ItemList.module.css";
const ItemsList = ({Data}) => {
    
  return (
    <Card  className={classes.users}>
      <ul>
        {
          Data.map((el)=>{
            return <ItemData key={el.id} {...el}/>
          })
        }
      </ul>
    </Card>
  )
}

export default ItemsList