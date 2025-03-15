import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const TodoForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    addTask(task);
    setTask(""); 
  };

  return (
    <Form onSubmit={handleSubmit} className="d-flex gap-2 mb-3">
      <Form.Control
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
};

export default TodoForm;
