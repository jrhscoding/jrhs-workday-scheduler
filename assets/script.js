$(document).ready(function () {

    var currentTime = function () {
        var currentHour = moment().hours();
        console.log(currentHour);

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

    $(".saveBtn").on('click', function () {
        var textInput = $(this).siblings('.description').val();
        var timeStamp = $(this).parent().attr('id');
        localStorage.setItem(timeStamp, textInput);
        alert('item saved')
    });

    currentTime();
    var checkTime = setInterval(currentTime, 10000);

    $('#currentDay').text(moment().format("dddd, MMMM Do, YYYY, h:mm:ss a"));

});
