import React from 'react';
import Todo from './Todo.js';

const TodoList = props => {
    console.log(props)
    return (
        <div>
            {props.state.map(item => (
                <Todo item={item.item} />
            ))}
        </div>
    )

}

export default TodoList;