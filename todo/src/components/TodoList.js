import React from 'react';
import Todo from './Todo.js';

const TodoList = props => {
    console.log(props.state[0]) // this is the to do item
    console.log(props.toggleItem) // the toggleItem function
    console.log(props.completed) // returns the true or false boolean for completed or not
    return (
        <div>
            {props.state.map(item => (
                <Todo item={item.item} toggleItem={props.toggleItem} completed={item.completed} id={item.id}/>
            ))}
        </div>
    )

}

export default TodoList;