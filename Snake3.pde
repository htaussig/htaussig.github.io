
Snake snake;
boolean alive = true;
int snakeLength = 5;
Food food;

final int X = 1;
final int Y = 2;
final int Z = 3;
  
final int W = 4;
final int A = 5;
final int S = -4;
final int D = -5;


final float gridSize = 16;
final float gridBoxSize = Snake.limbSize + Snake.limbSpacing;
final float boxSize = (gridBoxSize) * gridSize;

float angle = 0;
float xmag, ymag = 0;
float newXmag, newYmag = 0; 

final float CAMERA = 3.1 / 4;
final float DEPTH = 596;
//float camX, camY, camZ = 0;
//float nextCamX, nextCamY, nextCamZ = 0;

ArrayList<float[]> cameraList;

final static float threshold = radians(3);
final static float angleChange = radians(2.2);

final static float gridSpacing = 8; //how many rows the grid skips before creating a line

float[] cams = new float[3];
float[] nextCams = new float[3];


void setup(){
 size(800, 800, P3D);
 background(0);
 noStroke();
 frameRate(60);
 snake = new Snake(0, 0, 0, snakeLength);
 food = new Food(gridSize, snake);
 cameraList = new ArrayList<float[]>();
 
 f = createFont("Arial", 22);
 
 // Variable to store text currently being typed
  String typing = "";
}

void draw(){ 
    background(0); 
     
    cameraStuff();
    noFill();
    drawAxes();
    drawGrid();
    stroke(255,255,255);
    box(boxSize);
    noStroke();
    
    
    if(frameCount % 8 == 0 && alive){
      checkDeath();
      snake.move();
      checkEat();  //not sure if it should be before or after snake.move
    }
    food.display();
    snake.display();

  if(!alive){
    cameraList.clear();
    if(isScoreMenu){
      drawNameScreen();
    }
    else{
      drawClickAgain();
    }
  }
  
}

void checkDeath(){
  Limb front = snake.limbs.get(0);
  
  for(Limb limb : snake.limbs){
    if(limb != front && limb.x == front.x && limb.y == front.y && limb.z == front.z){
     die(); 
    }
  }
  
  float bound = (boxSize / 2);  //because the snake is centered and not on the edge
  
  if(front.x < -boxSize / 2 || front.y < -boxSize / 2 || front.z < -boxSize / 2 ||
  front.x > bound || front.y > bound || front.z > bound){
    die();
  }
}

void die(){
  alive = false;
  score = snake.limbs.size();
  isScoreMenu = true;
  cameraList.clear();
}

void drawAxes(){
  stroke(232, 25, 25);
  line(0,0,0, boxSize / 2, 0, 0);
  
  stroke(237, 123, 30);
  line(0,0,0, -boxSize / 2, 0, 0);
  
  stroke(18, 229, 39);
  line(0,0,0, 0, boxSize / 2, 0);
  
  stroke(246, 249, 24);
  line(0,0,0, 0, -boxSize / 2, 0);
  
  stroke(23, 23, 249);
  line(0,0,0, 0, 0, boxSize / 2);
  
  stroke(192, 23, 249);
  line(0,0,0, 0, 0, -boxSize / 2);
}

void drawGrid(){
  stroke(255, 40);
  for(int k = 0; k < 3; k++){
    pushMatrix();
    if(k == 1){
      rotateZ(radians(90));
    }
    else if(k == 2){
      rotateY(radians(90));
    }
    
    for(int i = 0; i <= gridSize; i += gridSpacing){ 
      float y = (i - (gridSize / 2.0)) * gridBoxSize;
      
      for(int j = 0; j <= gridSize; j += gridSpacing){
        float x = boxSize / 2;
        float z = (j - (gridSize / 2.0)) * gridBoxSize;
        
          line(x, y, z, -x, y, z);
        
      }
    }
    popMatrix();
  }
}

