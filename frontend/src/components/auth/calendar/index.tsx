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

    /* 일정 상태(State) 관리 
    const [events, setEvents] = useState([]); // 전체 일정 목록
    const [selectedDate, setSelectedDate] = useState(null); // 선택한 날짜
    const [showListModal, setShowListModal] = useState(false); // 일정 목록 표시 여부
    const [showAddModal, setShowAddModal] = useState(false); // 일정 추가 표시 여부
    */  

    /* 임시 데이터
    const [newEvent, setNewEvent] = useState({
        title: "",
        start:"",
        end:"",
        color: "#ff4d4d",
        description: ""
    })
    */

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
/*
    // 날짜 클릭시 실행
    const handleDateClick = (arg) => {
        setSelectedDate(arg.dateStr); // -> yyyy-mm-dd
        setShowListModal(true); // 일정 목록 모달
    };

    // 일정 추가 실행
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
        setEvents([...EventSource, newEvent]); // 현재 일정 목록에 새로운 일정 추가
        setShowAddModal(false);
        setShowListModal(false);
    }
 */
/*
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
                        dateClick={handleDateclick}
                        eventStartEditable={true}
                        eventDurationEditable={true}
                        height="auto"
                        contentHeight="auto"
                        firstDay={0}
                        dayCellContent={arg => arg.date.getDate()}
                        dayCellClassNames={arg => {
                            const day = arg.date.getDay();
                            if (day === 0) return 'fc-sunday'; // 일요일
                            if (day === 6) return 'fc-saturday'; // 토요일
                            return '';
                        }}
                    />
                </div>
*/
                {/* 일정 목록 모달 */}
               // {showListModal && (
                    <div className="-modal-dialog">
                        <h3> 일정 목록</h3>
                        <div className="modal-content">
                            {/* 선택된 날짜에 해당하는 일정만 필터링*/}
                           
                        </div>
                    </div>
                //)}





















            </main>
            <Footer />    
        </>
    )
}