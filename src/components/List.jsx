import React from 'react'
import "./List.css"

//library
import { FaTrash } from 'react-icons/fa6'

function List({ people, handleDelete }) {

   return (
      <ul>
         {people && people.map(person => {
            const { id, name, age, image } = person
            return (
               <li key={id}>
                  <img src={image} alt={name} width={50} height={50} />
                  <div>
                     <h3>{name}</h3>
                     <p>{age} years</p>
                  </div>
                  <FaTrash onClick={() => handleDelete(id)} />
               </li>
            )
         })}
      </ul>
   )
}

export default List