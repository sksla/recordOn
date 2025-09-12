//import { useEffect } from "react";
import { useState, FormEvent } from "react";
import HeaderOne from "../../../layouts/headers/HeaderOne";
import Footer from "../../../layouts/footers/Footer";

// FullCalendar
import FullCalendar from "@fullcalendar/react";
import { DateClickArg } from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import allLocales from "@fullcalendar/core/locales-all";
//import koLocale from "@fullcalendar/core/locales/ko";

// calendar CSS
import "@/assets/css/calendar.css";

interface CalendarEvent {
  title: string;
  start: string;
  end: string;
  color: string;
  description: string;
}

export default function Calendar() {
  /*
    useEffect(() => {
        // Calendar 페이지 진입 시에만 CSS import
        import('bootstrap/dist/css/bootstrap.min.css');
        import("bootswatch/dist/sketchy/bootstrap.min.css");
    }, []);
    */

  // 일정 상태(State) 관리
  const [events, setEvents] = useState<CalendarEvent[]>([]); // 전체 일정 목록
  const [selectedDate, setSelectedDate] = useState<string | null>(null); // 선택한 날짜 저장(YYYY-MM-DD)
  const [showListModal, setShowListModal] = useState(false); // 일정 목록 표시 여부
  const [showAddModal, setShowAddModal] = useState(false); // 일정 추가 표시 여부

  // 일정 등록 임시 데이터
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
    color: "#FFCCEA",
    description: "",
  });

  // 일정 색상
  const colorOptions = [
    { name: "pink", value: "#FFCCEA" },
    { name: "yellow", value: "#FFF6E3" },
    { name: "purple", value: "#CDC1FF" },
    { name: "blue", value: "#BFECFF" },
  ];

  // 풀캘린더 플러그인 목록
  const plugins = [
    dayGridPlugin,
    timeGridPlugin,
    interactionPlugin,
    bootstrap5Plugin,
  ];

  // ===================== 이벤트 핸들러 함수 ==============================

  // 캘린더 날짜 클릭시 실행
  const handleDateClick = (arg: DateClickArg) => {
    // 매개변수 arg에 FullCalendar의 DateClickArg 타입 명시
    setSelectedDate(arg.dateStr); // -> 클린된 날짜 상태에 저장
    setShowListModal(true); // 일정 목록 모달
  };

  // 일정 추가 클릭시 실행
  const handleAddClick = () => {
    // 새로운 일정 데이터의 시작일과 종료일을 클릭한 날짜로 초기화
    setNewEvent({
      title: "",
      start: selectedDate!, // ! => (non-null assertion oprator)로 null 이 아님을 보증
      end: selectedDate!,
      color: "#FFCCEA",
      description: "",
    });
    // 일정 추가 모달 띄우기
    setShowAddModal(true);
  };

  // 일정 등록 폼 제출 시 실행
  // 매개변수 e에 React.FormEvent<HTMLFormElement> 타입 명시
  const handleAddEvent = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 페이지 새로고침 방지
    setEvents([...events, newEvent]); // 현재 일정 목록에 새로운 일정 추가
    // 두 모달 닫기
    setShowAddModal(false);
    setShowListModal(false);
  };

  return (
    <>
      <main>
        <HeaderOne />

        <div className="container my-3 main-calendar-wrapper calendar-page">
          <FullCalendar
            plugins={plugins}
            initialView="dayGridMonth"
            themeSystem="bootstrap5"
            locales={allLocales}
            locale="ko"
            headerToolbar={{
              left: "today",
              center: "prev title next",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            buttonText={{
              month: "월",
              week: "주",
              day: "일",
              prev: "<",
              next: ">",
              today: "오늘",
            }}
            editable={true}
            selectable={true}
            events={events}
            dateClick={handleDateClick} // 날짜 클릭 이벤트에 핸들러 함수 연결
            eventStartEditable={true}
            eventDurationEditable={true}
            height="auto"
            contentHeight="auto"
            firstDay={0}
            dayCellContent={(arg) => arg.date.getDate()} // 날짜 셀에 숫자만 표시
            dayCellClassNames={(arg) => {
              // 요일에 따라 CSS 클래스 추가
              const day = arg.date.getDay();
              if (day === 0) return ["fc-sunday"]; // 일요일
              if (day === 6) return ["fc-saturday"]; // 토요일
              return "";
            }}
          />
        </div>

        {/*==========================  이벤트 모달  ===================================*/}

        {/*==== * 일정 목록 모달 (상태가 true일 때만 표시) =====*/}
        {showListModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title">{selectedDate}</h3>
                <button
                  onClick={() => setShowListModal(false)}
                  className="modal-close-btn"
                >
                  &times;
                </button>
              </div>
              <div className="bodal-body">
                {events.filter((ev) => ev.start === selectedDate).length ===
                0 ? (
                  <p className="no-event-message">등록된 일정이 없습니다.</p>
                ) : (
                  <ul className="event-list">
                    {events
                      // 선택된 날짜의 일정 필터링
                      .filter((ev) => ev.start === selectedDate)
                      // 필터링된 일정(ev) 목록 생성
                      .map((ev, i) => (
                        <li key={i} style={{ borderLeftColor: ev.color }}>
                          <strong>{ev.title}</strong>
                          <span>
                            ({ev.start} ~ {ev.end})
                          </span>
                          <p>{ev.description}</p>
                        </li>
                      ))}
                  </ul>
                )}
              </div>

              <button
                onClick={() => {
                  setShowListModal(false); // 현재 모달 닫기     *** 후에 수정할 것 : 닫지 말고 추가되면 새로 업로드 되도록
                  handleAddClick(); // 일정 추가 모달
                }}
                className="modal-add-btn"
              >
                +
              </button>
            </div>
          </div>
        )}

        {/* ======== * 일정 추가 모달(showAddModal 상태가 true일 때만) ======= */}
        {showAddModal && (
          <div className="modal-overlay">
            <div className="modal-contnet">
              <form onSubmit={handleAddEvent}>
                <div className="modal-header">
                  <h3 className="modal-title">새 일정 추가</h3>
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="modal-close-btn"
                  >
                    &times;
                  </button>
                </div>

                <div className="modal-body"></div>
              </form>
            </div>
          </div>
        )}

        {/*
        {showAddModal && (
          <div
            className={`modal fade serviceModal bottomModal modalBg ${
              showAddModal ? "show" : ""
            }`}
            style={{ display: showAddModal ? "block" : "none" }}
            id="serviceModal"
            tabIndex={-1}
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    onClick={() => setShowAddModal(false)}
                    type="button"
                    className="modal-close rounded-full"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <img src="/assets/svg/close-black.svg" alt="Close" />
                  </button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleAddEvent}>
                    <div className="form-group">
                      <label>제목</label>
                      <input
                        type="text"
                        value={newEvent.title}
                        onChange={(e) =>
                          setNewEvent({ ...newEvent, title: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>시작일</label>
                      <input
                        type="date"
                        value={newEvent.start}
                        onChange={(e) =>
                          setNewEvent({ ...newEvent, start: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>종료일</label>
                      <input
                        type="date"
                        value={newEvent.end}
                        onChange={(e) =>
                          setNewEvent({ ...newEvent, end: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>색상 선택</label>
                      <div className="color-options">
                        {colorOptions.map((c) => (
                          <div
                            key={c.value}
                            className={`color-box ${
                              newEvent.color === c.value ? "selected" : ""
                            }`}
                            style={{ backgroundColor: c.value }}
                            onClick={() =>
                              setNewEvent({ ...newEvent, color: c.value })
                            }
                            title={c.name}
                          >
                            &nbsp;
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="form-group">
                      <label>상세내용</label>
                      <textarea
                        value={newEvent.description}
                        onChange={(e) =>
                          setNewEvent({
                            ...newEvent,
                            description: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="modal-actions">
                      <button type="submit">등록</button>
                      <button
                        type="button"
                        onClick={() => setShowAddModal(false)}
                      >
                        취소
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
        */}
        {/*오류 구문 찾기*/}
      </main>
      <Footer />
    </>
  );
}
