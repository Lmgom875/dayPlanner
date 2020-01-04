$(document).ready(function(){

    /* -------------------------- */
    /* Variables*/
    /* -------------------------- */

    var hourDis = [
        "9AM",
        "10AM",
        "11AM",
        "12PM",
        "1PM",
        "2PM",
        "3PM",
        "4PM",
        "5PM"
    ]
    var timeHours = moment().format('hA');
    var timeNow = moment(timeHours,'hA');
    var timeDisplay = moment(hourDis[3],'hA');
    var timeSame = "";
    var timeBefore = "";
    var timeAfter = "";



    //console.log(hour);

    /* -------------------------- */
    /* Loading Events */
    /* -------------------------- */

    //$('#mainHead1').children().last().html("<h6>" + time + "</h6>");
    hourUpdate();
    setInterval(hourUpdate, 1000);
    createHoursDiv();
    colorVerification();
    

    /* -------------------------- */
    /* Function*/
    /* -------------------------- */

    function createHoursDiv(){
        for(i = 0; i < hourDis.length; i++){
        $('#container').append("<div class= 'row mainHours d-flex justify-content-between' id='mainHours'></div>");
        $('#container').children().last().append('<div class= "col-1 hoursNum" id="hoursNum"><p id="hour">'+ hourDis[i] + '</p>');
        $('#container').children().last().append("<div class= 'col-10 hoursText' id='hoursText'><input type='text' class='inputEvent' id='inputEvent'></div>");
        $('#container').children().last().append("<div class= 'col-1 hoursSaveBtn' id='hoursSaveBtn'><button class='btn btn-primary' id='btnSave'>Save</button></div>");
        }
    }

    function hourUpdate(){
        var timeReadable = moment().format('MMMM Do YYYY, h:mm:ss a');
        $('#mainHead1').children().last().html("<h6>" + timeReadable + "</h6>");
        
    }

    function colorVerification(){
        for(i = 0; i < hourDis.length; i++){
            var timeDisplay = moment(hourDis[i],'hA');
            timeSame = (moment(timeNow).isSame(timeDisplay));
            timeAfter = (moment(timeNow).isAfter(timeDisplay));
            timeBefore = (moment(timeNow).isBefore(timeDisplay));
            if (timeSame == true) {
                console.log("presente");
            }if (timeBefore == true) {
                console.log("futuro");
            }if (timeAfter == true) {
                console.log("pasado")
            }

        }

    }
    console.log(timeNow);
    //console.log(timeBefore);
    //console.log("hola afuera");



    /* -------------------------- */
    /* Events*/
    /* -------------------------- */




});
