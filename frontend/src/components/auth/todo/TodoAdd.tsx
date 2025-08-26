import React, { useState, useRef, useEffect } from 'react';
import { HiOutlinePlus } from 'react-icons/hi';

type TodoAddProps = {
  onInsert: (contents: string) => void;
};

const TodoAdd: React.FC<TodoAddProps> = ({ onInsert }) => {
  const [contents, setContents] = useState('');
  const [open, setOpen] = useState(false);
  const inputEl = useRef<HTMLInputElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContents(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!contents.trim()) return;
    onInsert(contents);
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
        <div
          className="modalOverlay"
          onClick={() => setOpen(false)} // 바깥 클릭 시 닫기
        >
          <div
            className="insertPosition"
            onClick={(e) => e.stopPropagation()} // 모달 내부 클릭은 전파 막기
          >
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
