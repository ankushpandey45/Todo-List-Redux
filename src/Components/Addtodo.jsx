import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo } from "../Features/todoSlice";
const Addtodo = () => {
  const [input, setInput] = useState("");
  const Dispatch = useDispatch();
  const addTask = () => {
    Dispatch(addTodo(input));
    setInput("");
  };
  return (
    <div>
      <div className="d-flex justify-content-center mt-4">
        <div className="input-group mb-4 w-50">
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Enter Your Task"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button type="button" className="btn btn-primary" onClick={addTask}>
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addtodo;
