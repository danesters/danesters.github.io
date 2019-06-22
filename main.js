document.getElementById("btn1").addEventListener("click", myName)
document.getElementById("btn2").addEventListener("click", mySchool)
document.getElementById("btn3").addEventListener("click", myCareer)
document.getElementById("btn4").addEventListener("click", myHobbies)

function myName() {
    document.getElementById("name").innerHTML ="My name is Danela and some of my nicknames are dane and danesters";
}

function mySchool() {
    document.getElementById("school").innerHTML = "I'm going to KIPP Austin Collegiate";
}
function myCareer() {
    document.getElementById("career").innerHTML = "I want to study neuroscience at Texas A&M";
}
function myHobbies() {
    document.getElementById("hobbies").innerHTML = "<img class=\"headshot\" src=\"./DanielaLira.JPG\">Playing basketball, watching anime, reading manga, sleeping, and playing games like Minecraft";
}

