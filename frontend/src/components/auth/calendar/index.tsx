import { useEffect } from "react";
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

    const plugins = [dayGridPlugin, timeGridPlugin, interactionPlugin, bootstrap5Plugin];

    return (
        <>
            <main>
                <HeaderOne />

                <div className="container my-3 main-calendar-wrapper calendar-page">
                    <FullCalendar
                        plugins={plugins}
                        initialView="dayGridMonth"
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
            </main>
            <Footer />    
        </>
    )
}