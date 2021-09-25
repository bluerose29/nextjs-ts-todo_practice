import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

type AddTodoProps = {
  title: string;
  handleSubmitTodo: (e: React.FormEvent) => void;
  handleChange: (e: React.ChangeEvent) => void;
};

export const AddTodo = ({
  title,
  handleChange,
  handleSubmitTodo,
}: AddTodoProps) => (
  <form onSubmit={handleSubmitTodo}>
    <input type="text" name="title" value={title} onChange={handleChange} />
    <Fab size="small" type="submit" className="fabAdd">
      <AddIcon />
    </Fab>
  </form>
);
