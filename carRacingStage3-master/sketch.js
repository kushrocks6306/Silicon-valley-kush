var canvas, backgroundImage;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var player1, player2, player3, player4, player5, players;
var compPlayer1, compPlayer2, compPlayer3, compPlayer4, compPlayer5;

var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  track = loadImage("/images/Bg.jpeg");
  boy_img = loadImage("images/Boy.png");
  girl_img = loadImage("images/girl.png");
  /*car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
  ground = loadImage("../images/ground.png");*/
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
