const currentDate = new Date();
    const now =new Date().getFullYear()+" "+(new Date().getMonth()+1).toString().padStart(2, '0') +" "+new Date().getDate().toString().padStart(2, '0');
    const calendarHeader = document.getElementById('current-month');
    const calendarBody = document.getElementById('calendar-body');
    const prevMonthBtn = document.getElementById('prev-month-btn');
    const nextMonthBtn = document.getElementById('next-month-btn');
    const todayBtn = document.getElementById('today-btn');
    let list=[];
//CALENDaR
 // Calendar
function initializeCalendar() {
  
  calendarHeader.textContent = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  dayNames.forEach((dayName) => {
    const day = document.createElement('div');
    day.classList.add('day');
    day.textContent = dayName;
    calendarBody.appendChild(day);
  });

  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfWeek = firstDayOfMonth.getDay();

  for (let i = 0; i < firstDayOfWeek; i++) {
    const emptyDay = document.createElement('div');
    emptyDay.classList.add('day');
    calendarBody.appendChild(emptyDay);
  }

  for (let dayCount = 1; dayCount <= lastDayOfMonth; dayCount++) {
    const day = document.createElement('div');
    day.classList.add('day');
    day.textContent = dayCount;
    day.dataset.date = (
      currentDate.getFullYear().toString() +
      " " +
      (currentDate.getMonth() + 1).toString().padStart(2, "0") +
      " " +
      dayCount.toString().padStart(2, "0")
    );
    if (
      currentDate.getFullYear() === new Date().getFullYear() &&
      currentDate.getMonth() === new Date().getMonth() &&
      dayCount === new Date().getDate()
    ) {
      day.classList.add('current-day');
    }
    calendarBody.appendChild(day);
  }

}

    function changeMonth(delta) {
      currentDate.setMonth(currentDate.getMonth() + delta);
      calendarBody.innerHTML = '';
      initializeCalendar();
    }
    
    function goToToday() {
      currentDate.setFullYear(new Date().getFullYear());
      currentDate.setMonth(new Date().getMonth());
      calendarBody.innerHTML = '';
      initializeCalendar();
      time();
    }

    prevMonthBtn.addEventListener('click', () => {
      changeMonth(-1);
      time();
    });

    nextMonthBtn.addEventListener('click', () => {
      changeMonth(1);
      time();
    });

    todayBtn.addEventListener('click', () => {
      goToToday();
      
    });

    document.addEventListener('DOMContentLoaded', () => {
      initializeCalendar();
    });

//CLOCK
    function updateClock() {
      const clockElement = document.getElementById('clock');
      const currentTime = new Date();
      const now=(new Date().getFullYear().toString()+" "+(new Date().getMonth()+1).toString().padStart(2, "0")+" "+new Date().getDate().toString().padStart(2, "0"));
      const hours = currentTime.getHours().toString().padStart(2, '0');
      const minutes = currentTime.getMinutes().toString().padStart(2, '0');
      const seconds = currentTime.getSeconds().toString().padStart(2, '0');
      if (hours>12) {
        var timeString = `${hours-12}:${minutes}:${seconds}`;
      }else{
        var timeString = `${hours}:${minutes}:${seconds}`;
      }
      clockElement.textContent = timeString;
    }

    setInterval(updateClock, 1000);

    const toggleClockBtn = document.getElementById('toggle-clock-btn');
    const show = document.getElementById('show-btn');
    const clockElement = document.getElementById('clock');
    const WeatherElement=document.querySelector(".weather-container")
    const VacationsElement=document.querySelector("#vacations")
    
    toggleClockBtn.addEventListener('click', () => {
      if (clockElement.style.display === 'flex') {
        clockElement.style.display = 'none';
        toggleClockBtn.textContent = 'Show Clock';
        } else {
          clockElement.style.display = 'flex';
        toggleClockBtn.textContent = 'Hide Clock';
      }
    });


  // massage pop;
  
  function massage(elements) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener("mouseover", function (event) {
        showElementName(event.target);
    });
    elements[i].addEventListener("mouseout", function () {
      clearMessage();
    });
  }
  
  function showElementName(element) {
     var name = element.dataset.date;
  var popupElement = document.getElementById("popup");
  popupElement.textContent = name;
  popupElement.style.display = "block";
  movePopup(event);
  document.addEventListener("mousemove", movePopup);
  }
  
  function clearMessage() {
    var popupElement = document.getElementById("popup");
  popupElement.style.display = "none";
  document.removeEventListener("mousemove", movePopup);
  }
  function movePopup(event) {
    var popupElement = document.getElementById("popup");
    popupElement.style.top = (event.clientY + 10) + "px";
    popupElement.style.left = (event.clientX + 10) + "px";
  }
}

//onclick
function dayClicked(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function (event) {
      let me=event.target.dataset.date.split(" ");
      for (i=0;i<3;i++) {
        var a=["year","month","day"]
      }
      if (now!==event.target.dataset.date) {
        elements.forEach((e)=>{
          e.classList.remove("clicked-day")
        })
        event.target.classList.add('clicked-day');
      }
  });
}
}
function time() {
  setTimeout(()=>{
  const elements = document.querySelectorAll('div[data-date]');    
  massage(elements);
   dayClicked(elements);
},100)
}
time()