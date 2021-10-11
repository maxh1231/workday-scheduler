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


// set value of tasks descriptions to local storage
$(desc9).text(localStorage.getItem("9am"));
$(desc10).text(localStorage.getItem("10am"));
$(desc11).text(localStorage.getItem("11am"));
$(desc12).text(localStorage.getItem("12pm"));
$(desc13).text(localStorage.getItem("1pm"));
$(desc14).text(localStorage.getItem("2pm"));
$(desc15).text(localStorage.getItem("3pm"));
$(desc16).text(localStorage.getItem("4pm"));
$(desc17).text(localStorage.getItem("5pm"));


// if local storage is empty, value of task descriptions are Enter a task
if (localStorage.getItem("9am") === null) {
    $(desc9).text("Enter a task");

}

if (localStorage.getItem("10am") === null) {
    $(desc10).text("Enter a task");
}

if (localStorage.getItem("11am") === null) {
    $(desc11).text("Enter a task");
}

if (localStorage.getItem("12pm") === null) {
    $(desc12).text("Enter a task");
}

if (localStorage.getItem("1pm") === null) {
    $(desc13).text("Enter a task");
}

if (localStorage.getItem("2pm") === null) {
    $(desc14).text("Enter a task");
}

if (localStorage.getItem("3pm") === null) {
    $(desc15).text("Enter a task");
}

if (localStorage.getItem("4pm") === null) {
    $(desc16).text("Enter a task");
}

if (localStorage.getItem("5pm") === null) {
    $(desc17).text("Enter a task");
}

// color coding based on current time





let clock = function () {
    setInterval(clock, 1000);


    let currentDay = moment().format("dddd MMM DD YYYY, h:mm:ss");
    $("#currentDay").text(currentDay);




}

clock();




let updateColorCode = function () {
    setInterval(updateColorCode, 60000);
    let currentTime = moment().format("H");
    currentTime = parseInt(currentTime, 10);


    // 9am Checker
    if (currentTime < 9) {
        $("#am9Wrapper").addClass("future");

    } else if (currentTime === 9) {
        $("#am9Wrapper").addClass("present");
    } else if (currentTime > 9) {
        $("#am9Wrapper").addClass("past");
    }


    // 10am Checker
    if (currentTime < 10) {
        $("#am10Wrapper").addClass("future");

    } else if (currentTime === 10) {
        $("#am10Wrapper").addClass("present");
    } else {
        $("#am10Wrapper").addClass("past");
    }


    // 11am Checker
    if (currentTime < 11) {
        $("#am11Wrapper").addClass("future");

    } else if (currentTime === 11) {
        $("#am11Wrapper").addClass("present");
    } else {
        $("#am11Wrapper").addClass("past");
    }


    // 12pm checker
    if (currentTime < 12) {
        $("#pm12Wrapper").addClass("future");

    } else if (currentTime === 12) {
        $("#pm12Wrapper").addClass("present");
    } else {
        $("#pm12Wrapper").addClass("past");
    }


    // 1pm Checker
    if (currentTime < 13) {
        $("#pm1Wrapper").addClass("future");

    } else if (currentTime === 13) {
        $("#pm1Wrapper").addClass("present");
    } else {
        $("#pm1Wrapper").addClass("past");
    }


    // 2pm Checker
    if (currentTime < 14) {
        $("#pm2Wrapper").addClass("future");

    } else if (currentTime === 14) {
        $("#pm2Wrapper").addClass("present");
    } else {
        $("#pm2Wrapper").addClass("past");
    }


    // 3pm Checker
    if (currentTime < 15) {
        $("#pm3Wrapper").addClass("future");

    } else if (currentTime === 15) {
        $("#pm3Wrapper").addClass("present");
    } else {
        $("#pm3Wrapper").addClass("past");
    }


    // 4pm Checker
    if (currentTime < 16) {
        $("#pm4Wrapper").addClass("future");

    } else if (currentTime === 16) {
        $("#pm4Wrapper").addClass("present");
    } else {
        $("#pm4Wrapper").addClass("past");
    }


    // 5pm Checker
    if (currentTime < 17) {
        $("#pm5Wrapper").addClass("future");

    } else if (currentTime === 17) {
        $("#pm5Wrapper").addClass("present");
    } else {
        $("#pm5Wrapper").addClass("past");
    }
}

updateColorCode();


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

//store <textarea> values in local storage on button click
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