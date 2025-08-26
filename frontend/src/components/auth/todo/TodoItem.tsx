import React from 'react';
import { TodoType } from '../../../types/todo';

type TodoItemProps = {
  todo: TodoType;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, onRemove, onToggle }) => {
  const { id, title, body, isDone } = todo;

  return (
    <div className="todo-item">
      <div className="todo-left">
        <input
          type="checkbox"
          checked={isDone}
          onChange={() => onToggle(id)}
        />
        <div className="todo-texts">
          <h3 className={isDone ? 'done' : ''}>{title}</h3>
          {body && <p className={isDone ? 'done' : ''}>{body}</p>}
        </div>
      </div>
      <button className="delete-btn" onClick={() => onRemove(id)}>
        🗑️
      </button>
    </div>
  );
};

export default TodoItem;
