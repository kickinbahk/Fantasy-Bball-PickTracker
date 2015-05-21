var list=new Array();
var names=new Array();

var num = 0;
var player;



function add() {
  console.log(localStorage.getItem("draftOrder"));
  var playerValue = document.getElementById("name").value;
  names[names.length]=playerValue;
  for(var i = 0; i < names.length; i+=1) {
     num += 1;
     player = names[i];
     var content = num + ". " + player;
  }
  num=0;
  list.push(content);
 
  for (var j = 0; j < list.length; j+=1) {
    //console.log(list[j]);
    order = list.valueOf(j).join("<br>");
    localStorage.setItem("draftOrder", order);
    document.getElementById("display").innerHTML = localStorage.getItem("draftOrder");
    console.log(localStorage.getItem("draftOrder"));
  }
/*function savePlayer(order){

 sessionStorage.setItem("draftOrder", order);
 console.log(sessionStorage.getItem("draftOrder"));
}*/



}