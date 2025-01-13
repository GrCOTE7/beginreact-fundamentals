import React from 'react';
import { useState } from 'react';
import { Plus } from 'lucide-react';

export default function App() {
  // Quand le parent re-render, les enfants re-render aussi !
  const [todos, setTodos] = useState([
    { todo: 'Faire les courses', id: Date.now(), completed: false },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(e);

    const formData = new FormData(e.currentTarget);
    const todo = formData.get('todo');

    const newTodo = {
      todo: todo,
      id: Date.now(),
      completed: false,
    };

    // Immuable → On ne peut pas les muter
    // Mais on peut remplacer l'état actuel
    setTodos([...todos, newTodo]);

    e.currentTarget.reset();
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleUpdate = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label className="input input-bordered flex items-center gap-2">
          <input
            name="todo"
            type="text"
            className="grow"
            placeholder="Add todo..."
          />
          <button type="submit" className="btn btn-outline btn-sm">
            <Plus size={16} />
          </button>
        </label>
      </form>
      <div className="flex flex-col gap-4 mt-8">
        {todos.map((todo) => (
          <Todo
            onToggleCompleted={() => handleUpdate(todo.id)}
            todo={todo}
            key={todo.id}
            onDelete={() => handleDelete(todo.id)}
          />
        ))}
      </div>
    </div>
  );
}

const Todo = (props) => {
  // console.log(props);
  return (
    <div className="flex items-center gap-4">
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => {
          props.onToggleCompleted?.();
        }}
      />
      <p>{props.todo.todo}</p>
      <button
        id="test_id"
        className="btn btn-error btn-sm"
        onClick={() => {
          props.onDelete?.();
        }}
      >
        Delete
      </button>
    </div>
  );
};
