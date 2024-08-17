import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon  from '../assets/delete1.png'

const Todoitems = ({text,id,isComplete,deleteTodo,toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img src={isComplete? tick : not_tick} alt="" className='w-7' />
            <p className={`text-white ml-4 text-[21px] decoration-slate-100 ${isComplete ? "line-through" : ""}`}>{text}</p>
        </div>
        <img onClick={()=>{deleteTodo(id)}} src={delete_icon} alt="" className='w-6 cursor-pointer'/>
        
    </div>
  )
}

export default Todoitems;