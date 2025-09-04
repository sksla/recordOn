import React, { useState, useRef, useEffect } from 'react';

type TodoAddProps = {
  onInsert: (title: string, date: string) => void; // 날짜와 제목을 함께 전달
  selectedDate: string; // 선택된 날짜를 props로 받음
};

const TodoAdd = ({ onInsert, selectedDate }: TodoAddProps) => {
  const [contents, setContents] = useState('');
  const [open, setOpen] = useState(false);
  const inputEl = useRef<HTMLInputElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContents(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!contents.trim()) return;
    onInsert(contents, selectedDate); // 제목과 날짜를 함께 전달
    setContents('');
    setOpen(false); // 등록 후 닫기
  };

  const onToggle = () => {
    setOpen(prev => !prev);
  };

  useEffect(() => {
    if (open && inputEl.current) {
      inputEl.current.focus();
    }
  }, [open]);

  return (
    <>
      {open && (
        <div className="modalOverlay" onClick={() => setOpen(false)}>
          <div className="insertPosition" onClick={(e) => e.stopPropagation()}>
            <form className="insertForm" onSubmit={onSubmit}>
              <p className="modalTitle">Today</p>
              <input
                type="text"
                ref={inputEl}
                value={contents}
                placeholder="할 일을 입력하고 Enter를 눌러주세요."
                onChange={onChange}
              />
            </form>
          </div>
        </div>
      )}

      <div className="add-btn-wrapper">
        <button className="add-btn" onClick={onToggle}>
          <span className="plus-text">+</span>
        </button>
      </div>
    </>
  );
};

export default TodoAdd;
