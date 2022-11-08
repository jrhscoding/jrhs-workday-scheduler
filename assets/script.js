// allows document to load properly
$(document).ready(function () {

    var currentTime = function () {
        var currentHour = moment().hours();
        console.log(currentHour);

        // Checks times and updates classes accordingly
        $('.time-block').each(function () {
            var plannerHour = parseInt($(this).attr("id"));
            if (plannerHour < currentHour) {
                $(this).addClass("past");
            } else if (plannerHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            };
        });

    };

    // Save functionality to update text information and store in localStorage
    $(".saveBtn").on('click', function () {
        var textInput = $(this).siblings('.description').val();
        var timeStamp = $(this).parent().attr('id');
        localStorage.setItem(timeStamp, textInput);
        alert('item saved')
    });

    // Retrieves textarea from local storage and sets the value accordingly
    $('#9 .description').val(localStorage.getItem("9"));
    $('#10 .description').val(localStorage.getItem("10"));
    $('#11 .description').val(localStorage.getItem("11"));
    $('#12 .description').val(localStorage.getItem("12"));
    $('#13 .description').val(localStorage.getItem("13"));
    $('#14 .description').val(localStorage.getItem("14"));
    $('#15 .description').val(localStorage.getItem("15"));
    $('#16 .description').val(localStorage.getItem("16"));
    $('#17 .description').val(localStorage.getItem("17"));

    // Call currentTime on load and checkTime is called every 10 seconds
    currentTime();
    var checkTime = setInterval(currentTime, 10000);
    checkTime;

    $('#currentDay').text(moment().format("dddd, MMMM Do, YYYY, h:mm:ss a"));

});
