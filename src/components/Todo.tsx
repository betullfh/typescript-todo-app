import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { TodoType } from '../types/types';
import { useDispatch } from 'react-redux';
import { removetodo, updateTodo } from '../redux/todoSlice';

interface TodoProps {
  todoProps: TodoType
}


function Todo({todoProps} :TodoProps) {

  const {id, content}=todoProps
  const  [editable, seteditable]=useState<boolean>(false)

  const [newtodo, setnewtodo]=useState<string>(content)

  const dispatch=useDispatch()
  
  const handleRemoveTodo=()=>{
    dispatch(removetodo(id))
  }

  const handleUpdateTodo =()=>{
    const payload:TodoType={
      id:id,
      content:newtodo
    }
    dispatch(updateTodo(payload))
    seteditable(false)
  }

  return (
    <div className='todo-div'>
        <div>
          {editable ? <input className='update-input' value={newtodo} type='text' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setnewtodo(e.target.value)}/>: content}
        </div>
        <div className='todo-icons'>
            <MdDelete onClick={handleRemoveTodo} style={{color:"red", marginRight:"3px"}} />
            {editable ? <FaCheckCircle onClick={handleUpdateTodo} style={{color:"orange"}}/> : <FaEdit onClick={()=>seteditable(!editable)} style={{color:"blue"}} />}
            
        </div>
    </div>
  )
}

export default Todo