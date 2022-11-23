
// wrapped script in a window ready function
$(document).ready(function (){

// defining current hour
  var currentHour = dayjs().hour()
  console.log(currentHour);

// looping through time-block id and splitting off the 'hour-'
  $('.time-block').each(function(){
  var time = $(this).attr('id').split('hour-')[1];

// setting parameters for color display 
  if (time == currentHour){
    $(this).addClass('present')
  } else if (time > currentHour){
    $(this).addClass('future')
  } else {
    $(this).addClass('past')
  }
  })

// save hour and user task to local storage when user clicks button
  $("button").click(function() {
    alert("Your task has been saved");
    var timeBlock = $(this).parent('.time-block');
    var userTask = $(this).siblings('.description').val();
    var hourId = $(timeBlock).attr('id');
    storeScheduledTask(hourId, userTask);
  })

  function storeScheduledTask(hourId, userTask) {
  localStorage.setItem(hourId, userTask);
  }

// saves user task to text area
  $('.time-block').each(function(){
    var id = $(this).attr('id');
    console.log(id);
    $(this).children('textarea').val(localStorage.getItem(id));
  })
  
// sets current date in header section
var today = dayjs();
$('#currentDay').text(today.format('MMMM D, YYYY'));

});


