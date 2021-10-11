// <p> tag variables
let desc9 = $("#desc9");
let desc10 = $("#desc10");
let desc11 = $("#desc11");
let desc12 = $("#desc12");
let desc13 = $("#desc13");
let desc14 = $("#desc14");
let desc15 = $("#desc15");
let desc16 = $("#desc16");
let desc17 = $("#desc17");

// button variables
let am9Btn = $("#am9Btn");
let am10Btn = $("#am10Btn");
let am11Btn = $("#am11Btn");
let pm12Btn = $("#pm12Btn");
let pm1Btn = $("#pm1Btn");
let pm2Btn = $("#pm2Btn");
let pm3Btn = $("#pm3Btn");
let pm4Btn = $("#pm4Btn");
let pm5Btn = $("#pm5Btn");



let clock = function () {
    setInterval(clock, 1000);


    let currentDay = moment().format("dddd MMM DD YYYY, h:mm:ss");

    $("#currentDay").text(currentDay);

}

clock();


// replace <p> with <textarea> on click
$(desc9).click(function () {
    $(desc9).replaceWith("<textarea id='9amInput'></textarea>");

})

$(desc10).click(function () {
    $(desc10).replaceWith("<textarea id='10amInput'></textarea>");

})

$(desc11).click(function () {
    $(desc11).replaceWith("<textarea id='11amInput'></textarea>");

})

$(desc12).click(function () {
    $(desc12).replaceWith("<textarea id='12pmInput'></textarea>");

})

$(desc13).click(function () {
    $(desc13).replaceWith("<textarea id='1pmInput'></textarea>");

})

$(desc14).click(function () {
    $(desc14).replaceWith("<textarea id='2pmInput'></textarea>");

})

$(desc15).click(function () {
    $(desc15).replaceWith("<textarea id='3pmInput'></textarea>");

})

$(desc16).click(function () {
    $(desc16).replaceWith("<textarea id='4pmInput'></textarea>");

})

$(desc17).click(function () {
    $(desc17).replaceWith("<textarea id='5pmInput'></textarea>");

})

//store <textarea> values in local storage
$(am9Btn).click(function () {
    localStorage.setItem("9am", $("#9amInput").val());
})

$(am10Btn).click(function () {
    localStorage.setItem("10am", $("#10amInput").val());
})

$(am11Btn).click(function () {
    localStorage.setItem("11am", $("#11amInput").val());
})

$(pm12Btn).click(function () {
    localStorage.setItem("12pm", $("#12pmInput").val());
})

$(pm1Btn).click(function () {
    localStorage.setItem("1pm", $("#1pmInput").val());
})

$(pm2Btn).click(function () {
    localStorage.setItem("2pm", $("#2pmInput").val());
})

$(pm3Btn).click(function () {
    localStorage.setItem("3pm", $("#3pmInput").val());
})

$(pm4Btn).click(function () {
    localStorage.setItem("4pm", $("#4pmInput").val());
})

$(pm5Btn).click(function () {
    localStorage.setItem("5pm", $("#5pmInput").val());
})