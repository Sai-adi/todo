import { ListGroup, Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

const TodoList = ({ tasks, deleteTask }) => {
  return (
    <ListGroup>
      {tasks.map((task, index) => (
        <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
          {task}
          <Button variant="danger" size="sm" onClick={() => deleteTask(index)}>
            <FaTrash />
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TodoList;
