//Loader JS Section
var counter = document.getElementById("counter");
let count = 0;
window.onload = function () {
    let interval = setInterval(() => {
        if (count == 11) {
            document.getElementById('flex').style.display = "none";
            clearInterval(interval);
        }
        count++;
    }, 150);
}

// Profile Image Section
let profileName = document.getElementsByClassName('profile-name');
let caption = document.getElementById('caption');
let clone = document.getElementsByClassName('image');
let profiles = document.getElementsByClassName('profile');
let box = document.getElementById('profile-container');
let len = clone.length;
let mainImage = document.getElementById('main-image');
let backButton = document.getElementById('back-button');


for (let i = 0; i < len; i++) {
    clone[i].addEventListener('click', () => {
        box.style.display = 'block';
        mainImage.src = profiles[i].src;
        caption.innerHTML = profileName[i].innerHTML;
        backButton.style.display = 'block';
    })
}
function myFunction() {
    var x = document.getElementById("profile-container");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

backButton.addEventListener('click',()=>{
    box.style.display = 'none';
    backButton.style.display = "none";
})


// TabMenu Section
function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("maindiv");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    //  elmnt.style.backgroundColor = color;
}

document.getElementById("defaultOpen").click();

// Camera Section JS.
var video = document.getElementById('video');

// Get access to the camera!
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        //video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
        video.play();
    });
}
// Elements for taking the snapshot
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var video = document.getElementById('video');

// Trigger photo take
document.getElementById("snap").addEventListener("click", function() {
	context.drawImage(video, 0, 0, 640, 480);
});

function mySet() {
    var x = document.getElementById("set");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


// status section 
let Status = document.getElementById('status');
let statusVideo = document.getElementById('status-video');
let statusContainer = document.getElementsByClassName('status-container');
let classGreen = document.getElementsByClassName('green-border');
let statusImage = document.getElementById('status-image');
let whos = document.getElementsByClassName('whos');
let statusName = document.getElementById('status-name');
let whosTime = document.getElementsByClassName('whos-time');
let statusTime = document.getElementById('status-time');
let statusVideos = document.getElementsByClassName('status-video');

for (let i = 0; i <= 8; i++) {
    statusContainer[i].addEventListener('click',()=>{
        Status.style.display = 'flex';
        statusImage.src = classGreen[i-1].src;
        statusName.innerHTML = whos[i].innerHTML; 
        statusTime.innerHTML = whosTime[i-1].innerHTML;
        statusVideo.src = statusVideos[i-1].src;
        statusVideo.play();
    });
}

let left = document.getElementById('left');
left.addEventListener('click',()=>{
    statusVideo.pause();
    Status.style.display = 'none';
});

statusVideo.onended = () => {
    statusVideo.pause();
    Status.style.display = 'none';
}