import React from 'react'

const ItemData = (props) => {
    console.log(props);
  return (
    <li>
        {props.name} ({props.age} years old)
    </li>
  )
}

export default ItemData