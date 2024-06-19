import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, updateTodo, deleteTodo, filter }) {
  return (
    <div className="todo-list">
      {todos
        .filter(todo => filter === 'All' || todo.status === filter)
        .map((todo) => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            updateTodo={updateTodo} 
            deleteTodo={deleteTodo} 
          />
      ))}
    </div>
  );
}

export default TodoList;
