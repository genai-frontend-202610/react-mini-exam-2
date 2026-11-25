import React from 'react'
import './TodoItem.css'
const TodoItem = ({id, isDone, content,date}) => {
  return (
    <div className='TodoItem'>
        <input type="checkbox" checked={isDone} />
        <div className="content">{content}</div>
        <div className="date">{new Date(date).toLocaleDateString()}</div>
        <div className="btn-wrap">

        <button className="updateBtn">수정</button>
        <button className="deleteBtn">삭제</button>
        </div>

    </div>
  )
}

export default TodoItem