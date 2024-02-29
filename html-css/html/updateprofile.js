"use strict";

function submit(){
    let rname = document.getElementById("rname").value;
    let dob = document.getElementById("dob").value;
    let email = document.getElementById("email").value;
    let profilePic = localStorage.getItem("profilePic");
    let J = {
        realName: rname,
        birthDate: dob,
        email: email,
        profilePic: profilePic
    };
    fetch( "/updateprofile",
        {   method: "POST",
            body: JSON.stringify(J)
        }
    ).then( (resp) => {
        //can also use text(), blob(), or arrayBuffer()
        resp.json().then( (J) => {
            console.log("Server said:",J);
        });
    }).catch( (err) => {
        console.log("Uh oh",err);
    });
}

function saveImage() {
    let pic = document.getElementById("ppic").files[0];
    if (pic) {
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            let profilePic = btoa(reader.result);
            localStorage.setItem("profilePic", profilePic);
        });
        reader.readAsBinaryString(pic);
    }
}

window.onload = () => {
    let profilePicture = localStorage.getItem("profilePic");
    if (profilePicture) {
        document.getElementById("profilePic").src = "data:image/octet-stream;base64," + profilePicture;
    }
    localStorage.removeItem("profilePic");
}