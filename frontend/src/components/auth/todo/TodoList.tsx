import React from 'react';
import TodoItem from './TodoItem';
import { TodoType } from '../../../types/todo';

type TodoListProps = {
  todos: TodoType[];
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {
  const working = todos.filter((todo) => !todo.isDone);
  const done = todos.filter((todo) => todo.isDone);

  return (
    <div>
      <h4 className="doneTitle">🛠️ Working</h4>
      {working.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} />
      ))}
      <h4 className="doneTitle">✅ Done</h4>
      {done.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default TodoList;
