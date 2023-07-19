var deffHeigh =100;
var deffWigh = 100;
var focussed = false;
function ContLen(obj){
    document.getElementById("outputTask1").innerHTML = "Количество&nbsp;символов:&nbsp;"+document.getElementById("symbols").value.length;
}

function ContLen2(obj){
    let ta = document.getElementById("Task2TA")
    var stringText = ta.value.replace(/\n/," ").replace(/\W/gi, " ").replace(/\s{2,}/gi, " ").replace(/ $/, "").replace(/^ /,"");
    var text_array = stringText.split(" ");
    document.getElementById("Task2words").innerHTML = "Количество&nbsp;слов:&nbsp;" + text_array.length;
    document.getElementById("Task2Symbols").innerHTML = "Количество&nbsp;символов:&nbsp;" + ta.value.length;
    document.getElementById("Task2Rows").innerHTML = "Количество&nbsp; строк:&nbsp;" + ta.value.split('\n').length;
}

function ContLen3(obj){
    let size = 10;
    document.getElementById("checkSymbols").innerHTML = "Осталось&nbsp;символов:&nbsp;" + (size - document.getElementById("symbols2").value.length);
    if(size - document.getElementById("symbols2").value.length < 0){
        document.getElementById("checkSymbols").innerHTML =
        "<span style=\"color: red;\">Превышено&nbsp;символов:&nbsp;" + ((size - document.getElementById("symbols2").value.length)*-1)+"</span>"
    }
}
function ContLen4(obj){
    let size = 10;
    var chBox = document.getElementById("inBlock");
    document.getElementById("checkSymbols2").innerHTML = "Осталось&nbsp;символов:&nbsp;" + (size - document.getElementById("symbols3").value.length);
    var str = document.getElementById("symbols3").value;
    if(size - document.getElementById("symbols3").value.length < 0 && !chBox.checked){
        document.getElementById("checkSymbols2").innerHTML =
        "<span style=\"color: red;\">Превышено&nbsp;символов:&nbsp;" + ((size - document.getElementById("symbols3").value.length)*-1)+"</span>"
    }
    else if(size - document.getElementById("symbols3").value.length < 0){
        document.getElementById("checkSymbols2").innerHTML ="Осталось&nbsp;символов:&nbsp;0"
        document.getElementById("symbols3").value = document.getElementById("symbols3").value.slice(0,-1);
    }
}
function dates(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    document.getElementById("toDay").innerHTML = "<i>Сегодня:</i> "+ today;
}

function raznost(){
    var today = new Date();
    var today2 = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    var event = new Date(document.getElementById("year").value, document.getElementById("month").value - 1, document.getElementById("days").value)
    console.log(event)
    today = mm + '/' + dd + '/' + yyyy;
    document.getElementById("toDay").innerHTML = "<i>Сегодня:</i> "+ today;
    var diff = Math.floor((today2.getTime() - event.getTime())/(1000*60*60*24));
    var result =""
    years = Math.trunc(diff/365)
    month = Math.trunc((diff-(years*365))/31)
    days = diff - ((years*365)+(month*31))
    if(years != 0){
        result += years + " Лет; ";
    }
    if(month != 0){
        result += month + " Месяцев; ";
    }
    if(days != 0){
        result += days + " дней; ";
    }
    document.getElementById("result").innerHTML = "Разность дат: " + result;
}


function initialize(){
    moth = document.getElementById("month")
    if(moth.value == 1 || moth.value == 3 || moth.value == 5 || moth.value == 7 || moth.value == 8 || moth.value == 10 || moth.value == 12){
        var string ="";
        for(let i = 1; i< 32; i++){
            string += "<option value="+i+">"+i+"</option>"
        }
        document.getElementById("days").innerHTML = string
    }
    else if(moth.value == 2){
        var string ="";
        for(let i = 1; i< 29; i++){
            string += "<option value="+i+">"+i+"</option>"
        }
        document.getElementById("days").innerHTML = string
    }
    else{
        var string ="";
        for(let i = 1; i< 31; i++){
            string += "<option value="+i+">"+i+"</option>"
        }
        document.getElementById("days").innerHTML = string
    }
}
function yearsint(){
    var string ="";
        for(let i = 1970; i< 2024; i++){
            string += "<option value="+i+">"+i+"</option>"
        }
        document.getElementById("year").innerHTML = string
}
document.addEventListener('keydown', function(event){
    if(event.code == "ArrowUp" && focussed){
        var rect = document.getElementById("recTangle");
        deffHeigh += 10;
        rect.style.height = deffHeigh + "px";
    }
})
document.addEventListener('keydown', function(event){
    if(event.code == "ArrowDown" && focussed){
        var rect = document.getElementById("recTangle");
        deffHeigh -= 10;
        rect.style.height = deffHeigh + "px";
    }
})
document.addEventListener('keydown', function(event){
    if(event.code == "ArrowLeft" && focussed){
        var rect = document.getElementById("recTangle");
        deffWigh -= 10;
        rect.style.width = deffWigh + "px";
    }
})
document.addEventListener('keydown', function(event){
    if(event.code == "ArrowRight" && focussed){
        var rect = document.getElementById("recTangle");
        deffWigh += 10;
        rect.style.width = deffWigh + "px";
    }
})
var rect = document.getElementById("recTangle");

rect.addEventListener('click', function(){
    focussed = !focussed;
    if(focussed){
        document.getElementById("recTangle").style.borderWidth = 10 +"px"
    }
    else{
        document.getElementById("recTangle").style.borderWidth = 2 +"px"
    }
})

document.addEventListener('keydown', function(event){
    if(event.code == "Digit1" && focussed){
        rect.style.backgroundColor = "#e74949"
    }
    else if(event.code == "Digit2" && focussed){
        rect.style.backgroundColor = "#50cb45"
    }
    else if(event.code == "Digit3" && focussed){
        rect.style.backgroundColor = "#e19743"
    }
    else if(event.code == "Digit4" && focussed){
        rect.style.backgroundColor = "#eb82f7"
    }
    else if(event.code == "Digit5" && focussed){
        rect.style.backgroundColor = "#f2f044"
    }
    else if(event.code == "Digit6" && focussed){
        rect.style.backgroundColor = "#6c6af2"
    }
    else if(event.code == "Digit7" && focussed){
        rect.style.backgroundColor = "#ffb5e5"
    }
    else if(event.code == "Digit8" && focussed){
        rect.style.backgroundColor = "#cbffb5"
    }
    else if(event.code == "Digit9" && focussed){
        rect.style.backgroundColor = "#83f4c9"
    }
    else if(event.code == "Digit0" && focussed){
        rect.style.backgroundColor = "#ffffff"
    }
})