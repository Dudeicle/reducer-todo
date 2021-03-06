import React from 'react';
import './Todo.css';

const Todo = props => {
    return (
        <div
            onClick={() => props.toggleItem(props.id)}
            className={`item${props.completed ? "-completed" : ""}`}
        
        >
            <p>{props.item}</p>
        </div>
    )

}

export default Todo;