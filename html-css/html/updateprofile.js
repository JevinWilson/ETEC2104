"use strict";

function submit() {
    let rname = document.getElementById("rname").value;
    let dob = document.getElementById("dob").value;
    let email = document.getElementById("email").value;

    let J = {
        realName: rname,
        birthDate: dob,
        email: email
    };

    fetch("/profile",
        {
            method: "POST",
            body: JSON.stringify(J)
        }
    ).then((resp) => {
        resp.json().then((J) => {
            console.log("Server said:", J);
            saveImage();
            document.location.reload();
        });
    }).catch((err) => {
        console.log("Uh oh", err);
    });
}

function saveImage() {
    let picture = document.getElementById("ppic").files[0];
    if(picture) {
        let R = new FileReader();
        R.addEventListener("load", () => {
            let profilePic = btoa(R.result);

            localStorage.setItem("profileImage", profilePic);
        });

        R.readAsDataURL(picture);
    }
}

window.onload = function() {
    let profilePicData = localStorage.getItem("profileImage");
    if (profilePicData) {
        document.getElementById("profileImage").src = "data:image/octet-stream;base64," + profilePicData;
    }
    localStorage.removeItem("profileImage");
}