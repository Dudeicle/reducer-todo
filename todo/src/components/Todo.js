import React from 'react';
import './Todo.css';

const Todo = props => {
    console.log(props)
    console.log(props.item)
    console.log(props.id)
    console.log(props.completed)
    console.log(props.toggleItem)
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