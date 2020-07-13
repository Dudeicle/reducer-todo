  export const initialStateValues = [
    {
      item: 'learn about reducers',
      completed: false,
      id: 32312321321
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
        return {
          ...state,
          completed: true
        };
      default:
        return state;
    }
  };
