import React, { useState, useReducer } from 'react';

import { initialStateValues, reducer } from './reducers/TodoReducer.js';
import TodoList from './components/TodoList.js';



const App = () => {

const [newTodoItem, setNewTodoItem] = useState("");
const [state, dispatch] = useReducer(reducer, initialStateValues);

console.log(state)

const addItem = taskItem => {
  const newItem = {
    item: taskItem,
    completed: false,
    id: new Date()
  };
  dispatch({ type: "ADD_TODO", payload: newItem })
};

const handleSubmit = e => {
  e.preventDefault();
  addItem(newTodoItem);
  setNewTodoItem("")
};

const handleChanges = e => {
  setNewTodoItem(e.target.value);
};

const toggleItem = itemId => {
  dispatch({ type: "TOGGLE_COMPLETED", payload: itemId });
};

const clearEntries = (foo) => {
  foo.preventDefault();
  dispatch({ type: "CLEAR_COMPLETED", payload: foo })
}


  return (
    <div>

      <form>
        <input 
          type="text"
          name="item"
          value={newTodoItem}
          onChange={handleChanges}
        />

        <button
          onClick={handleSubmit}
        >
          Submit To Do Item
        </button>
        <button
          onClick={clearEntries}
        >
          Clear Completed Items
        </button>
      </form>

      <div>
        <TodoList state={state} toggleItem={toggleItem} />
      </div>

    </div>
  )
}

export default App