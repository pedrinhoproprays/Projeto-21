var tela;
var bloco1,bloco2,bloco3,bloco4;
var bola, arestas;
var music;




function preload(){
    // carregue o som aqui
    music=loadSound("music.mp3");
}

function setup(){
    tela = createCanvas(800,600);

    bloco1 = createSprite(100,580,180,30);
    bloco1.shapeColor = "blue";

    bloco2 = createSprite(300,580,180,30);
    bloco2.shapeColor = "orange";

    bloco3 = createSprite(500,580,180,30);
    bloco3.shapeColor = "green";

    bloco4 = createSprite(700,580,180,30);
    bloco4.shapeColor = "red";
    
    bola = createSprite(random(20,750),100, 40,40);
    bola.shapeColor = "white";
    //escreva o código para adicionar velocityX e velocityY
    bola.velocityX=4;
    bola.velocityY=6;

}

function draw() {
    background(rgb(169,169,169));
    arestas=createEdgeSprites();
    bola.bounceOff(arestas);

    if(bola.isTouching(bloco1) && bola.bounceOff(bloco1)){

        bola.shapeColor = "blue";
        music.play();
    }
    else if(bola.isTouching(bloco2)){


        bola.shapeColor = "orange";
        bola.velocityY=0;
        bola.velocityX=0;
        music.stop();
        
       


    }
    else if(bola.isTouching(bloco3) && bola.bounceOff(bloco3)){
        bola.shapeColor = "green";
        music.play();
    }
    else if(bola.isTouching(bloco4) && bola.bounceOff(bloco4)){
        bola.shapeColor = "red";
        music.play();


    
    }

    drawSprites();

}
