let clock = function () {
    setInterval(clock, 1000);


    let currentDay = moment().format("dddd MMM DD YYYY, h:mm:ss");

    $("#currentDay").text(currentDay);

}

clock();