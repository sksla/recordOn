import React, { useState } from 'react';
import { TodoType } from '../../../types/todo';
import BirthModal from '../../../modals/BirthModal'; // 모달 경로 맞게 조정 필요

type CurrentDateProps = {
  todos: TodoType[];
  selectedDate: string;
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
};

const CurrentDate= ({ todos, selectedDate, setSelectedDate } : CurrentDateProps) => {
  const [showBirthModal, setShowBirthModal] = useState(false);
  const handleShowBirthModal = () => {
    setShowBirthModal(!showBirthModal);
  };

  const today = new Date(selectedDate);
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

  const changeDate = (offset: number) => {
    const currentDate = new Date(selectedDate);
    currentDate.setDate(currentDate.getDate() + offset);
    setSelectedDate(currentDate.toISOString().split('T')[0]);
  };

  return (
    <>
      <div className="date-header">
      <h2 className="curdate">{formatDate}</h2>

      <div className="date-controls">
        <button className="btn-changedate" onClick={() => changeDate(-1)}>{'<'}</button>

        <button
          type="button"
          onClick={handleShowBirthModal}
          data-bs-toggle="modal"
          data-bs-target="#dateOfBirthModal"
        >
          <img src="/assets/svg/calendar-blue.svg" alt="calendar icon" />
        </button>

        <button className="btn-changedate" onClick={() => changeDate(1)}>{'>'}</button>
      </div>
    </div>

      <p className="taskCount">{taskCount} tasks</p>

      {/* 달력 모달 삽입 */}
      <BirthModal
        showBirthModal={showBirthModal}
        handleShowBirthModal={handleShowBirthModal}
        selectedDate={selectedDate}  // 현재 선택된 날짜 전달
        setSelectedDate={setSelectedDate}  // 모달에서 날짜 바꾸면 부모 상태 변경
      />
    </>
  );
};

export default CurrentDate;
