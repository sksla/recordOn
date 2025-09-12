//import { useEffect } from "react";
import { useState } from "react";
import HeaderOne from "../../../layouts/headers/HeaderOne";
import Footer from "../../../layouts/footers/Footer";

// FullCalendar
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import koLocale from '@fullcalendar/core/locales/ko';

// calendar CSS
import '@/assets/css/calendar.css';

export default function Calendar(){
    
    /*
    useEffect(() => {
        // Calendar 페이지 진입 시에만 CSS import
        import('bootstrap/dist/css/bootstrap.min.css');
        import("bootswatch/dist/sketchy/bootstrap.min.css");
    }, []);
    */

    // 일정 상태(State) 관리 
    const [events, setEvents] = useState([]); // 전체 일정 목록
    const [selectedDate, setSelectedDate] = useState(null); // 선택한 날짜 저장(YYYY-MM-DD)
    const [showListModal, setShowListModal] = useState(false); // 일정 목록 표시 여부
    const [showAddModal, setShowAddModal] = useState(false); // 일정 추가 표시 여부
      

    // 일정 등록 임시 데이터
    const [newEvent, setNewEvent] = useState({
        title: "",
        start:"",
        end:"",
        color: "#ff4d4d",
        description: ""
    })
    

    // 일정 색상
    const colorOptions = [
        { name : "pink", value: "#FFCCEA"},
        { name : "yellow", value: "#FFF6E3"},
        { name : "purple", value: "#CDC1FF"},
        { name : "blue", value: "#BFECFF"}
    ];


    // 풀캘린더 플러그인 목록
    const plugins = [dayGridPlugin, timeGridPlugin, interactionPlugin, bootstrap5Plugin];


    // ===================== 이벤트 핸들러 함수 ==============================


    // 캘린더 날짜 클릭시 실행
    const handleDateClick = (arg) => {
        setSelectedDate(arg.dateStr); // -> 클린된 날짜 상태에 저장
        setShowListModal(true); // 일정 목록 모달
    };

    // 일정 추가 클릭시 실행
    const handleAddclick = () => {
        // 새로운 일정 데이터의 시작일과 종료일을 클릭한 날짜로 초기화
        setNewEvent({
            title: "",
            start: selectDate,
            end: selectDate,
            color: "#FFCCEA",
            description: "",
        });
        // 일정 추가 모달 띄우기
        setShowAddModal(true);
    };

    // 일정 등록 폼 제출 시 실행
    const handleAddEvent = (e) => {
        e.preventDefault(); // 페이지 새로고침 방지
        setEvents([...events, newEvent]); // 현재 일정 목록에 새로운 일정 추가
        // 두 모달 닫기
        setShowAddModal(false);
        setShowListModal(false);
    }

    return (
        <>
            <main>
                <HeaderOne />

                <div className="container my-3 main-calendar-wrapper calendar-page">
                    <FullCalendar
                        plugins={plugins}
                        initialView="sqdayGridMonth"
                        themeSystem="bootstrap5"
                        locale={koLocale}
                        headerToolbar={{
                            left:'today',  
                            center:'prev title next',
                            right:'dayGridMonth,timeGridWeek,timeGridDay' 
                        }}
                        buttonText={{
                            month:'월',
                            week:'주',
                            day:'일',
                            prev:'<',
                            next:'>',
                            today:'오늘'
                        }}
                        editable={true}
                        selectable={true}
                        events={events}
                        dateClick={handleDateclick} // 날짜 클릭 이벤트에 핸들러 함수 연결
                        eventStartEditable={true}
                        eventDurationEditable={true}
                        height="auto"
                        contentHeight="auto"
                        firstDay={0}
                        dayCellContent={arg => arg.date.getDate()} // 날짜 셀에 숫자만 표시
                        dayCellClassNames={arg => { // 요일에 따라 CSS 클래스 추가
                            const day = arg.date.getDay();
                            if (day === 0) return 'fc-sunday'; // 일요일
                            if (day === 6) return 'fc-saturday'; // 토요일
                            return '';
                        }}
                    />
                </div>

                {/*==== 일정 목록 모달 상태가 true일 때만 표시 =====*/}
                {showListModal && (
                    <div className={`modal fade serviceModal bottomModal modalBg ${
                        showListModal ? "show" : ""
                        }`}
                        style={{display: showListModal ? "block" : "none"}}
                        id="serviceModal"
                        tabIndex={-1}
                        aria-hidden="true"
                    >
                        <div className="modal-dialog">
                            <div>
                                <div className="modal-header">
                                    <button 
                                        onClick={() => setShowListModal(false)}
                                        type="button"
                                        className="modal-close rounded-full"
                                        aria-label="Close"
                                    >
                                        <img src="/assets/svg/close-black.svg" alt="Close" />
                                    </button>
                                    <h1 className="modal-title">{selectedDate} 일정 목록</h1>
                                </div>
                                <div className="modal-body">
                                    <div className="modal-body-content">
                                        {events.filter((ev) => ev.start === selectedDate).length === 0 ? (
                                        <p>일정이 없습니다.</p>
                                        ) : (
                                            <ul>
                                                {events
                                                .filter((ev) => ev.start === selectedDate)
                                                .map((ev, i) => (
                                                    <li key={i} style={{color: ev.color}}>
                                                        <strong>{ev.title}</strong> ({ev.start} ~ {ev.end})
                                                        <br />
                                                        {ev.description}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                    <div className="modal-actions">
                                        <button onClick={handleAddClick}>일정 추가</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}


                {/* ======== 일정 추가 모달 ======= */}
                {showAddModal && (
                    <div
                        className={`modal fade serviceModal bottomModal modalBg ${
                            showAddModal ? "show" : ""
                        }`}
                        style={{display: showAddModal ? "block" : "none"}}
                        id="serviceModal"
                        tabIndex={-1}
                        aria-hidden="true"
                    >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button
                                        onClick={()=> setShowAddModal(false)}
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
                                                    setNewEvent({...newEvent, title: e.target.value})
                                                }
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>시작일</label>
                                            <input 
                                                type="date"
                                                value={newEvent.start}
                                                onChange={(e)=>
                                                    setNewEvent({...newEvent, start: e.target.value})
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
                                                    setNewEvent({...newEvent, end: e.target.value})
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
                                                        onClick={()=>
                                                            setNewEvent({...newEvent, color : c.value})
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
                                            <button type="button" onClick={()=> setShowAddModal(false)}>
                                                취소
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )}


                {/*오류 구문 찾기*/}





            </main>
            <Footer />    
        </>
    )
}