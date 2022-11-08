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

    currentTime();
    var checkTime = setInterval(currentTime, 10000);

    $('#currentDay').text(moment().format("dddd, MMMM Do, YYYY, h:mm:ss a"));

});
