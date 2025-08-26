import React, { useState } from 'react';
import HeaderOne from "../../../layouts/headers/HeaderOne";
import TodoTemplate from './TodoTemplate';
import CurrentDate from './CurrentDate';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';
import Footer from "../../../layouts/footers/Footer";
import { TodoType } from '../../../types/todo';

const TodoMain: React.FC = () => {
  const [todos, setTodos] = useState<TodoType[]>([
    {
      id: Date.now(),
      title: '주 2회 클라이밍 가기',
      isDone: false,
    },
    {
      id: Date.now() + 1,
      title: '식단 관리하기',
      isDone: false,
    },
  ]);

  const [input, setInput] = useState({ title: '', body: '' });

  const onInsert = () => {
    if (input.title.trim() === '' || input.body.trim() === '') return;

    const newTodo: TodoType = {
      id: Date.now(),
      title: input.title,
      // body: input.body,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setInput({ title: '', body: '' });
  };

  const onRemove = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onToggle = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <>
      <main className="home">
        <HeaderOne />
        <TodoTemplate>
          <CurrentDate todos={todos} />
          <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
          <TodoAdd onInsert={onInsert} />
        </TodoTemplate>
      </main>
      <Footer />
    </>
  );
};

export default TodoMain;
