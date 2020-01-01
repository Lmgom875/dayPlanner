$(document).ready(function(){
    var hoursDivNum = 0;
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
    var hourDisPos = 0;
    
    var test = test;

    createHoursDiv();

    function createHoursDiv(){
        var hourNow = hourDis[hourDisPos];
        $('#container').append("<div class= 'row mainHours d-flex justify-content-between' id='mainHours'></div>");
        $('#container').children().last().append('<div class= "col-1 hoursNum" id="hoursNum"><p id="hour">'+ hourNow + '</p>');
        $('#container').children().last().append("<div class= 'col-10 hoursText' id='hoursText'><input type='text' class='inputEvent' id='inputEvent'></div>");
        $('#container').children().last().append("<div class= 'col-1 hoursSaveBtn' id='hoursSaveBtn'><button class='btn btn-primary' id='btnSave'>Save</button></div>");
        hourDisPos++;
        hoursDivNum++;
        
        console.log(hourNow);
        if(hoursDivNum < 9){
            createHoursDiv();
        }

    }
    
    


/* -------------------------- */
/* Variables*/
/* -------------------------- */
//console.log("hola afuera");

/* -------------------------- */
/* Function*/
/* -------------------------- */

/* -------------------------- */
/* Events*/
/* -------------------------- */

//createHoursDiv();


});
