window.onload =  getList;

var list=new Array();

function getList () {
  if (localStorage && localStorage.getItem("myList")) {
    list = JSON.parse(localStorage.getItem("myList"));
  }
 loadList();
 console.log(list);
}
function loadList() {
  for (var i = 0; i < list.length; i+=1) {
      addListItem(list[i]);
  }
}
  function addListItem (playerList) {
      var writeToHtml = " ";
      for (var i = 0; i < list.length; i+=1) {
          writeToHtml += "<li>" + list[i] + "</li>";
      }
      document.getElementById("display").innerHTML = writeToHtml;

  }
function add() {
  console.log(localStorage.getItem("draftOrder"));
  var playerValue = document.getElementById("name").value;

  list.push(playerValue);
  var list_string = JSON.stringify(list);
  console.log(list_string);
  if (localStorage) {
    localStorage.setItem("myList", list_string);
  }
 addListItem(playerValue);
}
function clearList() {
    localStorage.clear();
}