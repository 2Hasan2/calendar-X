# Calendar and Clock Functionality

This code provides functionality for a calendar and clock. It includes features such as displaying the current month, navigating to previous and next months, jumping to the current date, displaying the current time, and handling mouse events on calendar days.

## Getting Started

To use this code, you can follow these steps:

1. Include the JavaScript code in your HTML file.
2. Ensure that you have the required HTML elements in your file, such as a container for the calendar and clock.
3. Initialize the calendar and clock by calling the `initializeCalendar()` function and adding event listeners to the necessary buttons.

```html
<!-- HTML example -->
<div id="current-month"></div>
<div id="calendar-body"></div>
<button id="prev-month-btn">Previous Month</button>
<button id="next-month-btn">Next Month</button>
<button id="today-btn">Today</button>

<div id="clock"></div>
<button id="toggle-clock-btn">Toggle Clock</button>
