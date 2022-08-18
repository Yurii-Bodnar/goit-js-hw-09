import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"

const pickerRef = document.querySelector("#datetime-picker");
const btnStartRef = document.querySelector("[data-start]");
const daysRef = document.querySelector("[data-days]");
const hoursRef = document.querySelector("[data-hours]");
const minutesRef = document.querySelector("[data-minutes]");
const secondsRef = document.querySelector("[data-seconds]");

btnStartRef.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      if (selectedDates[0] < new Date()) {
          window.alert("Please choose a date in the future");
          
      } else {
          btnStartRef.disabled = false;
    }
  },
};

flatpickr(pickerRef, options)

btnStartRef.addEventListener("click", () => {
      const intervalId = setInterval(() => {
    let dateEnd = new Date(pickerRef.value);
let dateNow = new Date
        let deltaTime = dateEnd - dateNow;
          deltaTime--;
         
const timeComponens = {days, hours, minutes ,seconds} = convertMs(deltaTime);
daysRef.textContent = `${days}`;
hoursRef.textContent = `${hours}`;
minutesRef.textContent = `${minutes}`;
secondsRef.textContent = `${seconds}`;
  if (deltaTime <= 1000)  {
      clearInterval(intervalId)
      
          }
},1000)  
})


function pad(value) {
    return String(value).padStart(2, "0")
}

    function convertMs(ms) {
        // Number of milliseconds per unit of time
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        // Remaining days
        const days = pad(Math.floor(ms / day));
        // Remaining hours
        const hours = pad(Math.floor((ms % day) / hour));
        // Remaining minutes
        const minutes = pad(Math.floor(((ms % day) % hour) / minute));
        // Remaining seconds
        const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
        return { days, hours, minutes, seconds };
    };   
