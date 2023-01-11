//p5.js
let r = 50; //円の直径

//最初に描かれる図形
function setup() {
  let myCanvas  = createCanvas(50*14 + 50, 50*14 + 50);
  myCanvas.parent('p5CanvasContainer');
  background(225);
  //line(25, 50 , 50*14 + 25 ,50);
  //進行方向矢印
  line(25,50,25,700);
  line(25,50,40,75);
  line(25,50,10,75);
  strokeWeight(2);
  noLoop();
}



//p5.jsでの図式
function draw() {

  //frontの馬番登録
  const values_fr = [3];
  //leadingの馬番登録
  const values_le = [12,10,9,1,8,6,2,13];
  //middleの馬番登録
  const values_mi = [7,5,4];
  //backの馬番登録
  const values_ba = [11,14,15];
  
  //front の範囲
  //(0,0, 500,150)

  //馬番から色に変換 = color_conver
  function color_conver_fr() {
    if (values_fr == 1) {
      var color_fr = color(255,255,255); //white #ffffff
    }  else if (values_fr == 2) {
      var color_fr = color(230,230,250); //lavender #e6e6fa	
    } else if (values_fr == 3){
      var color_fr = color(0,0,0); //black #000000
    } else if (values_fr == 4) {
      var color_fr = color(128,128,128); //gray #808080	
    } else if (values_fr == 5) {
      var color_fr = color(220,20,60); //crimson #dc143c
    } else if (values_fr == 6) {
      var color_fr = color(240,128,128); //lightcoral #f08080
    } else if (values_fr == 7) {
      var color_fr = color(30,144,255); //dodgerblue #1e90ff	
    } else if (values_fr == 8) {
      var color_fr = color(135,206,235); //skytblue #87ceeb
    } else if (values_fr == 9) {
      var color_fr = color(255,255,0); //yellow #ffff00
    } else if (values_fr == 10) {
      var color_fr = color(255,239,213); //papaywhip #ffefd5
    } else if (values_fr == 11) {
      var color_fr = color(34,139,34);//forestgreen #228b22
    } else if (values_fr == 12) {
      var color_fr = color(144,238,144); //lightgreen #90ee90
    } else if (values_fr == 13) {
      var color_fr = color(255,165,0); //orange #ffa500
    } else if (values_fr == 14) {
      var color_fr = color(255,228,181); //moccasin #ffe4b5
    } else if (values_fr == 15) {
      var color_fr = color(210, 105, 30); //chocolate #d2691e
    } else if (values_fr == 16) {
      var color_fr = color(255,182,193); //lightpink #ffb6c1
    } else if (values_fr == 17) {
      var color_fr = color(221,160,221); //plum #dda0dd
    } else {
      var color_fr = color(255,105,180); //hotpink #ff69b4
    }
    return color_fr;
  } 
  var colord_fr  = color_conver_fr();
  fill(colord_fr);
  circle(100,75,r);


  //leading の範囲
  //(0,150, 500,300)

  //console.log(values_le);
  //leの個数判定
  //console.log(values_le.length)
  var length_le = values_le.length
  var le_first = length_le/2 - 1 ;
  var le_second = parseInt(length_le/2 + 1) ;
  //console.log(le_second);
  //二列でcircleを記述
  //偶数奇数判定
  if (length_le % 2 == 1 ) {
    //奇数
    //1列目
    for(let i = 0; i< le_first ;i++){
      //console.log(values_le[i])
      function color_conver_le_first() {
        if (values_le[i] == 1) {
          var color_le = color(255,255,255); //white #ffffff
        }  else if (values_le[i] == 2) {
          var color_le = color(230,230,250); //lavender #e6e6fa	
        } else if (values_le[i] == 3){
          var color_le = color(0,0,0); //black #000000
        } else if (values_le[i] == 4) {
          var color_le = color(128,128,128); //gray #808080	
        } else if (values_le[i] == 5) {
          var color_le = color(220,20,60); //crimson #dc143c
        } else if (values_le[i] == 6) {
          var color_le = color(240,128,128); //lightcoral #f08080
        } else if (values_le[i] == 7) {
          var color_le = color(30,144,255); //dodgerblue #1e90ff	
        } else if (values_le[i] == 8) {
          var color_le = color(135,206,235); //skytblue #87ceeb
        } else if (values_le[i] == 9) {
          var color_le = color(255,255,0); //yellow #ffff00
        } else if (values_le[i] == 10) {
          var color_le = color(255,239,213); //papaywhip #ffefd5
        } else if (values_le[i] == 11) {
          var color_le = color(34,139,34);//forestgreen #228b22
        } else if (values_le[i] == 12) {
          var color_le = color(144,238,144); //lightgreen #90ee90
        } else if (values_le[i] == 13) {
          var color_le = color(255,165,0); //orange #ffa500
        } else if (values_le[i] == 14) {
          var color_le = color(255,228,181); //moccasin #ffe4b5
        } else if (values_le[i] == 15) {
          var color_le = color(210, 105, 30); //chocolate #d2691e
        } else if (values_le[i] == 16) {
          var color_le = color(255,182,193); //lightpink #ffb6c1
        } else if (values_le[i] == 17) {
          var color_le = color(221,160,221); //plum #dda0dd
        } else {
          var color_le = color(255,105,180); //hotpink #ff69b4
        }
        return color_le;
      }
      var colord_le_first = color_conver_le_first();
      fill(colord_le_first);
      circle(100 + i * 50, 200 , r);
    }
    //2列目
    for(let i = le_second; i< length_le + 1 ;i++){
      //console.log(values_le[i - 1]);
      function color_conver_le_second() {
        if (values_le[i - 1] == 1) {
          var color_le = color(255,255,255); //white #ffffff
        }  else if (values_le[i - 1] == 2) {
          var color_le = color(230,230,250); //lavender #e6e6fa	
        } else if (values_le[i - 1] == 3){
          var color_le = color(0,0,0); //black #000000
        } else if (values_le[i - 1] == 4) {
          var color_le = color(128,128,128); //gray #808080	
        } else if (values_le[i - 1] == 5) {
          var color_le = color(220,20,60); //crimson #dc143c
        } else if (values_le[i - 1] == 6) {
          var color_le = color(240,128,128); //lightcoral #f08080
        } else if (values_le[i - 1] == 7) {
          var color_le = color(30,144,255); //dodgerblue #1e90ff	
        } else if (values_le[i - 1] == 8) {
          var color_le = color(135,206,235); //skytblue #87ceeb
        } else if (values_le[i - 1] == 9) {
          var color_le = color(255,255,0); //yellow #ffff00
        } else if (values_le[i - 1] == 10) {
          var color_le = color(255,239,213); //papaywhip #ffefd5
        } else if (values_le[i - 1] == 11) {
          var color_le = color(34,139,34);//forestgreen #228b22
        } else if (values_le[i - 1] == 12) {
          var color_le = color(144,238,144); //lightgreen #90ee90
        } else if (values_le[i - 1] == 13) {
          var color_le = color(255,165,0); //orange #ffa500
        } else if (values_le[i - 1] == 14) {
          var color_le = color(255,228,181); //moccasin #ffe4b5
        } else if (values_le[i - 1] == 15) {
          var color_le = color(210, 105, 30); //chocolate #d2691e
        } else if (values_le[i - 1] == 16) {
          var color_le = color(255,182,193); //lightpink #ffb6c1
        } else if (values_le[i - 1] == 17) {
          var color_le = color(221,160,221); //plum #dda0dd
        } else {
          var color_le = color(255,105,180); //hotpink #ff69b4
        }
        return color_le;
      }
      var colord_le_second = color_conver_le_second();
      fill(colord_le_second);
      circle(100 + (i - le_second)  * 50, 250 , r);
    }
  } else {
    //偶数で
    //1列目
    for(let i = 0; i< le_first + 1 ;i++){
      //console.log(values_le[i])
      function color_conver_le_first() {
        if (values_le[i] == 1) {
          var color_le = color(255,255,255); //white #ffffff
        }  else if (values_le[i] == 2) {
          var color_le = color(230,230,250); //lavender #e6e6fa	
        } else if (values_le[i] == 3){
          var color_le = color(0,0,0); //black #000000
        } else if (values_le[i] == 4) {
          var color_le = color(128,128,128); //gray #808080	
        } else if (values_le[i] == 5) {
          var color_le = color(220,20,60); //crimson #dc143c
        } else if (values_le[i] == 6) {
          var color_le = color(240,128,128); //lightcoral #f08080
        } else if (values_le[i] == 7) {
          var color_le = color(30,144,255); //dodgerblue #1e90ff	
        } else if (values_le[i] == 8) {
          var color_le = color(135,206,235); //skytblue #87ceeb
        } else if (values_le[i] == 9) {
          var color_le = color(255,255,0); //yellow #ffff00
        } else if (values_le[i] == 10) {
          var color_le = color(255,239,213); //papaywhip #ffefd5
        } else if (values_le[i] == 11) {
          var color_le = color(34,139,34);//forestgreen #228b22
        } else if (values_le[i] == 12) {
          var color_le = color(144,238,144); //lightgreen #90ee90
        } else if (values_le[i] == 13) {
          var color_le = color(255,165,0); //orange #ffa500
        } else if (values_le[i] == 14) {
          var color_le = color(255,228,181); //moccasin #ffe4b5
        } else if (values_le[i] == 15) {
          var color_le = color(210, 105, 30); //chocolate #d2691e
        } else if (values_le[i] == 16) {
          var color_le = color(255,182,193); //lightpink #ffb6c1
        } else if (values_le[i] == 17) {
          var color_le = color(221,160,221); //plum #dda0dd
        } else {
          var color_le = color(255,105,180); //hotpink #ff69b4
        }
        return color_le;
      }
      var colord_le_first = color_conver_le_first();
      fill(colord_le_first);
      circle(100 + i * 50, 200 , r);
    }
    //2列目
    for(let i = le_second; i< length_le + 1 ;i++){
      //console.log(values_le[i - 1]);
      function color_conver_le_second() {
        if (values_le[i - 1] == 1) {
          var color_le = color(255,255,255); //white #ffffff
        }  else if (values_le[i - 1] == 2) {
          var color_le = color(230,230,250); //lavender #e6e6fa	
        } else if (values_le[i - 1] == 3){
          var color_le = color(0,0,0); //black #000000
        } else if (values_le[i - 1] == 4) {
          var color_le = color(128,128,128); //gray #808080	
        } else if (values_le[i - 1] == 5) {
          var color_le = color(220,20,60); //crimson #dc143c
        } else if (values_le[i - 1] == 6) {
          var color_le = color(240,128,128); //lightcoral #f08080
        } else if (values_le[i - 1] == 7) {
          var color_le = color(30,144,255); //dodgerblue #1e90ff	
        } else if (values_le[i - 1] == 8) {
          var color_le = color(135,206,235); //skytblue #87ceeb
        } else if (values_le[i - 1] == 9) {
          var color_le = color(255,255,0); //yellow #ffff00
        } else if (values_le[i - 1] == 10) {
          var color_le = color(255,239,213); //papaywhip #ffefd5
        } else if (values_le[i - 1] == 11) {
          var color_le = color(34,139,34);//forestgreen #228b22
        } else if (values_le[i - 1] == 12) {
          var color_le = color(144,238,144); //lightgreen #90ee90
        } else if (values_le[i - 1] == 13) {
          var color_le = color(255,165,0); //orange #ffa500
        } else if (values_le[i - 1] == 14) {
          var color_le = color(255,228,181); //moccasin #ffe4b5
        } else if (values_le[i - 1] == 15) {
          var color_le = color(210, 105, 30); //chocolate #d2691e
        } else if (values_le[i - 1] == 16) {
          var color_le = color(255,182,193); //lightpink #ffb6c1
        } else if (values_le[i - 1] == 17) {
          var color_le = color(221,160,221); //plum #dda0dd
        } else {
          var color_le = color(255,105,180); //hotpink #ff69b4
        }
        return color_le;
      }
      var colord_le_second = color_conver_le_second();
      fill(colord_le_second);
      circle(100 + (i - le_second)  * 50, 250 , r);
    }
  }
  
  //middle の範囲
  //(0,300,500,500)

  //miの個数判定
  //console.log(values_mi.length)
  var length_mi = values_mi.length
  var mi_first = length_mi/2 - 1 ;
  var mi_second = parseInt(length_mi/2 + 1) ;
  //console.log(mi_second);
  //二列でcircleを記述
  //偶数奇数判定
  if (length_mi % 2 == 1 ) {
    //奇数
    //1列目
    for(let i = 0; i< mi_first ;i++){
      //console.log(values_mi[i])
      function color_conver_mi_first() {
        if (values_mi[i] == 1) {
          var color_mi = color(255,255,255); //white #ffffff
        }  else if (values_mi[i] == 2) {
          var color_mi = color(230,230,250); //lavender #e6e6fa	
        } else if (values_mi[i] == 3){
          var color_mi = color(0,0,0); //black #000000
        } else if (values_mi[i] == 4) {
          var color_mi = color(128,128,128); //gray #808080	
        } else if (values_mi[i] == 5) {
          var color_mi = color(220,20,60); //crimson #dc143c
        } else if (values_mi[i] == 6) {
          var color_mi = color(240,128,128); //lightcoral #f08080
        } else if (values_mi[i] == 7) {
          var color_mi = color(30,144,255); //dodgerblue #1e90ff	
        } else if (values_mi[i] == 8) {
          var color_mi = color(135,206,235); //skytblue #87ceeb
        } else if (values_mi[i] == 9) {
          var color_mi = color(255,255,0); //yellow #ffff00
        } else if (values_mi[i] == 10) {
          var color_mi = color(255,239,213); //papaywhip #ffefd5
        } else if (values_mi[i] == 11) {
          var color_mi = color(34,139,34);//forestgreen #228b22
        } else if (values_mi[i] == 12) {
          var color_mi = color(144,238,144); //lightgreen #90ee90
        } else if (values_mi[i] == 13) {
          var color_mi = color(255,165,0); //orange #ffa500
        } else if (values_mi[i] == 14) {
          var color_mi = color(255,228,181); //moccasin #ffe4b5
        } else if (values_mi[i] == 15) {
          var color_mi = color(210, 105, 30); //chocolate #d2691e
        } else if (values_mi[i] == 16) {
          var color_mi = color(255,182,193); //lightpink #ffb6c1
        } else if (values_mi[i] == 17) {
          var color_mi = color(221,160,221); //plum #dda0dd
        } else {
          var color_mi = color(255,105,180); //hotpink #ff69b4
        }
        return color_mi;
      }
      var colord_mi_first = color_conver_mi_first();
      fill(colord_mi_first);
      circle(100 + i * 50, 400 , r);
    }
    //2列目
    for(let i = mi_second; i< length_mi + 1 ;i++){
      //console.log(values_mi[i - 1]);
      function color_conver_mi_second() {
        if (values_mi[i - 1] == 1) {
          var color_mi = color(255,255,255); //white #ffffff
        }  else if (values_mi[i - 1] == 2) {
          var color_mi = color(230,230,250); //lavender #e6e6fa	
        } else if (values_mi[i - 1] == 3){
          var color_mi = color(0,0,0); //black #000000
        } else if (values_mi[i - 1] == 4) {
          var color_mi = color(128,128,128); //gray #808080	
        } else if (values_mi[i - 1] == 5) {
          var color_mi = color(220,20,60); //crimson #dc143c
        } else if (values_mi[i - 1] == 6) {
          var color_mi = color(240,128,128); //lightcoral #f08080
        } else if (values_mi[i - 1] == 7) {
          var color_mi = color(30,144,255); //dodgerblue #1e90ff	
        } else if (values_mi[i - 1] == 8) {
          var color_mi = color(135,206,235); //skytblue #87ceeb
        } else if (values_mi[i - 1] == 9) {
          var color_mi = color(255,255,0); //yellow #ffff00
        } else if (values_mi[i - 1] == 10) {
          var color_mi = color(255,239,213); //papaywhip #ffefd5
        } else if (values_mi[i - 1] == 11) {
          var color_mi = color(34,139,34);//forestgreen #228b22
        } else if (values_mi[i - 1] == 12) {
          var color_mi = color(144,238,144); //lightgreen #90ee90
        } else if (values_mi[i - 1] == 13) {
          var color_mi = color(255,165,0); //orange #ffa500
        } else if (values_mi[i - 1] == 14) {
          var color_mi = color(255,228,181); //moccasin #ffe4b5
        } else if (values_mi[i - 1] == 15) {
          var color_mi = color(210, 105, 30); //chocolate #d2691e
        } else if (values_mi[i - 1] == 16) {
          var color_mi = color(255,182,193); //lightpink #ffb6c1
        } else if (values_mi[i - 1] == 17) {
          var color_mi = color(221,160,221); //plum #dda0dd
        } else {
          var color_mi = color(255,105,180); //hotpink #ff69b4
        }
        return color_mi;
      }
      var colord_mi_second = color_conver_mi_second();
      fill(colord_mi_second);
      circle(100 + (i - mi_second)  * 50, 450 , r);
    }
  } else {
    //偶数で
    //1列目
    for(let i = 0; i< mi_first + 1 ;i++){
      //console.log(values_mi[i])
      function color_conver_mi_first() {
        if (values_mi[i] == 1) {
          var color_mi = color(255,255,255); //white #ffffff
        }  else if (values_mi[i] == 2) {
          var color_mi = color(230,230,250); //lavender #e6e6fa	
        } else if (values_mi[i] == 3){
          var color_mi = color(0,0,0); //black #000000
        } else if (values_mi[i] == 4) {
          var color_mi = color(128,128,128); //gray #808080	
        } else if (values_mi[i] == 5) {
          var color_mi = color(220,20,60); //crimson #dc143c
        } else if (values_mi[i] == 6) {
          var color_mi = color(240,128,128); //lightcoral #f08080
        } else if (values_mi[i] == 7) {
          var color_mi = color(30,144,255); //dodgerblue #1e90ff	
        } else if (values_mi[i] == 8) {
          var color_mi = color(135,206,235); //skytblue #87ceeb
        } else if (values_mi[i] == 9) {
          var color_mi = color(255,255,0); //yellow #ffff00
        } else if (values_mi[i] == 10) {
          var color_mi = color(255,239,213); //papaywhip #ffefd5
        } else if (values_mi[i] == 11) {
          var color_mi = color(34,139,34);//forestgreen #228b22
        } else if (values_mi[i] == 12) {
          var color_mi = color(144,238,144); //lightgreen #90ee90
        } else if (values_mi[i] == 13) {
          var color_mi = color(255,165,0); //orange #ffa500
        } else if (values_mi[i] == 14) {
          var color_mi = color(255,228,181); //moccasin #ffe4b5
        } else if (values_mi[i] == 15) {
          var color_mi = color(210, 105, 30); //chocolate #d2691e
        } else if (values_mi[i] == 16) {
          var color_mi = color(255,182,193); //lightpink #ffb6c1
        } else if (values_mi[i] == 17) {
          var color_mi = color(221,160,221); //plum #dda0dd
        } else {
          var color_mi = color(255,105,180); //hotpink #ff69b4
        }
        return color_mi;
      }
      var colord_mi_first = color_conver_mi_first();
      fill(colord_mi_first);
      circle(100 + i * 50, 400 , r);
    }
    //2列目
    for(let i = mi_second; i< length_mi + 1 ;i++){
      //console.log(values_mi[i - 1]);
      function color_conver_mi_second() {
        if (values_mi[i - 1] == 1) {
          var color_mi = color(255,255,255); //white #ffffff
        }  else if (values_mi[i - 1] == 2) {
          var color_mi = color(230,230,250); //lavender #e6e6fa	
        } else if (values_mi[i - 1] == 3){
          var color_mi = color(0,0,0); //black #000000
        } else if (values_mi[i - 1] == 4) {
          var color_mi = color(128,128,128); //gray #808080	
        } else if (values_mi[i - 1] == 5) {
          var color_mi = color(220,20,60); //crimson #dc143c
        } else if (values_mi[i - 1] == 6) {
          var color_mi = color(240,128,128); //lightcoral #f08080
        } else if (values_mi[i - 1] == 7) {
          var color_mi = color(30,144,255); //dodgerblue #1e90ff	
        } else if (values_mi[i - 1] == 8) {
          var color_mi = color(135,206,235); //skytblue #87ceeb
        } else if (values_mi[i - 1] == 9) {
          var color_mi = color(255,255,0); //yellow #ffff00
        } else if (values_mi[i - 1] == 10) {
          var color_mi = color(255,239,213); //papaywhip #ffefd5
        } else if (values_mi[i - 1] == 11) {
          var color_mi = color(34,139,34);//forestgreen #228b22
        } else if (values_mi[i - 1] == 12) {
          var color_mi = color(144,238,144); //lightgreen #90ee90
        } else if (values_mi[i - 1] == 13) {
          var color_mi = color(255,165,0); //orange #ffa500
        } else if (values_mi[i - 1] == 14) {
          var color_mi = color(255,228,181); //moccasin #ffe4b5
        } else if (values_mi[i - 1] == 15) {
          var color_mi = color(210, 105, 30); //chocolate #d2691e
        } else if (values_mi[i - 1] == 16) {
          var color_mi = color(255,182,193); //lightpink #ffb6c1
        } else if (values_mi[i - 1] == 17) {
          var color_mi = color(221,160,221); //plum #dda0dd
        } else {
          var color_mi = color(255,105,180); //hotpink #ff69b4
        }
        return color_mi;
      }
      var colord_mi_second = color_conver_mi_second();
      fill(colord_mi_second); 
      circle(100 + (i - mi_second)  * 50, 450 , r);
    }
  }



  //back の範囲
  //(0,500,700,500)

  //baの個数判定
  //console.log(values_ba.length)
  var length_ba = values_ba.length
  var ba_first = length_ba/2 - 1 ;
  var ba_second = parseInt(length_ba/2 + 1) ;
  //console.log(ba_second);
  //二列でcircleを記述
  //偶数奇数判定
  if (length_ba % 2 == 1 ) {
    //奇数
    //1列目
    for(let i = 0; i< ba_first ;i++){
      //console.log(values_ba[i])
      function color_conver_ba_first() {
        if (values_ba[i] == 1) {
          var color_ba = color(255,255,255); //white #ffffff
        }  else if (values_ba[i] == 2) {
          var color_ba = color(230,230,250); //lavender #e6e6fa	
        } else if (values_ba[i] == 3){
          var color_ba = color(0,0,0); //black #000000
        } else if (values_ba[i] == 4) {
          var color_ba = color(128,128,128); //gray #808080	
        } else if (values_ba[i] == 5) {
          var color_ba = color(220,20,60); //crimson #dc143c
        } else if (values_ba[i] == 6) {
          var color_ba = color(240,128,128); //lightcoral #f08080
        } else if (values_ba[i] == 7) {
          var color_ba = color(30,144,255); //dodgerblue #1e90ff	
        } else if (values_ba[i] == 8) {
          var color_ba = color(135,206,235); //skytblue #87ceeb
        } else if (values_ba[i] == 9) {
          var color_ba = color(255,255,0); //yellow #ffff00
        } else if (values_ba[i] == 10) {
          var color_ba = color(255,239,213); //papaywhip #ffefd5
        } else if (values_ba[i] == 11) {
          var color_ba = color(34,139,34);//forestgreen #228b22
        } else if (values_ba[i] == 12) {
          var color_ba = color(144,238,144); //lightgreen #90ee90
        } else if (values_ba[i] == 13) {
          var color_ba = color(255,165,0); //orange #ffa500
        } else if (values_ba[i] == 14) {
          var color_ba = color(255,228,181); //moccasin #ffe4b5
        } else if (values_ba[i] == 15) {
          var color_ba = color(210, 105, 30); //chocolate #d2691e
        } else if (values_ba[i] == 16) {
          var color_ba = color(255,182,193); //lightpink #ffb6c1
        } else if (values_ba[i] == 17) {
          var color_ba = color(221,160,221); //plum #dda0dd
        } else {
          var color_ba = color(255,105,180); //hotpink #ff69b4
        }
        return color_ba;
      }
      var colord_ba_first = color_conver_ba_first();
      fill(colord_ba_first);
      circle(100 + i * 50, 550 , r);
    }
    //2列目
    for(let i = ba_second; i< length_ba + 1 ;i++){
      //console.log(values_ba[i - 1]);
      function color_conver_ba_second() {
        if (values_ba[i - 1] == 1) {
          var color_ba = color(255,255,255); //white #ffffff
        }  else if (values_ba[i - 1] == 2) {
          var color_ba = color(230,230,250); //lavender #e6e6fa	
        } else if (values_ba[i - 1] == 3){
          var color_ba = color(0,0,0); //black #000000
        } else if (values_ba[i - 1] == 4) {
          var color_ba = color(128,128,128); //gray #808080	
        } else if (values_ba[i - 1] == 5) {
          var color_ba = color(220,20,60); //crimson #dc143c
        } else if (values_ba[i - 1] == 6) {
          var color_ba = color(240,128,128); //lightcoral #f08080
        } else if (values_ba[i - 1] == 7) {
          var color_ba = color(30,144,255); //dodgerblue #1e90ff	
        } else if (values_ba[i - 1] == 8) {
          var color_ba = color(135,206,235); //skytblue #87ceeb
        } else if (values_ba[i - 1] == 9) {
          var color_ba = color(255,255,0); //yellow #ffff00
        } else if (values_ba[i - 1] == 10) {
          var color_ba = color(255,239,213); //papaywhip #ffefd5
        } else if (values_ba[i - 1] == 11) {
          var color_ba = color(34,139,34);//forestgreen #228b22
        } else if (values_ba[i - 1] == 12) {
          var color_ba = color(144,238,144); //lightgreen #90ee90
        } else if (values_ba[i - 1] == 13) {
          var color_ba = color(255,165,0); //orange #ffa500
        } else if (values_ba[i - 1] == 14) {
          var color_ba = color(255,228,181); //moccasin #ffe4b5
        } else if (values_ba[i - 1] == 15) {
          var color_ba = color(210, 105, 30); //chocolate #d2691e
        } else if (values_ba[i - 1] == 16) {
          var color_ba = color(255,182,193); //lightpink #ffb6c1
        } else if (values_ba[i - 1] == 17) {
          var color_ba = color(221,160,221); //plum #dda0dd
        } else {
          var color_ba = color(255,105,180); //hotpink #ff69b4
        }
        return color_ba;
      }
      var colord_ba_second = color_conver_ba_second();
      fill(colord_ba_second);
      circle(100 + (i - ba_second)  * 50, 600 , r);
    }
  } else {
    //偶数で
    //1列目
    for(let i = 0; i< ba_first + 1 ;i++){
      //console.log(values_ba[i])
      function color_conver_ba_first() {
        if (values_ba[i] == 1) {
          var color_ba = color(255,255,255); //white #ffffff
        }  else if (values_ba[i] == 2) {
          var color_ba = color(230,230,250); //lavender #e6e6fa	
        } else if (values_ba[i] == 3){
          var color_ba = color(0,0,0); //black #000000
        } else if (values_ba[i] == 4) {
          var color_ba = color(128,128,128); //gray #808080	
        } else if (values_ba[i] == 5) {
          var color_ba = color(220,20,60); //crimson #dc143c
        } else if (values_ba[i] == 6) {
          var color_ba = color(240,128,128); //lightcoral #f08080
        } else if (values_ba[i] == 7) {
          var color_ba = color(30,144,255); //dodgerblue #1e90ff	
        } else if (values_ba[i] == 8) {
          var color_ba = color(135,206,235); //skytblue #87ceeb
        } else if (values_ba[i] == 9) {
          var color_ba = color(255,255,0); //yellow #ffff00
        } else if (values_ba[i] == 10) {
          var color_ba = color(255,239,213); //papaywhip #ffefd5
        } else if (values_ba[i] == 11) {
          var color_ba = color(34,139,34);//forestgreen #228b22
        } else if (values_ba[i] == 12) {
          var color_ba = color(144,238,144); //lightgreen #90ee90
        } else if (values_ba[i] == 13) {
          var color_ba = color(255,165,0); //orange #ffa500
        } else if (values_ba[i] == 14) {
          var color_ba = color(255,228,181); //moccasin #ffe4b5
        } else if (values_ba[i] == 15) {
          var color_ba = color(210, 105, 30); //chocolate #d2691e
        } else if (values_ba[i] == 16) {
          var color_ba = color(255,182,193); //lightpink #ffb6c1
        } else if (values_ba[i] == 17) {
          var color_ba = color(221,160,221); //plum #dda0dd
        } else {
          var color_ba = color(255,105,180); //hotpink #ff69b4
        }
        return color_ba;
      }
      var colord_ba_first = color_conver_ba_first();
      fill(colord_ba_first);
      circle(100 + i * 50, 550 , r);
    }
    //2列目
    for(let i = ba_second; i< length_ba + 1 ;i++){
      //console.log(values_ba[i - 1]);
      function color_conver_ba_second() {
        if (values_ba[i - 1] == 1) {
          var color_ba = color(255,255,255); //white #ffffff
        }  else if (values_ba[i - 1] == 2) {
          var color_ba = color(230,230,250); //lavender #e6e6fa	
        } else if (values_ba[i - 1] == 3){
          var color_ba = color(0,0,0); //black #000000
        } else if (values_ba[i - 1] == 4) {
          var color_ba = color(128,128,128); //gray #808080	
        } else if (values_ba[i - 1] == 5) {
          var color_ba = color(220,20,60); //crimson #dc143c
        } else if (values_ba[i - 1] == 6) {
          var color_ba = color(240,128,128); //lightcoral #f08080
        } else if (values_ba[i - 1] == 7) {
          var color_ba = color(30,144,255); //dodgerblue #1e90ff	
        } else if (values_ba[i - 1] == 8) {
          var color_ba = color(135,206,235); //skytblue #87ceeb
        } else if (values_ba[i - 1] == 9) {
          var color_ba = color(255,255,0); //yellow #ffff00
        } else if (values_ba[i - 1] == 10) {
          var color_ba = color(255,239,213); //papaywhip #ffefd5
        } else if (values_ba[i - 1] == 11) {
          var color_ba = color(34,139,34);//forestgreen #228b22
        } else if (values_ba[i - 1] == 12) {
          var color_ba = color(144,238,144); //lightgreen #90ee90
        } else if (values_ba[i - 1] == 13) {
          var color_ba = color(255,165,0); //orange #ffa500
        } else if (values_ba[i - 1] == 14) {
          var color_ba = color(255,228,181); //moccasin #ffe4b5
        } else if (values_ba[i - 1] == 15) {
          var color_ba = color(210, 105, 30); //chocolate #d2691e
        } else if (values_ba[i - 1] == 16) {
          var color_ba = color(255,182,193); //lightpink #ffb6c1
        } else if (values_ba[i - 1] == 17) {
          var color_ba = color(221,160,221); //plum #dda0dd
        } else {
          var color_ba = color(255,105,180); //hotpink #ff69b4
        }
        return color_ba;
      }
      var colord_ba_second = color_conver_ba_second();
      fill(colord_ba_second);
      circle(100 + (i - ba_second)  * 50, 600 , r);
    }
  }

}
