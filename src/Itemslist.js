import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const itemslist = ({items,handleCheck,delet}) => {
  return (
    <ul>
        
          
              {items.map((item)=>(
                  <li className='item' key={item.id}>
                      <input 
                      type="checkbox" 
                      onChange={()=>handleCheck(item.id)}
                      checked={item.checked}
                        />
                      <label onDoubleClick={()=>handleCheck(item.id)} style={(item.checked)?{textDecoration:"line-through"}:null}>
                        {item.item}</label>
                      <FaTrashAlt  role='buttom' tabIndex="0" onClick={()=>delet(item.id)}/>
                  </li>
        ))}
    </ul>

        )
}

export default itemslist