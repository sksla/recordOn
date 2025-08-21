import HeaderOne from "../../../layouts/headers/HeaderOne";
import Footer from "../../../layouts/footers/Footer";

// FullCalendar
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import bootstrap5Plugin from '@fullcalendar/bootstrap5';

// Bootstrap & Bootswatch Sketchy CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/dist/sketchy/bootstrap.min.css"; 

// calendar CSS
import '@/assets/css/calendar.css';

export default function Calendar(){

    const plugins = [dayGridPlugin, timeGridPlugin, interactionPlugin, bootstrap5Plugin];

    return (
        <>
            <main>
                <HeaderOne />

                <div className="container my-3 main-calendar-wrapper">
                    <FullCalendar
                        plugins={plugins}
                        initialView="dayGridMonth"
                        themeSystem="bootstrap5"
                        headerToolbar={{
                            left:'prev,today next',  
                            center:'title',
                            right:'dayGridMonth,timeGridWeek,timeGridDay' 
                        }}
                        buttonText={{
                            month:'월',
                            week:'주',
                            day:'일',
                            prev:'<',
                            next:'>',
                            today:'T'
                        }}
                        height="auto"
                        contentHeight="auto"
                        firstDay={1}
                    />
                </div>
            </main>
            <Footer />    
        </>
    )
}