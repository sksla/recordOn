import React from 'react';
import TodoItem from './TodoItem';
import { TodoType } from '../../../types/todo';

type TodoListProps = {
  todos: TodoType[]; // 필터링된 todos
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
};

const TodoList = ({ todos, onRemove, onToggle }: TodoListProps) => {
  // 'working'은 아직 완료되지 않은 할 일
  const working = todos.filter((todo) => !todo.isDone);
  // 'done'은 완료된 할 일
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
