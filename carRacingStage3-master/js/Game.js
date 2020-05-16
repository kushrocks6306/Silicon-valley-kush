class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }


    
    if(player.gender==="male"){
      player1.addImage("boy",boy_img);
    }
    else if(player.gender==="female"){
      player1.addImage("girl",girl_img)
    }
    
    player2 = createSprite(300,200);

    if(player.gender==="male"){
      player2.addImage("boy",boy_img);
    }
    else if(player.gender==="female"){
      player2.addImage("girl",girl_img)
    };

    player3 = createSprite(500,200);

    if(player.gender==="male"){
      player3.addImage("boy",boy_img);
    }
    else if(player.gender==="female"){
      player3.addImage("girl",girl_img)
    }
    player4 = createSprite(700,200);

    if(player.gender==="male"){
      player4.addImage("boy",boy_img);
    }
    else if(player.gender==="female"){
      player4.addImage("girl",girl_img);
    }
    players=[player1,player2,player3,player4];
    compPlayer1=createSprite(200,200);
    compPlayer1.addImage("boy",boy_img);
  
    compPlayer2=createSprite(200,200);
    compPlayer2.addImage("boy",boy_img);

    compPlayer3=createSprite(200,200);
    compPlayer3.addImage("girl",girl_img);

    compPlayer4=createSprite(200,200);
    compPlayer4.addImage("boy",boy_img);

    compPlayer5=createSprite(200,200);
    compPlayer5.addImage("boy",boy_img);
  }
  
play(){
    form.hide();
    form.greeting.hide();
    Player.getPlayerInfo();
    player.getCarsAtEnd();
    
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(track,0,0,displayWidth,displayHeight);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175 ;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        players[index-1].x = x;
        players[index-1].y = y;
       // console.log(index, player.index)

       
        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(player.distance > 3860){
      gameState = 2;
      player.rank +=1
      Player.updateCarsAtEnd(player.rank)
    }
    player1 = createSprite(displayWidth/2+100,displayHeight/2-200);
    player1.addImage("boy",boy_img);
    drawSprites();
  }

  end(){
    console.log("Game Ended");
    console.log(player.rank);
  }
}