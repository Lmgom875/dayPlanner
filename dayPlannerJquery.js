$(document).ready(function(){

    /* -------------------------- */
    /* Variables*/
    /* -------------------------- */

    //object for all info and for loops
    var generalInfo = [
        { display : "9AM",
            notes : ""},
        { display : "10AM",
            notes : ""},
        { display : "11AM",
            notes : ""},
        { display : "12PM",
            notes : ""},
        { display : "1PM",
            notes : ""}, 
        { display : "2PM",
            notes : ""}, 
        { display : "3PM",
            notes : ""},
        { display : "4PM",
            notes : ""},
        { display : "5AM",
            notes : ""},
    ]

    //var for moments.js
    var timeHours = moment().format('hA');
    var timeNow = moment(timeHours,'hA');
    var timeSame = "";
    var timeBefore = "";
    var timeAfter = "";

    /* -------------------------- */
    /* Loading Events */
    /* -------------------------- */

    hourUpdate();
    setInterval(hourUpdate, 1000);
    createHoursDiv();
    colorVerification();
    displayNotes();
    

    /* -------------------------- */
    /* Function*/
    /* -------------------------- */

    //function to create div
    function createHoursDiv(){
        for(i = 0; i < generalInfo.length; i++){
        $('#container').append("<div class= 'row mainHours d-flex justify-content-between' id='mainHours" + generalInfo[i].display + "'></div>");
        $('#container').children().last().append('<div class= "col-1 hoursNum" id="hoursNum"><p id="hour">'+ generalInfo[i].display + '</p>');
        $('#container').children().last().append("<div class= 'col-10 hoursText' id='hoursText"+generalInfo[i].display+"'><input type='text' class='inputEvent' id='inputEvent"+generalInfo[i].display+"'></div>");
        $('#container').children().last().append("<div class= 'col-1 hoursSaveBtn' id='hoursSaveBtn'><button class='btn btn-primary' id='btnSave'>Save</button></div>");
        }
    }
    //function to update the hours
    function hourUpdate(){
        var timeReadable = moment().format('MMMM Do YYYY, h:mm:ss a');
        $('#mainHead1').children().last().html("<h6>" + timeReadable + "</h6>");
        
    }
    //function to verificate colors
    function colorVerification(){
        for(i = 0; i < generalInfo.length; i++){
            var timeDisplay = moment(generalInfo[i].display,'hA');
            timeSame = (moment(timeNow).isSame(timeDisplay));
            timeAfter = (moment(timeNow).isAfter(timeDisplay));
            timeBefore = (moment(timeNow).isBefore(timeDisplay));
            if (timeSame == true) {
                $("#hoursText"+generalInfo[i].display).css({"background-color" : "red"});
                $("#inputEvent"+generalInfo[i].display).css({"background-color" : "red"});
                //console.log($("#mainHours"+hourDis[i]));
            }if (timeBefore == true) {
                $("#hoursText"+generalInfo[i].display).css({"background-color" : "lightgreen"});
                $("#inputEvent"+generalInfo[i].display).css({"background-color" : "lightgreen"});
                //console.log("future");
            }if (timeAfter == true) {
                $("#hoursText"+generalInfo[i].display).css({"background-color" : "lightgray"});
                $("#inputEvent"+generalInfo[i].display).css({"background-color" : "lightgray"});
                //console.log("past")
            }
        }
    }
    // function to save in local store
    function saveLocalStore(){
        for(i = 0; i < generalInfo.length; i++){
            var displayNow = ($("#inputEvent"+generalInfo[i].display).val());
            var notesNow = generalInfo[i].notes;
                generalInfo[i].notes = displayNow;
                console.log("grabo vacio");

        }
        localStorage.setItem("generalInfo", JSON.stringify(generalInfo));
    }

    //function to display the contest in the textbox
    function displayNotes (){
        if (localStorage.getItem("generalInfo")){
            generalInfo = JSON.parse(localStorage.getItem("generalInfo"));
            for(i = 0; i < generalInfo.length; i++){
                $("#inputEvent"+generalInfo[i].display).attr("value", generalInfo[i].notes);
                console.log($("#inputEvent"+generalInfo[i].display));
            }
        }
    }

    /* -------------------------- */
    /* Events*/
    /* -------------------------- */

    //event for click save button 
    $("#container").on('click', '.hoursSaveBtn', function(){
        saveLocalStore();
    })
});
