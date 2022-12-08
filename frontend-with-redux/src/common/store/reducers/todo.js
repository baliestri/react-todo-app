import INITIAL_STATE from "../states/todo";

export default (state = INITIAL_STATE, action) => {
  const actions = {
    TODO_DESCRIPTION_CHANGED: { ...state, description: action.payload },
    TODO_SEARCH_CHANGED: { ...state, search: action.payload },
    TODO_SEARCH_CLEAR: { ...state, search: "" },
    TODO_ADD: { ...state, description: "" },
    TODO_FILL_DATA: { ...state, data: action.payload },
    TODO_MARK_AS_DONE: {
      ...state,
      data: state.data.map((todo) =>
        todo.id === action.payload ? { ...todo, done: true } : todo
      ),
    },
    TODO_MARK_AS_PENDING: {
      ...state,
      data: state.data.map((todo) =>
        todo.id === action.payload ? { ...todo, done: false } : todo
      ),
    },
    TODO_REMOVE: {
      ...state,
      data: state.data.filter((todo) => todo.id !== action.payload),
    },
  };

  const handler = actions[action.type];

  return handler || state;
};
