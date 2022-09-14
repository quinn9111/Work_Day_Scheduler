var saveButton = $(".saveButton");
var currentDay =$("#currentDay")
var today = moment();


 currentDay.text(moment().format('dddd MMMM Do YYYY'));

 function timeColor() {
     var hour = moment().hours();
 
     $(".time-block").each(function() {
         var currentHour = parseInt($(this).attr("id"));

 
         if (currentHour > hour) {
             $(this).addClass("future");
         } else if (currentHour === hour) {
             $(this).addClass("present");
         } else {
             $(this).addClass("past");
         }
     })
 };
 
 saveButton.on("click", function() {
 
    
     var time = $(this).siblings(".hour").text();
     var event = $(this).siblings(".event").val();
     localStorage.setItem(time, event);
 });
 

 function storeEvent() {
 
     $(".hour").each(function() {
         var currentHour = $(this).text();
         var currentEvent = localStorage.getItem(currentHour);
 
         if(currentEvent !== null) {
             $(this).siblings(".event").val(currentEvent);
         }
     });
 }
 
 timeColor();
 storeEvent();