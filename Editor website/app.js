var text = document.getElementById("textareaText")
function f1(e){
    var value = e.value;
    text.style.fontSize = value + "px"
}
function f2(){
    var bold = document.getElementById('bold');
    if( text.style.fontWeight == "bold"){

        text.style.fontWeight = "normal"
    }
else{
    text.style.fontWeight = "bold";
}
}
function f3(){
    var italic = document.getElementById('italic');
    if(text.style.fontStyle == 'italic'){
         text.style.fontStyle = 'normal'
    }else{
        text.style.fontStyle = 'italic'
    }
}
function f4(){
var underLine = document.getElementById('underline');
if(text.style.textDecoration == 'underline '){

    text.style.textDecoration = 'none'

}else{
    text.style.textDecoration = 'underline '
}
}
function f5(){
    var textLeft = document.getElementById('left');
    if (text.style.textAlign == 'right'){
    
        text.style.textAlign = 'left'
    }else{
        text.style.textAlign = 'right'
    }
}

function f6(){
    var textCenter = document.getElementById('center');
    if (text.style.textAlign == 'center'){
        text.style.textAlign = 'left'
    }  else{
        text.style.textAlign = 'center'
    } 
}
function f7(){
    var textRight = document.getElementById('right');
    if (text.style.textAlign == 'right'){
    
        text.style.textAlign = 'left'   
    }else{
        text.style.textAlign = 'right'
    }
     
    }
function f8(){
    var textOverline = document.getElementById('overline');
    if( text.style.textDecoration == 'overline'){

        text.style.textDecoration = 'overline'
    }else{
        text.style.textDecoration = 'overline'
    }
}
function f9(){
    var upperCase = document.getElementById('uppercase');
    if(text.style.textTransform == 'uppercase'){
        text.style.textTransform = 'lowercase'

    }else{
        text.style.textTransform = 'uppercase'
    }
}
function f10(e){
    var colorText = document.getElementById('color');
    var value = e.value;
    if(text.style.color == value){

    }
}












