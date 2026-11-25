import React from 'react'
import './TodoItem.css'
const TodoItem = () => {
  return (
    <div className='TodoItem isDone'>
        <input type="checkbox" />
        <div className="content">Todo...</div>
        <div className="date">Date</div>
        <div className="btn-wrap">

        <button className="updateBtn">수정</button>
        <button className="deleteBtn">삭제</button>
        </div>

    </div>
  )
}

export default TodoItem