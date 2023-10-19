import React from 'react'
import "./CardStyle.css"


export const Card = (props) => {
  return (
    <div>
        <ul className='card'>
            
            <li>id:{props.id}</li>
            <li>name:{props.name}</li>
            <li>age:{props.age}</li>
        </ul>
    </div>
  )
}

export default Card


