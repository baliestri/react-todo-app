import Header from "../components/layout/header";
import TodoDataGrid from "../components/todo/datagrid";
import TodoForm from "../components/todo/form";

const Todos = () => {
  return (
    <>
      <Header title="Tarefas" subtitle="Criar" />
      <TodoForm />

      <Header title="Tarefas" subtitle="Listar" />
      <TodoDataGrid />
    </>
  );
};

export default Todos;
