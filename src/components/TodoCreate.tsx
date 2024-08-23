import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../redux/todoSlice'
import { TodoType } from '../types/types'

function TodoCreate() {
  
  const dispatch =useDispatch()
  const[newTodo, setnewTodo] =useState<string>("")

  const handleCreateTodo = ()=>{
      if(newTodo?.trim().length==0)
      {
        alert("Todo giriniz!")
        return
      }
      const payload: TodoType={
        id :Math.floor(Math.random()*999999),
        content: newTodo
      }
      dispatch(createTodo(payload))
      setnewTodo("")
  }

  return (
    <div className='todo-create'>
        <input value={newTodo} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setnewTodo(e.target.value)} className='todo-input' type="text" placeholder='To Do Giriniz' />
        <button onClick={handleCreateTodo} className='todocreate-button'>Ekle</button>
    </div>
  )
}

export default TodoCreate