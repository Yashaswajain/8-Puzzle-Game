/* 1 3        1 2 3
 4 2 5        4 5 6
 7 8 6        7 8*/
 
 var g=[1,2,3,4,5,6,7,8,0];


 function areEqual(){
     var v1=box1.innerHTML,v2=box2.innerHTML,v3=box3.innerHTML,v4=box4.innerHTML,v5=box5.innerHTML,
     v6=box6.innerHTML,v7=box7.innerHTML,v8=box8.innerHTML,v9=box9.innerHTML;
     if(g[0]==v1&&g[1]==v2&&g[2]==v3&&g[3]==v4&&g[4]==v5&&g[5]==v6&&g[6]==v7&&g[7]==v8&&g[8]==v9){
        return true;}
     return false;
 }

 var box1=document.querySelector(".box1");
 var box2=document.querySelector(".box2");
 var box3=document.querySelector(".box3");
 var box4=document.querySelector(".box4");
 var box5=document.querySelector(".box5");
 var box6=document.querySelector(".box6");
 var box7=document.querySelector(".box7");
 var box8=document.querySelector(".box8");
 var box9=document.querySelector(".box9");
 var reset=document.querySelector(".reset");
reset.onclick=function(){
window.location.reload();
}

 box1.onclick=function(){
    var boxvalue=box1.innerHTML;
    if(boxvalue==0){alert("Cannot move empty space");}
    var val1=box2.innerHTML,val2=box4.innerHTML,index=-1;
    if(val1==0){index=2;}
    else if(val2==0){index=4;}
    if(index==-1){return;}
    box1.innerHTML=0;
    if(index==2){box2.innerHTML=boxvalue;}
    else if(index==4){box4.innerHTML=boxvalue;}
    if(areEqual()){alert("Happy");}
}

box2.onclick=function(){
    var boxvalue=box2.innerHTML;
    if(boxvalue==0){alert("Cannot move empty space");}
    var val1=box1.innerHTML,val2=box3.innerHTML,val3=box5.innerHTML,index=-1;
    if(val1==0){index=1;}
    else if(val2==0){index=3;}
    else if(val3==0){index=5;}
    if(index==-1){return ;}
    box2.innerHTML=0;
    if(index==1){box1.innerHTML=boxvalue;}
    else if(index==3){box3.innerHTML=boxvalue;}
    else if(index==5){box5.innerHTML=boxvalue;}
    if(areEqual()){alert("Happy");}
}

box3.onclick=function(){
    var boxvalue=box3.innerHTML;
    if(boxvalue==0){alert("Cannot move empty space");}
    var val1=box2.innerHTML,val2=box6.innerHTML,index=-1;
    if(val1==0){index=2;}
    else if(val2==0){index=6;}
    if(index==-1){return ;}
    box3.innerHTML=0;
    if(index==2){box2.innerHTML=boxvalue;}
    else if(index==6){box6.innerHTML=boxvalue;}
    if(areEqual()){alert("Happy");}
}

box4.onclick=function(){
    var boxvalue=box4.innerHTML;
    if(boxvalue==0){alert("Cannot move empty space");}
    var val1=box1.innerHTML,val2=box5.innerHTML,val3=box7.innerHTML,index=-1;;
    if(val1==0){index=1;}
    else if(val2==0){index=5;}
    else if(val3==0){index=7;}
    if(index==-1){return ;}
    box4.innerHTML=0;
    if(index==1){box1.innerHTML=boxvalue;}
      else if(index==5){box5.innerHTML=boxvalue;}
      else if(index==7){box7.innerHTML=boxvalue;}
      if(areEqual()){alert("Happy");}
}

  box5.onclick=function(){
      var boxvalue=box5.innerHTML;
      if(boxvalue==0){alert("Cannot move empty space");}
      var val1=box2.innerHTML,val2=box6.innerHTML,val3=box8.innerHTML,val4=box4.innerHTML,index=-1;
      if(val1==0){index=2;}
      else if(val2==0){index=6;}
      else if(val3==0){index=8;}
      else if(val4==0){index=4;}
      if(index==-1){return;}
      box5.innerHTML=0;
      if(index==2){box2.innerHTML=boxvalue;}
      else if(index==6){box6.innerHTML=boxvalue;}
      else if(index==8){box8.innerHTML=boxvalue;}
      else if(index==4){box4.innerHTML=boxvalue;}
      if(areEqual()){alert("Happy");}
}

box6.onclick=function(){
var boxvalue=box6.innerHTML;
if(boxvalue==0){alert("Cannot move empty space");}
var val1=box3.innerHTML,val2=box5.innerHTML,val3=box9.innerHTML,index=-1;
if(val1==0){index=3;}
else if(val2==0){index=5;}
else if(val3==0){index=9;}
if(index==-1){return;}
box6.innerHTML=0;
if(index==3){box3.innerHTML=boxvalue;}
else if(index==5){box5.innerHTML=boxvalue;}
else if(index==9){box9.innerHTML=boxvalue;}
if(areEqual()){alert("Happy");}
}

box7.onclick=function(){
var boxvalue=box7.innerHTML;
if(boxvalue==0){alert("Cannot move empty space");}
var val1=box4.innerHTML,val2=box8.innerHTML,index=-1;
if(val1==0){index=4;}
else if(val2==0){index=8;}
if(index==-1){return ;}
box7.innerHTML=0;
if(index==4){box4.innerHTML=boxvalue;}
else if(index==8){box8.innerHTML=boxvalue;}
if(areEqual()){alert("Happy");}
}

box8.onclick=function(){
var boxvalue=box8.innerHTML;
if(boxvalue==0){alert("Cannot move empty space");}
var val1=box7.innerHTML,val2=box5.innerHTML,val3=box9.innerHTML,index=-1;
if(val1==0){index=7;}
else if(val2==0){index=5;}
else if(val3==0){index=9;}
if(index==-1){return ;}
box8.innerHTML=0;
if(index==7){box7.innerHTML=boxvalue;}
else if(index==5){box5.innerHTML=boxvalue;}
else if(index==9){box9.innerHTML=boxvalue;}
if(areEqual()){alert("Happy");}
}
/*1 2 3
  4 5 6
  7 8 9*/
box9.onclick=function(){
var boxvalue=box9.innerHTML;
if(boxvalue==0){alert("Cannot move empty space");}
var val1=box6.innerHTML,val2=box8.innerHTML,index=-1;
if(val1==0){index=6;}
else if(val2==0){index=8;}
if(index==-1){return ;}
box9.innerHTML=0;
if(index==6){box6.innerHTML=boxvalue;}
else if(index==8){box8.innerHTML=boxvalue;}
if(areEqual()){alert("Happy");}
}