void cameraStuff(){

  camera(boxSize * CAMERA, -boxSize * CAMERA, DEPTH, 0, 0, 0, 0, 1, 0);

  translate(20, -30, 0);

  slowRotate();

  ambientLight(128, 128, 128);
  directionalLight(242, 181, 181, -2, 1, 3);
  directionalLight(186, 242, 241, 3, -1, -2);
  
  
}

void slowRotate(){
  
  nextCams[0] = snake.camX;
  nextCams[1] = snake.camY;
  nextCams[2] = snake.camZ;
  
  for(int i = 0; i < cams.length; i++){
    float nextCam = nextCams[i];
    float cam = cams[i];
  
    float difference = nextCam - cam;
    
    if(abs(difference) >= PI){
     if(difference < 0){
       difference += PI * 2;
     }
     else{
      difference -= PI * 2; 
     }
    }
    
     if(difference > radians(3)){
        cam += radians(2);
      }
      else if(difference < -radians(3)){
        cam -= radians(2);
      }
      else{
       cam = nextCam; 
      }
    
    
    cams[i] = cam;
     nextCams[i] = nextCam;
  }
  
  /*rotateX(cams[0]);
  rotateY(cams[1]);
  rotateZ(cams[2]);*/
  
  
  for(float[] axisDegree : cameraList){  //could make these their own object
    
    float axis = axisDegree[0];
    float degrees = axisDegree[1];
    float degreeTarget = axisDegree[2];
    float difference = degreeTarget - degrees;
    
    if(axisDegree[1] != degreeTarget){ //not a necessary line but lets most of the list skip this step quickly
      if(difference <= -threshold){
        axisDegree[1] -= angleChange;
      }
      else if(difference >= threshold){
        axisDegree[1] += angleChange;
      }
      else{
       axisDegree[1] = degreeTarget; 
      }
    }
    
    if(axis == X){
      rotateX(degrees);
    }
    else if(axis == Y){
      rotateY(degrees);
    }
    
  }
  
  
  
}
  



void checkEat(){
  Limb front = snake.limbs.get(0);
  
  if(front.x == food.x && front.y == food.y && front.z == food.z){
    ate();
  }
}

void ate(){
  snake.addLimbs(4); 
  food.newPosition();
}

void mousePressed(){
  if(!alive){
    if(isScoreMenu){
     recordScore("3dw4rd"); 
    }
    setup();
    alive = true; 
  }
}

void keyPressed(){
  
  if(alive){
      if(key == 'w'){
    snake.setDirection(W); 
     }
     else if(key == 'd'){
      snake.setDirection(D); 
     }
     else if(key == 's'){
      snake.setDirection(S); 
     }
     else if(key == 'a'){
      snake.setDirection(A); 
      }
 
       /*if(key == ' '){
        ate();   
       }*/
  }
  else if(isScoreMenu && key == '\n') {
    if(!typing.equals("")){
      //recordScore(typing);
      isScoreMenu = false;
    }
  } 
  else if(key == 8){
    int end = typing.length() - 1;
      
    if(end >= 0){
      typing = typing.substring(0, typing.length() - 1);
    }
    else{
     typing = ""; 
    }
    
  }
  else if(key <= 'z' && key >= 'A' && key != ':'){ //a colon would mess up the leaderboards
    // Otherwise, concatenate the String
    // Each character typed by the user is added to the end of the String variable.
    typing = typing + key; 
  }
}

 


// Variable to store text currently being typed
String typing = "";
int score;
boolean isScoreMenu = false;
PFont f;

ArrayList<String> highScores= new ArrayList<String>();

private String fileName = "LeaderBoard.txt";
  private String helperFile = "helper.txt";

void drawNameScreen(){
 
    int indent = (int) (-boxSize / 2) + 25;
    
    // Set the font and fill for text
    textFont(f);
    fill(13, 232, 17);
    
    // Display everything
    translate(0, -boxSize / 2, boxSize / 2);
    text("You got a score of " + score + "!", indent, 40);
    text("Enter your name to save your high score! \nHit enter to save. ", indent, 80);
    text("Name: " + typing,indent, 170); 
}

