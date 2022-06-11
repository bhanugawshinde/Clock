$(document).ready(function(){
    function showTime(){
        //To Get current time/date
        var date = new Date();
        
        //Make variables to get hours, minute, second
        var hours = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        // Am,pm setting
        var session ="am";

        // conditions for time behavior
        if(hours==0){
            hours=12;
        }
        if(hours>=12){
            session="pm";
        }
        if(hours>12){
            hours-=12;
        }

        hours=hours<10?"0"+hours:hours;
        min=min<10?"0"+min:min;
        sec=sec<10?"0"+sec:sec;

        $("#hours").text(hours);
        $("#min").text(min);
        $("#sec").text(sec);
        $("#period").text(session);

        //To change time in every seconds
        setTimeout(showTime,1000);
    }
    showTime();
})