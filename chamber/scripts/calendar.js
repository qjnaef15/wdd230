document.addEventListener("DOMContentLoaded", function () {
    const calendar = document.getElementById("calendar");
    const monthYear = document.getElementById("month-year");
    const eventDisplay = document.getElementById("event-display");
    const nextMonthButton = document.getElementById("next-month");
    const prevMonthButton = document.getElementById("prev-month");
  
    const events = {
      '2023-10-15': 'Grow your Business Seminar',
      '2023-10-30': 'Halloween Business Mixer',
      '2023-11-15': 'Annual Gala',
      '2023-12-09': 'Charity Fundraiser',
      '2023-12-23': 'Community Christmas Party',
      // Add more events as needed
    };
  
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();
  
    function updateCalendar(year, month) {
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const firstDay = new Date(year, month, 1).getDay();
  
      monthYear.textContent = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
      }).format(new Date(year, month));
  
      calendar.innerHTML = "";
  
      for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement("div");
        calendar.appendChild(emptyCell);
      }
  
      for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement("div");
        dayCell.classList.add("day-cell");
        dayCell.textContent = day;
  
        const eventDate = new Date(year, month, day).toISOString().slice(0, 10);
        if (events[eventDate]) {
          dayCell.classList.add("event-day"); // Apply the "event-day" class for event days
        }
  
        if (year === currentYear && month === currentMonth && day === currentDate.getDate()) {
          dayCell.classList.add("today");
        }
  
        calendar.appendChild(dayCell);
  
        dayCell.addEventListener("click", () => {
          if (events[eventDate]) {
            eventDisplay.textContent = events[eventDate];
          } else {
            eventDisplay.textContent = "No events for this date.";
          }
        });
      }
    }
  
    updateCalendar(currentYear, currentMonth);
  
    nextMonthButton.addEventListener("click", () => {
      if (currentMonth === 11) {
        currentMonth = 0;
        currentYear++;
      } else {
        currentMonth++;
      }
      currentDate = new Date(currentYear, currentMonth, 1);
      updateCalendar(currentYear, currentMonth);
      eventDisplay.textContent = "";
    });
  
    prevMonthButton.addEventListener("click", () => {
      if (currentMonth === 0) {
        currentMonth = 11;
        currentYear--;
      } else {
        currentMonth--;
      }
      currentDate = new Date(currentYear, currentMonth, 1);
      updateCalendar(currentYear, currentMonth);
      eventDisplay.textContent = "";
    });
  });
  