void drawClickAgain(){
    int indent = (int)  + 25;
    
    textFont(f);
    fill(16, 222, 229);
    translate(0, -boxSize / 2, boxSize / 2);
    text("Click to play again!", indent, 40);
}

void updateLeaderBoard(PrintWriter wr, String name){
  String newEntry = name + ": " + score;
  for(int i = 0; i < highScores.size(); i++){
    String scoreName = highScores.get(i);
    
    int scoreIndex = scoreName.indexOf(':') + 2;
    String oldScoreString = scoreName.substring(scoreIndex);
    int oldScore = getNumericValue(oldScoreString);
    
    if(score > oldScore){
     highScores.add(i, newEntry);
     break;
    }
    else if(highScores.get(highScores.size() - 1) == scoreName){
     highScores.add(newEntry); 
     break;
    }
  }
  printArray(highScores);
}

int getNumericValue(String numString){
  int num = 0;
  int length = numString.length();
  for(int i = 0; i < length; i++){
    num += Character.getNumericValue(numString.charAt(i)) * Math.pow(10, length - 1);
  }
  return num;
}

private void recordScore(String name) {
    BufferedReader rd = openFile(fileName);
    int i = 0;
    
    try {
      
      PrintWriter wr = createWriter(helperFile);
      
      while (true) {
        String line = rd.readLine();
        if(line == null) break;
        wr.println(line);
      }
      
      //wr.println("it worked");
      
      rd.close();
      wr.close();
  
    } catch (IOException ex) {
      //throw ex;
      println("error");   //should throw something here
    } 
    
    
    rd = openFile(helperFile);
    
    try {
      
      PrintWriter wr = createWriter(fileName);
      
     
      while (true) {
        String line = rd.readLine();
        if(line == null) break;
        highScores.add(line);
        i++;
      }
      
      updateLeaderBoard(wr, name);
      
      for(String scoreName : highScores){
       wr.println(scoreName); 
      }
      
      highScores.clear();  //in case you play again
      
      rd.close();
      wr.close();
  
    } catch (IOException ex) {
      println("error");
      //throw ex;
    }
  }
  
  private BufferedReader openFile(String file){
    
    BufferedReader rd = null;
    
    while(rd == null){
      try{
        rd = createReader(file);
      } catch (Exception ex) {
        println("Cannot find data storing file");
      }
    }
    return rd;
    
  }
  
 
class Food{
  float gridSize; 
  float x, y, z;
 static final float size = Snake.limbSize;
 static final float limbSpacing = Snake.limbSpacing;
 Snake snake;
 
  Food(float boxSizein, Snake snakein){
    gridSize = boxSizein;
    snake = snakein;
    
    newPosition();
  }
  
  void newPosition(){
    setNewPos();
    
    for(Limb limb : snake.limbs){
      if(x == limb.x && y == limb.y && z == limb.z){
      newPosition();
      return;
      }
    }
    
  }
  
  private void setNewPos(){
    x = ((int) random(-gridSize / 2.0, gridSize / 2.0)) * (size + limbSpacing) + gridBoxSize / 2.0;
    y = ((int) random(-gridSize / 2.0, gridSize / 2.0)) * (size + limbSpacing) + gridBoxSize / 2.0;
    z = ((int) random(-gridSize / 2.0, gridSize / 2.0)) * (size + limbSpacing) + gridBoxSize / 2.0;
  }
  
  void display(){
    pushMatrix();
    translate(x, y, z);
    fill(255, 255, 50);
    box(size);
    popMatrix();
  }
  
}


class Limb{
   float x, y, z;
 float size = Snake.limbSize;
 int red; //for gradient
 
 Limb(float xin, float yin, float zin, int rin){
  x = xin;
  y = yin;
  z = zin;
  red = rin;
 }
  
  void setPos(float newX, float newY, float newZ){
   x = newX;
   y = newY;
   z = newZ;
  }
  
  void display(){
    pushMatrix();
   translate(x, y, z);
   fill(red, 0, 255); 
   box(size);
   popMatrix();
  }
  
}

