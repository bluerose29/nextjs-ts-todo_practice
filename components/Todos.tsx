import * as React from "react";
import { Row } from "./Rows";
import { data } from "../data/todos";
import { AddTodo } from "./AddTodo";
import { v4 as uuidv4 } from "uuid";

type Todo = {
  id: string;
  title: string;
  isCompleted: boolean;
};

export const Todos = () => {
  const [todos, setTodos] = React.useState<Todo[]>(data);
  const [title, setTitle] = React.useState("");
  const todosLength = todos.length;
  const hasTodos = todos.length > 0;
  const remainingTodos = todos.filter((todo) => !todo.isCompleted).length;

  const handleAddTodo = (todo: Todo) => {
    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
    setTitle("");
  };

  const handleChange = (e: React.ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setTitle(value);
  };

  const handleSubmitTodo = (e: React.FormEvent) => {
    e.preventDefault();

    const todo = {
      id: uuidv4(),
      title: title,
      isCompleted: false,
    };
    title && handleAddTodo(todo);
  };

  const handleDeleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleCheckTodo = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <section>
      <div className="task-view">
        {!hasTodos && <p>Please add a todo!</p>}
        {hasTodos && <p>{`${remainingTodos} Unfinished Task/s`}</p>}

        {todos.map((todo) => (
          <Row
            key={todo.id}
            todo={todo}
            handleDeleteTodo={handleDeleteTodo}
            handleCheckTodo={handleCheckTodo}
          />
        ))}
      </div>
      <AddTodo
        title={title}
        handleChange={handleChange}
        handleSubmitTodo={handleSubmitTodo}
      />
    </section>
  );
};
