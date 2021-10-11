let desc9 = $("#desc9");
let desc10 = $("#desc10");
let desc11 = $("#desc11");
let desc12 = $("#desc12");
let desc13 = $("#desc13");
let desc14 = $("#desc14");
let desc15 = $("#desc15");
let desc16 = $("#desc16");
let desc17 = $("#desc17");

let clock = function () {
    setInterval(clock, 1000);


    let currentDay = moment().format("dddd MMM DD YYYY, h:mm:ss");

    $("#currentDay").text(currentDay);

}

clock();



$(desc9).click(function () {
    $(desc9).replaceWith("<textarea id='9amInput'></textarea>");
    localStorage.setItem("9am", $("#9amInput").val());
})

$(desc10).click(function () {
    $(desc10).replaceWith("<textarea id='10amInput'></textarea>");
    localStorage.setItem("10am", $("#10amInput").val());
})

$(desc11).click(function () {
    $(desc11).replaceWith("<textarea id='11amInput'></textarea>");
    localStorage.setItem("11am", $("#11amInput").val());
})

$(desc12).click(function () {
    $(desc12).replaceWith("<textarea id='12pmInput'></textarea>");
    localStorage.setItem("12pm", $("#12pmInput").val());
})

$(desc13).click(function () {
    $(desc13).replaceWith("<textarea id='1pmInput'></textarea>");
    localStorage.setItem("1pm", $("#1pmInput").val());
})

$(desc14).click(function () {
    $(desc14).replaceWith("<textarea id='2pmInput'></textarea>");
    localStorage.setItem("2pm", $("#2pmInput").val());
})

$(desc15).click(function () {
    $(desc15).replaceWith("<textarea id='3pmInput'></textarea>");
    localStorage.setItem("3pm", $("#3pmInput").val());
})

$(desc16).click(function () {
    $(desc16).replaceWith("<textarea id='4pmInput'></textarea>");
    localStorage.setItem("4pm", $("#4pmInput").val());
})

$(desc17).click(function () {
    $(desc17).replaceWith("<textarea id='5pmInput'></textarea>");
    localStorage.setItem("5pm", $("#5pmInput").val());
})