class Snake{
  
final int X = 1;
final int Y = 2;
final int Z = 3;
  
final int W = 4;
final int A = 5;
final int S = -4;
final int D = -5;
  
  
  float x, y, z;
  static final int limbSize = 24;
  static final int limbSpacing = 5;
  
  float camX, camY, camZ = 0;
  
  int direction = -Z;
  int upD = -Y;
  int rightD = X;
  int nextDirectionBut = 0;
  int growing = 0;
  
  int red;
  boolean redIncreasing;  //this are for the gradient
  
  ArrayList<Limb> limbs = new ArrayList<Limb>();
  
 Snake(int xin, int yin, int zin, int lengthin){
   x = xin + gridBoxSize / 2.0;
   y = yin + gridBoxSize / 2.0;
   z = boxSize / 2.0 - gridBoxSize / 2.0;
   
   for(int i = 0; i < lengthin; i++){
     Limb limb = new Limb(x, y, z, getRed());
     limbs.add(0, limb);
     z -= limbSize + limbSpacing;
   }
   z += limbSize + limbSpacing;
 }
 
 void setDirection(int newD){     
   nextDirectionBut = newD;
  }
  
  void getNextDirection(){
   
    if(nextDirectionBut == 0){
     return; 
    }
    
    int button = nextDirectionBut;
    
    shiftCamera(button, direction, upD, rightD);
    
    if(button == W){
     int temp = direction;
     direction = upD;
     upD = -temp;
    }
    else if(button == S){
      int temp = upD;
      upD = direction;
      direction = -temp;
    }
    else if(button == D){
      int temp = direction;
      direction = rightD;
      rightD = -temp;
    }
    else if(button == A){
      int temp = rightD;
      rightD = direction;
      direction = -temp;
    }
   
   
   
  }

  void shiftCamera(int button, int direction1, int upD1, int rightD1){
  
    //println("direction: " + direction + ", up: " + upD1 + " right: " + rightD1);
   
   float[] axisDegree = new float[3];
    
   axisDegree[1] = 0;
   int degrees = 90;
   
    if(button == D){
      //println("rotating up axis 90 degrees");
      axisDegree[0] = Y;
      
      
    }
    else if(button == A){
      //println("rotating up axis -90 degrees");
      axisDegree[0] = Y;
      degrees *= -1;
      
    }
    else if(button == W){
     // println("rotating right axis 90 degrees");
      axisDegree[0] = X;
      
    }
    else if(button == S){
      //println("rotating right axis -90 degrees");
     axisDegree[0] = X;
      degrees *= -1;
    }
    
    axisDegree[2] = radians(degrees);   
    cameraList.add(0, axisDegree);
    
  }
 
 
 int getRed(){
  if(red <= 0){
   redIncreasing = true;
  }
  else if(red >= 255){
   redIncreasing = false; 
  }
  if(redIncreasing){
   return red += 2; 
  }
  return red -= 2;
 }
 
 void move(){
   getNextDirection();
    Limb backLimb = limbs.get(limbs.size() - 1);
    setNextPos();
    Limb frontLimb = new Limb(x, y, z, getRed());
    frontLimb.setPos(x, y, z);
    if(growing == 0){
      limbs.remove(backLimb);
    }
    else{
     growing--;
    }
    limbs.add(0, frontLimb);
    
    nextDirectionBut = 0;
  }
  
  private void setNextPos(){
    if(direction == X){
      x += limbSize + limbSpacing;
    }
    else if(direction == -X){
      x -= limbSize + limbSpacing;
    }
    else if(direction == -Y){
      y -= limbSize + limbSpacing;
    }
    else if(direction == Y){
      y += limbSize + limbSpacing;
    }
    else if(direction == -Z){
      z -= limbSize + limbSpacing;
    }
    else if(direction == Z){
      z += limbSize + limbSpacing;
    }
   
    //println(x, y, z);
  }
 
 void addLimbs(int temp){
    growing += temp;
  }
 
 void display(){
    for(Limb limb: limbs){
      limb.display();
    }
  }
 
}
