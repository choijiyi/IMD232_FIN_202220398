let circles = [];

// let canvaswidth = 300;
// let canvasheight = 200;
let speed = 0.08;
let current = []; //웨이브의 원의 현재 각도
let waveY = []; // 웨이브의 높이 (웨이브를 구성하는 원의 현재 높이)
let max = Math.random() * 100 + 250; // 웨이브를 구성하는 원의 최대높이 
let y1 = 0; // 베지어 곡선의 y좌표 초기화
let y2 = 0; // 베지어 곡선의 y좌표 초기화
let counter = 3; //웨이브의 갯수

function setup() {
 setCanvasContainer('canvas', windowWidth, windowHeight, true); // 캔버스 생성
 noStroke(); // 선 없음

 colorMode (RGB, 250, 250, 250, 1); //컬러모드

 //컬러 랜덤값의 범위
  this. r = random(0); 
  this. g = random(100, 150);
  this. b = random(100, 200);
  this. a = random(0.05, 0.5);

  background('white'); //배경
}

function draw() {
 background('white'); // 배경

 for (let i = circles.length - 1; i >= 0; i--) { //작은 원 생성해서 캔버스 벗어나면 사라지게
    circles[i].update();
    circles[i].display();
    
    if (circles[i].y < 0) {
      circles.splice(i, 1);
    }
  }

  //마우스를 누르면 원이 나오게 설정
  if(mouseIsPressed) { 
    let diameter = random(10, 30); //원의 지름 랜덤설정
    let x = mouseX; //원이 마우스와 같은 좌표에서 생성되도록 설정
    let y = mouseY;
    let speed = random(2, 10); //원의 속도 랜덤설정
    let acc = 0.1; //원의 가속도 값

    let circle = new Circle(x, y, diameter, speed, acc); // 클래스에서 원 불러와서 circles에 넣기
    circles.push(circle);
  }

 for (let i = 0; i < counter + 2; i++) { //웨이브를 구성하는 원의 현재각도 넣기
   current.push(i);
 } 

 // 마우스를 눌렀을 때 웨이브가 움직이게
 if (mouseIsPressed) {
     current = current.map(function (currentrentValue) {
       return currentrentValue + speed;
     });
 }

 endY = height / 1.5; //웨이브의 양 끝점의 위치 설정

 // sin함수 이용해서 웨이브를 구성하는 원이 위 아래로 움직이게끔 만들기
 for (let a = 0; a < counter; a++) {
   for (let b = 0; b < 4; b++) {
     if (b % 2 == 0) {
       waveY.push(endY + sin(current[a + b]) * (max + 300));
     } else {
       waveY.push(endY + sin(current[a + b]) * max);
     }
   }
 } 

 //웨이브 생성하기
 function Wave(index) {
   cx1 = ((width / 5) * 3) / 2; // 베지어 곡선의 x좌표
   cx2 = ((width / 5) * 5) / 2;
   y1 = 4 * (index-1); // 베지어 곡선의 y좌표
   y2 = 2 + 4 * (index-1);
   fill(this.r, this.g, this.b, this.a); //웨이브에 색 넣기
   smooth(); // 도형 부드럽게 만들어주기 얘가 있으면 계단현상이 사라짐
   beginShape(); // 웨이브 좌표 설정
   vertex((width / 5) * 0, endY); // 캔버스의 가장 왼쪽 끝, 웨이브의 양 끝점 
   bezierVertex(cx1, waveY[y1], cx2, waveY[y2], (width / 5) * 5, endY); // 베지어 곡선 좌표
   vertex((width / 5) * 5, height); // 캔버스의 가장 오른쪽 끝 가장아래 좌표
   vertex((width / 5) * 0, height); // 캔버스의 가장 왼쪽 끝 가장 아래 좌표
   endShape(CLOSE);
 }

 Wave(1); //웨이브 만들기
 Wave(2);
 Wave(3);

 waveY = []; //여기에 베지어 곡선의 y좌표가 들어옴
}

// let circles = [];

// // let canvaswidth = 300;
// // let canvasheight = 200;
// let speed = 0.08;
// let current = [];
// let waveY = [];
// let max = Math.random() * 100 + 250;
// let y1 = 0;
// let y2 = 0;
// let counter = 3;

// function setup() {
//   setCanvasContainer('canvas', width, height, true);
//   noStroke();
  
//   colorMode (RGB, 250, 250, 250, 1);
  
//   this. r = random(0);
//   this. g = random(100, 150);
//   this. b = random(100, 200);
//   this. a = random(0.05, 0.5);
  
//   background('white');
// }

// function draw() {
//   background('white');
  
//   for (let i = circles.length - 1; i >= 0; i--) {
//     circles[i].update();
//     circles[i].display();
    
//     if (circles[i].y < 0) {
//       circles.splice(i, 1);
//     }
//   }
  
//   if(mouseIsPressed) {
//     let diameter = random(10, 30);
//     let x = mouseX;
//     let y = mouseY;
//     let speed = random(2, 10);
//     let acc = 0.1;
    
//     let circle = new Circle(x, y, diameter, speed, acc);
//     circles.push(circle);
//   }
  
//   for (let i = 0; i < counter + 2; i++) {
//     current.push(i);
//   } 
  
//   if (mouseIsPressed) {
//     current = current.map(function (currentrentValue) {
//       return currentrentValue + speed;
//     });
//   }
  
//   endY = height / 1.5; 
  
//   for (let a = 0; a < counter; a++) {
//     for (let b = 0; b < 4; b++) {
//       if (b % 2 == 0) {
//         waveY.push(endY + sin(current[a + b]) * (max + 300));
//       } else {
//         waveY.push(endY + sin(current[a + b]) * max);
//       }
//     }
//   } 
  
//   function Wave(index) {
//     cx1 = ((width / 5) * 3) / 2; 
//     cx2 = ((width / 5) * 5) / 2;
//     y1 = 4 * (index-1);
//     y2 = 2 + 4 * (index-1);
//     fill(this.r, this.g, this.b, this.a);
//     smooth();
//     beginShape();
//     vertex((width / 5) * 0, endY);
//    bezierVertex(cx1, waveY[y1], cx2, waveY[y2], (width / 5) * 5, endY);
//    vertex((width / 5) * 5, height); 
//    vertex((width / 5) * 0, height); 
//    endShape(CLOSE);
//   }
  
//   Wave(1);
//   Wave(2);
//   Wave(3);
  
//   waveY = [];
// }