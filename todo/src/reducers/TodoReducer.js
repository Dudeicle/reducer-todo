  export const initialStateValues = [
    {
      item: 'learn about reducers',
      completed: false,
      id: 32312321321
    },
    {
      item: 'learn MORE QUICKLY',
      completed: false,
      id: 32312321322
    }
  ];

  export const reducer = (state, action) => {
    switch (action.type) {

      case "ADD_TODO":
        return [
          ...state,
          action.payload
        ];
      case "TOGGLE_COMPLETED":
        return state.map(item => {
          if (item.id === action.payload) {
            return {
              ...item,
              completed: !item.completed
            };
          } else {
            return item;
          }
        })
      default:
        return state;
    }
  };
