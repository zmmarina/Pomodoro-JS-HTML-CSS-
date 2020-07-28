let minute = 0;
let second = 0;
let chrono;

function start(){
    chrono = setInterval(() => {timer();}, 10);    
}


function stop(){
    clearInterval(chrono);
}


function reset(){
    clearInterval(chrono);
    minute = 0;
    second = 0;

    document.getElementById('counter').innerText = "00 : 00";
}

function timer(){
    second++;

    if (second == 60){
        second = 0;
        minute++;

        if (minute == 25){
            reset();
            alert("Great job! Have a rest!");          
                           
        }
    } 
    
   let format = (minute < 10 ? "0" + minute : minute) + " : " + (second < 10? "0" + second : second);
    document.getElementById('counter').innerText = format;

    return format;
}
/** 
function rest(){
   second++;

    if (second == 60){
        second = 0;
        minute++;
        
        if (minute == 4){
            reset();
            alert("Time to focus!");
            clearInterval(chronorest);

        
        }
    }   

          
    let format = (minute < 10 ? "0" + minute : minute) + " : " + (second < 10? "0" + second : second);
    document.getElementById('counter').innerText = format;

    return format;
}*/
     
    
