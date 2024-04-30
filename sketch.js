let skywalkers = [];
let grasswalkers = [];
let cloudwalkers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  for (let i = 0; i < 40; i++) {
    let skyx = random(0, width);
    let skyy = random(0, windowHeight/2);
    skywalkers[i] = new Skywalker(skyx, skyy); 
  }

  for (let i = 0; i < 40; i++) {
    let grassx = random(0, width);
    let grassy = random(windowHeight/2, height);
    grasswalkers[i] = new Grasswalker(grassx, grassy);
  }
  for (let i = 0; i < 8; i++) {
    let cloudx = random(0, width);
    let cloudy = random(0, windowHeight/2);
    cloudwalkers[i] = new Cloudwalker(cloudx, cloudy);
  }
}

function draw() {
  for (let x = 0; x < skywalkers.length; x++) {
    skywalkers[x].step();
    skywalkers[x].show();
    skywalkers[x].checkEdges();
  }

  for (let x = 0; x < grasswalkers.length; x++) {
    grasswalkers[x].step();
    grasswalkers[x].show();
    grasswalkers[x].checkEdges();
  }

  for (let x = 0; x < cloudwalkers.length; x++) {
    cloudwalkers[x].step();
    cloudwalkers[x].show();
    cloudwalkers[x].checkEdges();
  }
}

class Skywalker {
  constructor(x, y) { 
    this.x = x;
    this.y = y;
  }

  step() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }

  show() {
    strokeWeight(5);
    stroke(137, 231, 250);
    point(this.x, this.y);
  }

  checkEdges(){
    if (this.y > windowHeight/2){
      this.y = windowHeight/2;
    }
    }
  }

  class Grasswalker {
    constructor(x, y){
      this.x = x;
      this.y = y;
  }
  
  step(){
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }

  show() {
    strokeWeight(5);
    stroke(53, 204, 81);
    point(this.x, this.y);
  }

  checkEdges(){
    if (this.y < windowHeight/2){
      this.y = windowHeight/2
    }
  }
}

class Cloudwalker {
    constructor(x, y){
      this.x = x;
      this.y = y;
  }
  
  step(){
    this.x += random(-3, 3);
    this.y += random(-2, 2);
  }

  show() {
    strokeWeight(3);
    stroke(255);
    point(this.x, this.y);
  }

  checkEdges(){
    if (this.y > windowHeight/2){
      this.y = windowHeight/2
    }
  }
 }