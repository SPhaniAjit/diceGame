var randomNumber1=Math.random();
randomNumber1*=6;
randomNumber1=Math.floor(randomNumber1)+1;
var randomDiceImage1="dice"+randomNumber1+".png";
var randomImageSource1=randomDiceImage1;
document.querySelector(".img1").setAttribute("src",randomImageSource1);

var randomNumber2=Math.random();
randomNumber2*=6;
randomNumber2=Math.floor(randomNumber2)+1;
var randomDiceImage2="dice"+randomNumber2+".png";
var randomImageSource2=randomDiceImage2;
document.querySelector(".img2").setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML="🚩Player 2 Wins!";
}
else{
  document.querySelector("h1").innerHTML="Draw!";
}
