(function() {
    const HOURHAND = document.querySelector("#hour");
    const MINUTEHAND = document.querySelector("#minute");
    const SECONDHAND = document.querySelector("#second");

    let hourCor = 0;
    let minuteCor = 0;
    let secondCor = 0;

    const idate = new Date();

    let params = {
        'hour': idate.getHours(),
        'minute': idate.getMinutes(),
        'second': idate.getSeconds()
    };

    const rot_func = (arg) => {
        const date = new Date();

        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();

        hourCor += (arg.hour > params.hour) ? 24 : 0;
        minuteCor += (arg.minute > params.minute) ? 60 : 0;
        secondCor += (arg.second > second) ? 60 : 0;

        const hourPos = (hourCor + params.hour)*30;
        const minutePos = (minuteCor + params.minute)*6;
        const secondPos = (secondCor + second)*6;

        //console.log(`prev second ${arg.second} - new second ${second} - angle ${secondPos}`);

        params.hour = hour;
        params.minute = minute;
        params.second = second;

        HOURHAND.style.transform = `rotate(${hourPos}deg)`;
        MINUTEHAND.style.transform = `rotate(${minutePos}deg)`;
        SECONDHAND.style.transform = `rotate(${secondPos}deg)`;
    };

    setInterval(rot_func, 500, params);

})();
