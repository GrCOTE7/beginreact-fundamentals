import React from 'react';
import { useState } from 'react';
import { Plus } from 'lucide-react';

export default function App() {
  const [todos, setTodos] = useState({
    todo: 'Faire les courses',
    completed: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e);
    const formData = new FormData(e.currentTarget);
    const todo = formData.get('todo');

    const newTodo = {
      todo: todo,
      completed: false,
    };
    console.log(newTodo);
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
    </div>
  );
}
