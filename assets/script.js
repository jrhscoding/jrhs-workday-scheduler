$(document).ready(function() {

var currentTime = function () {
    var currentHour = moment().hours();
};

currentTime();
var checkTime = setInterval(currentTime, 10000);

$('#currentDay').text(moment().format("dddd, MMMM Do, YYYY, h:mm:ss a"));

});
