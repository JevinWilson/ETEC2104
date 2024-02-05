"use strick";

// global variable for websocket
let sock;

function keyPressed(ev){
    if(ev.key === "Enter"){
        sendMessage();
    }
}

function sendMessage() {
    console.log("send");
    let inp =  document.getElementById("input");
    let msg = inp.value;

    sock.send( msg );

    let box = document.getElementById("chat");
    box.value += msg + "\n";
}

function main(){
    sock = new WebSocket("ws://"+document.location.host+"/sock");
    sock.addEventListener("open", ()=>{
        let b = document.getElementById("send");
        b.disabled=0
    });
}

main();