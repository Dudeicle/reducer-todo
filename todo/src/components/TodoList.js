import React from 'react';
import Todo from './Todo.js';

const TodoList = props => {
    return (
        <div>
            {props.state.map(item => (
                <Todo item={item.item} toggleItem={props.toggleItem} completed={item.completed} id={item.id}/>
            ))}
        </div>
    )

}

export default TodoList;