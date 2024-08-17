import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import Todoitems from './Todoitems'

const Todo = () => {
    const[todoList,setTodoList]=useState([]);

    const inputRef=useRef();

    const add=()=>{
        const inputText=inputRef.current.value.trim();
      
        if(inputText === ""){
            return null;
        }
       

        const newTodo={
            id: Date.now(),
            text: inputText,
            isComplete: false,

        }

        setTodoList((prev)=>[...prev,newTodo]);
        inputRef.current.value = "";
    }

    const deleteTodo=(id)=>{
        setTodoList((prevTodos)=>{
          return  prevTodos.filter((todo)=>todo.id !== id)
        })

    }
    const toggle=(id)=>{
        setTodoList((prevTodos)=>{
            return prevTodos.map((todo,index)=>{
                if(todo.id==id){
                    return {...todo,isComplete: !todo.isComplete}
                }
                return todo;
            })
        })
    }

    useEffect(()=>{
          console.log(todoList);
    },[todoList])
  return (
    <div className='bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-opacity-20 place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
        {/* title */}
        <div className='flex items-center mt-7 gap-2'>
            <img className='w-8' src={todo_icon} alt="" />
            <h1 className='text-3xl font-semibold'>TO-DO List</h1>
        </div>

        {/* input box */}
        <div className='flex items-center my-7 bg-gray-200 rounded-full'>
            <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add new Task' />
            <button onClick={add} className='transition ease-in-out duration-300 bg-orange-600 hover:bg-orange-700 border-none rounded-full w-32 h-14 text-white text-lg font-medium cursor-pointer'>Add+</button>
        </div>

        {/* todo list */}
        
        <div>
        {
            todoList.map((item,index)=>{
                 return <Todoitems key={index}  text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle}></Todoitems>
            }) 
        }  
            
        </div>
    </div>
  )
}

export default Todo;