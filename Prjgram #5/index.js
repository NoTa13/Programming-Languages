const counter = document.getElementById("counter");
const speedPlusBtn = document.getElementById("speedPlus");
const speedMinusBtn = document.getElementById("speedMinus");
const resetBtn = document.getElementById("reset");

let count = 0;

function formatTime(num) {
    let minutes = Math.floor(num / 60);
    let seconds = num % 60;
    return (
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds
    );
}

function updateCounter() {
    counter.textContent = formatTime(count);
}

speedPlusBtn.addEventListener("click", () => {
    count++;
    updateCounter();
    document.body.style.backgroundColor = "#d4f8d4"; // светло-зелёный фон
    counter.style.color = "#f28b82"; // светло-красные цифры
});

speedMinusBtn.addEventListener("click", () => {
    if (count > 0) count--;
    updateCounter();
    document.body.style.backgroundColor = "#f8d4d4"; // светло-красный фон
    counter.style.color = "#81c784"; // светло-зелёные цифры
});

resetBtn.addEventListener("click", () => {
    count = 0;
    updateCounter();
    document.body.style.backgroundColor = "gray"; // серый фон
    counter.style.color = "black"; // чёрные цифры
});

// Инициализация
updateCounter();
