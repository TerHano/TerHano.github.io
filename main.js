
//window.onload = typeWriter;
var i = 0;
var j = 0;
var z = 0;
var q = 0;
var pretext = 'I am known as a ';
var txt = '';
var lines = ['student.','developer.','scholar.','designer.'];
var speed = 50;
var text = "Work Experience";
window.onload = function() {
    // all of your code goes in here
    // it runs after the DOM is built
    setTimeout(typeWriter,100);
    setTimeout(SimpletypeWriter,600,"WEtype");
};


function typeWriter() {
    txt = lines[j];
    if(z < pretext.length){
        document.getElementById("typed").innerHTML += pretext.charAt(z++);
        setTimeout(typeWriter, speed);
    }
    else {
        if (i < txt.length) {
            document.getElementById("typed").innerHTML += txt.charAt(i);
            i++;
            if (i !== txt.length) {
                setTimeout(typeWriter, speed)
            }
            else {
                document.getElementById("cursor").style.animationPlayState = "running";
                setTimeout(typeWriter, 1500);
            }
        }
        else {
            j++;
            erase();
        }
    }
}
function SimpletypeWriter(ID) {
    if((document.getElementById(ID).innerHTML.length) < text.length){
        document.getElementById("WEtype").innerHTML += text.charAt(q++);
        setTimeout(SimpletypeWriter, speed,ID);
    }
    else {
        q = 0;
        return;
    }
}
function erase() {
    txt = lines[j-1];
    if (i >= 0) {
        document.getElementById("cursor").style.animationPlayState = "paused";
        document.getElementById("cursor").style.opacity = 1;
        document.getElementById("typed").innerHTML = pretext + txt.substring(0,i);
        i--;
        setTimeout(erase,speed)
    }
    else{
        if(j >= lines.length){
            j=0;
            typeWriter();
        }
        else{
            typeWriter();
        }
    }
}
