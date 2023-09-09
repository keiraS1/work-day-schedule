// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//once browser has finished running (this includes CSS and HTML properties), JS will execute
console.log("this works");



$(function () {

  // var hourOfDay = $(this).parent().attr("id");
  // var calendarList = $(this).siblings(".description").val();
  
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. 

 
  

  //HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  // var currentHour = today.getHours();
//
  $(".time-block")


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
   // var saveBtn = $(".saveBtn");
   $(".saveBtn").on("click", function(){
    console.log("this is working")
    alert("Your task has been saved!");
    // console.log(this);
//     var CalendarPlans = {
//       dayTime: hourOfDay,
//       calendar: calendarList

// };
    // so that we do not repeat multiple times over and over we are using this as in each save button and storing the parent- the div-id of the hour into local storage
  var hourOfDay = $(this).parent().attr("id");
  var calendarList = $(this).siblings(".description").val();

    // console.log(this);
    localStorage.setItem(hourOfDay,JSON.stringify(calendarList));
    // console.log(calendarList);

  //now to create getItem so information stays on page



  
 
  })

  



  // TODO: Add code to display the current date in the header of the page.
  //adds current day
  var currentDate = dayjs();
  $("#today").text(currentDate.format("MMM D YYYY"))
  

});
