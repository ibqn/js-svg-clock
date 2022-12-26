(function () {
  const HOURHAND = document.querySelector("#hour");
  const MINUTEHAND = document.querySelector("#minute");
  const SECONDHAND = document.querySelector("#second");

  let hourCor = 0;
  let minuteCor = 0;
  let secondCor = 0;

  const date = new Date();

  const params = {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };

  const rotFunc = (arg) => {
    const date = new Date();

    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    hourCor += arg.hour > hour ? 24 : 0;
    minuteCor += arg.minute > minute ? 60 : 0;
    secondCor += arg.second > second ? 60 : 0;

    const hourPos = (hourCor + hour) * 30;
    const minutePos = (minuteCor + minute) * 6;
    const secondPos = (secondCor + second) * 6;

    //console.log(`prev second ${arg.second} - new second ${second} - angle ${secondPos}`);

    params.hour = hour;
    params.minute = minute;
    params.second = second;

    HOURHAND.style.transform = `rotate(${hourPos}deg)`;
    MINUTEHAND.style.transform = `rotate(${minutePos}deg)`;
    SECONDHAND.style.transform = `rotate(${secondPos}deg)`;
  };

  setInterval(rotFunc, 500, params);
})();
