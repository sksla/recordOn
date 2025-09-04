import React, { useState } from 'react';
import HeaderOne from "../../../layouts/headers/HeaderOne";
import TodoTemplate from './TodoTemplate';
import CurrentDate from './CurrentDate';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';
import Footer from "../../../layouts/footers/Footer";
import { TodoType } from '../../../types/todo';

const TodoMain = () => {
  const [todos, setTodos] = useState<TodoType[]>([
    {
      id: 1,
      title: '주 2회 클라이밍 가기',
      isDone: false,
      date: '2025-09-04',
    },
    {
      id: 2,
      title: '식단 관리하기',
      isDone: false,
      date: '2025-09-04',
    },
    {
      id: 3,
      title: '식단 관리하기',
      isDone: false,
      date: '2025-09-05',
    },
  ]);

  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split('T')[0] // 오늘 날짜
  );

  // 선택된 날짜에 맞는 투두 리스트 필터링
  const filteredTodos = todos.filter(todo => todo.date === selectedDate);

  const onInsert = (title: string, date: string) => {
    if (title.trim() === '') return;

    // 현재 todos에서 가장 큰 id + 1
    const nextId = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;

    const newTodo: TodoType = {
      id: nextId,
      title,
      isDone: false,
      date,
    };

    setTodos([...todos, newTodo]);
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
          <CurrentDate 
            todos={filteredTodos} 
            selectedDate={selectedDate} 
            setSelectedDate={setSelectedDate} 
          />
          <TodoList todos={filteredTodos} onRemove={onRemove} onToggle={onToggle} />
          <TodoAdd onInsert={onInsert} selectedDate={selectedDate} />
        </TodoTemplate>
      </main>
      <Footer />
    </>
  );
};

export default TodoMain;
