import API from "../../api";

export const onDescriptionChange = (event) => ({
  type: "TODO_DESCRIPTION_CHANGED",
  payload: event.target.value,
});

export const onSearchChange = (event) => ({
  type: "TODO_SEARCH_CHANGED",
  payload: event.target.value,
});

export const onSearchClear = () => {
  return (dispatch) => {
    dispatch({ type: "TODO_SEARCH_CLEAR" });
    dispatch(onSearch());
  };
};

export const onSearch = () => {
  return async (dispatch, getState) => {
    const search = getState().todo.search;

    const searchTerm = search ? `&description__regex=/${search}/` : "";
    const response = await API.get(`/todos?sort=-createdAt${searchTerm}`);

    const todos = response.data.map((todo) => {
      return {
        id: todo._id,
        description: todo.description,
        done: todo.done,
        createdAt: todo.createdAt,
      };
    });

    dispatch({ type: "TODO_FILL_DATA", payload: todos });
  };
};

export const onAdd = () => {
  return async (dispatch, getState) => {
    const description = getState().todo.description;
    await API.post("/todos", { description });

    dispatch({ type: "TODO_ADD" });
    dispatch(onSearch());
  };
};

export const onMarkAsDone = (id) => {
  return async (dispatch) => {
    const todo = await API.get(`/todos/${id}`);
    await API.put(`/todos/${id}`, { ...todo, done: true });

    dispatch({ type: "TODO_MARK_AS_DONE", payload: id });
    dispatch(onSearch());
  };
};

export const onMarkAsPending = (id) => {
  return async (dispatch) => {
    const todo = await API.get(`/todos/${id}`);
    await API.put(`/todos/${id}`, { ...todo, done: false });

    dispatch({ type: "TODO_MARK_AS_PENDING", payload: id });
    dispatch(onSearch());
  };
};

export const onRemove = (id) => {
  return async (dispatch) => {
    await API.delete(`/todos/${id}`);

    dispatch({ type: "TODO_REMOVE", payload: id });
    dispatch(onSearch());
  };
};
