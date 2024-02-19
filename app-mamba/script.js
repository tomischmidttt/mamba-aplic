document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth'
        // Aquí puedes agregar más opciones de configuración según tus necesidades
    });

    calendar.render();
});

