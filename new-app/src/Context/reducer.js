export const initialState = {
  taskList: [],
  isAuthenticated: false,
};
export const stateReducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "login": {
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    }
    case "newTask": {
      return {
        ...state,
        taskList: [...state.taskList, action.payload],
      };
    }
    case "changeCompletion": {
      return {
        ...state,
        taskList: action.payload,
      };
    }
    case "removeTask": {
      return {
        ...state,
        taskList: action.payload,
      };
    }
    default:
      return state;
  }
};
