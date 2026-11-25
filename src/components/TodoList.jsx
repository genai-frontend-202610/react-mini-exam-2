import React from 'react'
import TodoItem from './TodoItem'
import './TodoList.css'

const TodoList = ({todos}) => {
    return (
        <div className='TodoList'>
            <h4>Todo List </h4>
            <input type="text" placeholder='검색어를 입력하세요' />
            <div className="todos-wrapper">
                {todos.map((todo)=>(
                    <TodoItem key={todo.id} {...todo} />
                ))}
            </div>
        </div>
    )
}

export default TodoList