//once browser has finished running (this includes CSS and HTML properties), JS will execute
// console.log("this works");
$(function () {
  // console.log(document.querySelector('.hour'))
  var myKey = 'calendar-list';// this is the key in the key value pair when storing calendar tasks into localstorage

  function loadData() {
    // the present hour- not displayed but stored for use when comparing times of day and color coding the calendar
    var currentTime = dayjs().hour();

    $(".description").each(function () {
      var container = $(this).parent();
      var timeOfDay = container.attr("id");
      // console.log({ timeOfDay });
      $(this).val(calendar[timeOfDay])
//if the id - converted into a number matches the currenttime-hour then red textarea, + turns the value into number from string
      if (+timeOfDay === currentTime) {
        container.addClass('present')
//if id number is a smaller number than the number of the currenttime - grey textarea
      } else if (+timeOfDay < currentTime) {
        container.addClass('past')
//if id number is greater than the number of the currenttime - green area
      } else {
        container.addClass('future')
      }
    })
  }
//getting the data FROM localstorage
  function getData() {
    var data = JSON.parse(localStorage.getItem(myKey));
    if (!data) {
      data = {}
      saveData(data);
    }
    return data
  }
//storing the data INTO local storage
  function saveData(data) {
    return localStorage.setItem(myKey, JSON.stringify(data));
  }

  var calendar = getData()
//click event so that when textarea is filled, clicking save button stores the string into localstorage
  $(".saveBtn").on("click", function () {
    // console.log("this works")
    alert("Your task has been saved!");
    // so that we do not repeat multiple times over and over we are using this as/in each "save" button and storing the parent- the div-id of the hour into local storage
    var hourOfDay = $(this).parent().attr("id");
    //we will also store the text content that will be stored into the description class
    var tasks = $(this).siblings(".description").val();

    calendar[hourOfDay] = tasks;
    saveData(calendar)
  })
//calling the function of loading the data onto the browser -color coding the calendar
  loadData();

  //adds current day/ updates each day automatically as the days change
  var currentDate = dayjs();
  $("#today").text(currentDate.format("MMM D YYYY"))

});
