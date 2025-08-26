// CurrentDate.tsx
import React from 'react';
import { TodoType } from '../../../types/todo'; // 실제 위치에 맞게 import

type CurrentDateProps = {
  todos: TodoType[];
};

const CurrentDate: React.FC<CurrentDateProps> = ({ todos }) => {
  const today = new Date();
  const month = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const week = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday'
  ];
  const curMonth = month[today.getMonth()];
  const dayWeek = week[today.getDay()];
  const formatDate = `${dayWeek}, ${today.getDate()} ${curMonth}`;

  const taskCount = todos.length;

  return (
    <div>
      <h2 className='curdate'>{formatDate}</h2>
      <p className='taskCount'>{taskCount} tasks</p>
    </div>
  );
};

export default CurrentDate;