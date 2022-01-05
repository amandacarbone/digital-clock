let clock = () => {
    let date = new Date;
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let period = 'AM';
    if (hour === 0) hour = 12;

    if (hour > 12) {
    hour = hour - 12;
    period = 'PM'
    }

    hour = hour < 10 ? `0${hour}` : hour;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    let time = `${hour}:${minutes}:${seconds} ${period}`;
    document.querySelector('.clock').innerText = time;

    setInterval(clock, 1000);
};

clock();