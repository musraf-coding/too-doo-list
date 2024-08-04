import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

const AddItem=({newitem,setNewItem,handleAdd})=> {
const inpuRef =useRef()

  return (
    <form className='addForm' onSubmit={handleAdd}>
        <label htmlFor='addItem'></label>
        <input ref={inpuRef}autoFocus id="addItem" type='text' placeholder='AddItem' required value={newitem}
        onChange = {(e) => setNewItem(e.target.value)}
        />
        
        <button type='submit' aria-label='AddItem'
        onClick={()=>inpuRef.current.focus()}
        >
             <FaPlus />
        </button>
       
    </form>
  )
}

export default AddItem