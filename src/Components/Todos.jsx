import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../Features/todoSlice";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Todos = () => {
  const todos = useSelector((state) => state.todos.todos || []);
  const dispatch = useDispatch();
  console.log(todos);
  return (
    <div className="d-flex flex-column align-items-center">
      {todos.map((todo) => (
        <ul
          className="list-group list-group-horizontal-xxl d-flex justify-content-center mt-4 w-50"
          key={todo.id}
        >
          <li className="list-group-item"> {todo.text}</li>
          <button
            className="btn btn-danger"
            onClick={() => dispatch(removeTodo(todo.id))}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </ul>
      ))}
    </div>
  );
};

export default Todos;
