import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [taskName, setTaskName] = useState('');
  const [taskDesc, setTaskDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName && taskDesc) {
      addTodo({
        name: taskName,
        description: taskDesc,
        status: 'Not Completed',
      });
      setTaskName('');
      setTaskDesc('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={taskName} 
        onChange={(e) => setTaskName(e.target.value)} 
        placeholder="Task Name" 
        required 
      />
      <textarea 
        value={taskDesc} 
        onChange={(e) => setTaskDesc(e.target.value)} 
        placeholder="Task Description" 
        required 
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TodoForm;
