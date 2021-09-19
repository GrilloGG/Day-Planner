//const $currentDay = $("#currentDay");
const $timeSlot = $("#time-slot");
let currentTime = moment();

$("#currentDay").text(currentTime.format("dddd, Do MMMM YYYY, kk:mm:ss "))

const workingHours = ["09:00AM", "10:00AM", "11:00AM", "12:00PM", "01:00PM", "02:00PM", "03:00PM", "04:00PM", "05:00PM"];

for (let i=0; i < workingHours.length; i++) {
    let blockSection = $("<section>");
    blockSection.addClass("row")
    $timeSlot.append(blockSection);

    let hourSection = $("<div>");
    hourSection.addClass("hour col-1");
    hourSection.text(workingHours[i]);
    blockSection.append(hourSection);

    let textAreaSection = $("<textarea>");
    textAreaSection.addClass("textarea col-10");
    blockSection.append(textAreaSection);

    let buttonSection = $("<button>");
    buttonSection.addClass("saveBtn col-1");
    blockSection.append(buttonSection);
}