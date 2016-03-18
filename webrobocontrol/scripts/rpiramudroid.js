function clearotherbuttons(selectedbutton){
    for (var i = 1; i <=5; i++) {
        if(("btn"+i)!= selectedbutton)
        if(document.getElementById("btn"+i).getAttribute('content')=="on" ) toggleState(document.getElementById("btn"+i));
    }
}

function toggleState(item){
   if(item.className == "btn btn-success") {
      item.className="btn btn-info";
      item.setAttribute('content', 'off');

   } else {
      item.className="btn btn-success";
      item.setAttribute('content', 'on');
   }            
}
    
function toggleState_1(item){
   if(item.className == "btn btn-success") {
      item.className="btn btn-info";
      item.setAttribute('content', 'off');
      item.value = 'off';
   } else {
      item.className="btn btn-success";
      item.setAttribute('content', 'on');
      item.value = 'on';
   }
}

/*var rpi_ip=option.rpiserver;
var rpi_streaming_ip = option.rpi_streaming_ip;*/

var pin1 = "0";
var pin2 = "0";
var pin3 = "0";
var pin4 = "0";
var pin5 = "0";
var pin6 = "0";
var pin7 = "0";
var pin8 = "0";
                   
function operation(move_var){  
        
    if(move_var=="top"){
        console.log(" top");
        pin1="1";
        pin2="0";
        pin3="1";
        pin4="0";
        pin5="0";
        pin6="0";
        pin7="0";
        pin8="0";
    }
     
    else if(move_var=="right"){
        console.log(" right");
        pin1="1";
        pin2="0";
        pin3="0";
        pin4="0";
        pin5="0";
        pin6="0";
        pin7="0";
        pin8="0";
    }
    
    else if(move_var=="left"){
        console.log(" left");
        pin1="0";
        pin2="0";
        pin3="1";
        pin4="0";
        pin5="0";
        pin6="0";
        pin7="0";
        pin8="0";
    }
    
    else if(move_var=="back"){
        console.log(" back");
        pin1="0";
        pin2="1";
        pin3="0";
        pin4="1";
        pin5="0";
        pin6="0";
        pin7="0";
        pin8="0";
    }
    
    else if(move_var=="stop"){
        console.log(" stop");
        pin1="0";
        pin2="0";
        pin3="0";
        pin4="0";
        pin5="0";
        pin6="0";
        pin7="0";
        pin8="0";
    }
    
    else if(move_var=="clean"){
        console.log(" clean");
        
        //get status of top
        if(document.getElementById('btn1').getAttribute('content')=="on"){
            pin1="1";
            pin2="0";
            pin3="1";
            pin4="0";
        }
        
        //get status of left
        else if(document.getElementById('btn2').getAttribute('content')=="on"){
            pin1="0";
            pin2="0";
            pin3="1";
            pin4="0";
        }
        
        //get status of stop
        else if(document.getElementById('btn3').getAttribute('content')=="on"){
            pin1="0";
            pin2="0";
            pin3="0";
            pin4="0";
        }
        
                        
        //get sttaus of right
        else if(document.getElementById('btn4').getAttribute('content')=="on"){
            pin1="1";
            pin2="0";
            pin3="0";
            pin4="0";
        }
        
        
        //get sttaus of back
        else if(document.getElementById('btn4').getAttribute('content')=="on"){
            pin1="0";
            pin2="1";
            pin3="0";
            pin4="1";
        }
        
        //default case of stop
        else{
            pin1="0";
            pin2="0";
            pin3="0";
            pin4="0";
        }
        
        //get the value of button from seeting clean button numb 7
        if(document.getElementById('btn6').getAttribute('content')=="on"){
            pin5="1";
        }
        else{
            pin5="0";
        }
        pin6="0";
        pin7="0";
        pin8="0";
    }
    
    else if(move_var=="lift"){
        console.log(" lift");
        
        pin1="0";
        pin2="0";
        pin3="0";
        pin4="0";
        pin5="0";
        
        //clear the clean switch ,if on
        if ( document.getElementById('btn6').getAttribute('content')=="on"){
            toggleState_1(document.getElementById('btn6'));
        }
        
        if(document.getElementById('btn7').getAttribute('content')=="on"){
            pin6="1";
            pin7="0";
        }
        else{
            pin6="0";
            pin7="1";
        }
        pin8="0";
    }
     
    else{
     //even if it doesnt match anything , just stop 
        console.log(" stop");
        pin1="0";
        pin2="0";
        pin3="0";
        pin4="0";
        pin5="0";
        pin6="0";
        pin7="0";
        pin8="0";
    }

$.ajax({ 
       type: "GET",
       dataType: "jsonp",
       url: "http://192.168.0.168/m2m/rpiramudroid/testgpio.php?p0="+pin1+"&p1=" + pin2 + "&p2=" + pin3 + "&p3=" + pin4+ "&p4=" + pin5+ "&p5=" + pin6+ "&p6=" + pin7+ "&p7=" + pin8,
       success: function(data){        
         console.log(data);
       }
    });
}