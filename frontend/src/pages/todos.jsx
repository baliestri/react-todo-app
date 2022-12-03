import { useEffect, useState } from "react";

import API from "../common/api";
import Header from "../components/layout/header";
import TodoDataGrid from "../components/todo/datagrid";
import TodoForm from "../components/todo/form";

const Todos = () => {
  const [description, setDescription] = useState("");
  const [search, setSearch] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    refreshTodos();
  }, []);

  const refreshTodos = async (searchTerm = "") => {
    searchTerm = searchTerm ? `&description__regex=/${searchTerm}/` : "";

    const { data } = await API.get(`/todos?sort=createdAt${searchTerm}`);
    const todosMap = data.map((todo) => {
      return {
        id: todo._id,
        description: todo.description,
        done: {
          checked: todo.done,
          onMarkChange: async (done) => {
            await API.put(`/todos/${todo._id}`, { ...todo, done });

            await refreshTodos();
          },
        },
        createdAt: todo.createdAt,
        actions: {
          onRemoveClick: async () => {
            await API.delete(`/todos/${todo._id}`);

            await refreshTodos();
          },
        },
      };
    });

    setTodos(todosMap);
  };

  const onAddClick = async () => {
    await API.post("/todos", { description });

    setDescription("");
    await refreshTodos();
  };

  const onCleanClick = () => {
    setSearch("");
    refreshTodos();
  };

  const onSearchClick = async () => {
    await refreshTodos(search);
  };

  const onDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const onSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <Header title="Tarefas" subtitle="Criar" />
      <TodoForm
        description={description}
        onAddClick={onAddClick}
        onDescriptionChange={onDescriptionChange}
      />

      <Header title="Tarefas" subtitle="Listar" />
      <TodoDataGrid
        rows={todos}
        search={search}
        onSearchChange={onSearchChange}
        onSearchClick={onSearchClick}
        onCleanClick={onCleanClick}
      />
    </>
  );
};

export default Todos;
