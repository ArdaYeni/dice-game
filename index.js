var randomNumber1 = Math.floor(Math.random() * 5) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
var image1=document.querySelector(".img1");
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 5) + 1; //1-6

var randomDiceImage = "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
var image2=document.querySelector(".img2");
image2.setAttribute("src", randomImageSource);
var aa=document.querySelector("h1");
if(randomNumber2>randomNumber1){
  aa.innerHTML="Player 2 wins";
}
else if(randomNumber2<randomNumber1){
  aa.innerHTML="Player 1 wins";
}
else{
  aa.innerHTML="Draw";
}
