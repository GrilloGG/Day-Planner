const $timeSlot = $("#time-slot");
let currentTime = moment();

$("#currentDay").text(currentTime.format("dddd, Do MMMM YYYY"))

const workingHours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

for (let i=0; i < workingHours.length; i++) {
    let blockSection = $("<section>");
    blockSection.addClass("row")
    $timeSlot.append(blockSection);

    let hourSection = $("<div>");
    hourSection.addClass("hour col-1");
    hourSection.text(workingHours[i]);
    blockSection.append(hourSection);
    let minutesSection = $("<span>");
    minutesSection.text(":00");
    hourSection.append(minutesSection);

    let textAreaSection = $("<textarea>");
    textAreaSection.addClass("textarea col-10");
    textAreaSection.attr("id", "textareatex")
    blockSection.append(textAreaSection);

    let buttonSection = $("<button>");
    buttonSection.text("Save")
    buttonSection.addClass("saveBtn col-1");
    blockSection.append(buttonSection);
    
    if (workingHours[i] < currentTime.format("kk")){
        textAreaSection.addClass("past");
    }
    else if (workingHours[i] == currentTime.format("kk")){
        textAreaSection.addClass("present");
    }
    else {
        textAreaSection.addClass("future");
    }
}

$(".hour").each(function(){
    let key = $(this).text().slice(0,2);
    console.log(key);
    $(this).siblings("textarea").val(localStorage.getItem(key))

})

$(".saveBtn").on("click", function(){
    let todo = $(this).prev().val();
    localStorage.setItem($(this).siblings('div').text().slice(0,2), todo.trim())
    })