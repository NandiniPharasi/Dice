var ran1= Math.floor(Math.random() *6 +1);
var player1= "Dice"+ran1+".png";
//document.querySelector(".img1").setAttribute(img, "/image")
document.querySelectorAll("img")[0].setAttribute("src", player1);
//for dice 2

var ran2= Math.floor(Math.random() *6 +1);
var player2= "Dice"+ran2+".png";
document.querySelectorAll("img")[1].setAttribute("src", player2);

if(ran1<ran2){
    document.querySelector("h1").innerHTML="PLAYER 2 WINS 🏆 "
}
else if(ran1==ran2){
    document.querySelector("h1").innerHTML="DRAW"
}
else{
    document.querySelector("h1").innerHTML="PLAYER 1 WINS 🏆"
}
 