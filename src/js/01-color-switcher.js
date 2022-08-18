const buttonStartRef = document.querySelector("[data-start]");
const buttonStopRef = document.querySelector("[data-stop]");

class ChangeColor {
    constructor() {
        this.intervalId = null;
    }
    onBtnStartChangeColor() {
        this.intervalID = setInterval(() => {
     document.body.style.backgroundColor = getRandomHexColor() 
        }, 1000); 
        if (buttonStopRef.disabled) {
            buttonStartRef.setAttribute("disabled", "");
            buttonStopRef.removeAttribute("disabled") 
        } 
        
    };
    onBtnStopChangeColor() {
        if (buttonStartRef.disabled) {
            buttonStartRef.removeAttribute("disabled");
            buttonStopRef.setAttribute("disabled", "")
        }
        clearInterval(this.intervalID);
     };
};

const changeColor = new ChangeColor();

buttonStartRef.addEventListener("click", () => {
    changeColor.onBtnStartChangeColor();
});
buttonStopRef.addEventListener("click", () => {
    
    changeColor.onBtnStopChangeColor();
})
    function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

