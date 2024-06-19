import React, { useState } from 'react';

function TodoItem({ todo, updateTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(todo.name);
  const [editDesc, setEditDesc] = useState(todo.description);

  const handleUpdate = () => {
    updateTodo({
      ...todo,
      name: editName,
      description: editDesc,
    });
    setIsEditing(false);
  };

  return (
    <div className="todo-card">
      {isEditing ? (
        <>
          <input 
            type="text" 
            value={editName} 
            onChange={(e) => setEditName(e.target.value)} 
          />
          <textarea 
            value={editDesc} 
            onChange={(e) => setEditDesc(e.target.value)} 
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <h3>{todo.name}</h3>
          <p>{todo.description}</p>
          <div className="status-dropdown">
            <select 
              value={todo.status} 
              onChange={(e) => updateTodo({
                ...todo,
                status: e.target.value
              })}
            >
              <option value="Not Completed">Not Completed</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default TodoItem;
