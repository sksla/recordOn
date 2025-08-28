import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type BirthModalProps = {
  showBirthModal: boolean;
  handleShowBirthModal: () => void;
  selectedDate: string;
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
};

const BirthModal: React.FC<BirthModalProps> = ({
  showBirthModal,
  handleShowBirthModal,
  selectedDate,
  setSelectedDate,
}) => {
  // selectedDate 문자열을 Date 객체로 변환 (기본값 현재 날짜)
  const selectedDateObj = selectedDate ? new Date(selectedDate) : new Date();

  // 캘린더 날짜 선택 시 호출
  const onChange = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const localDateString = `${year}-${month}-${day}`;
    setSelectedDate(localDateString);
  };

  return (
    <div
      className={`modal fade dateOfBirthModal dateModal modalBg ${
        showBirthModal ? "show" : ""
      }`}
      style={{ display: showBirthModal ? "block" : "none" }}
      id="dateOfBirthModal"
      tabIndex={-1}
      aria-labelledby="dateOfBirthModalLabel"
      aria-hidden={!showBirthModal}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="text-center">
              <Calendar onChange={onChange} value={selectedDateObj} />
            </div>
            <div className="btns d-flex align-items-center gap-16">
              <button
                onClick={handleShowBirthModal}
                type="button"
                className="radius-20 w-50 cancel-btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Cancel
              </button>
              <button
                onClick={handleShowBirthModal}
                type="button"
                className="radius-20 w-50 apply-btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthModal;
