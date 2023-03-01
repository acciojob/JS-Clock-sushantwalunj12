const first = document.querySelector(".second-hand")
const second = document.querySelector(".min-hand")
const third = document.querySelector(".hour-hand")

function setDate()
{
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = 6 * seconds;
    first.style.transform = `rotate(${secondsDegrees + 90}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = 6 * mins;
    second.style.transform = `rotate(${minsDegrees + 90}deg)`;

    const hour = now.getHours();
    const hourDegrees = (30 * hour + mins / 2) % 360;
    third.style.transform = `rotate(${hourDegrees + 90}deg)`;
}

setInterval(setDate, 1000)

setDate();