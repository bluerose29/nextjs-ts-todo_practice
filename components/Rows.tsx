import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import CircleCheckedFilled from "@mui/icons-material/CheckCircle";
import CircleUnchecked from "@mui/icons-material/CircleOutlined";

type Todo = {
  id: string;
  title: string;
  isCompleted: boolean;
};

type TodoProps = {
  todo: Todo;
  handleDeleteTodo: (id: string) => void;
  handleCheckTodo: (id: string) => void;
};

export const Row = ({
  todo: { title, isCompleted, id },
  handleDeleteTodo,
  handleCheckTodo,
}: TodoProps) => (
  <div className="task-items">
    <div className="checkbox-container">
      <Checkbox
        checked={isCompleted}
        onChange={() => handleCheckTodo(id)}
        className="checkBox"
        icon={<CircleUnchecked />}
        checkedIcon={<CircleCheckedFilled />}
      />
      <label>{title}</label>
    </div>
    <DeleteIcon onClick={() => handleDeleteTodo(id)} className="deleteButton" />
  </div>
);
