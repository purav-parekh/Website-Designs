var list = document.getElementById('todo-list');
var btnAdd = document.getElementById('add-btn');
var inputBox = document.getElementById('add-item');
var btnDel = document.getElementById('del-btn');

var currInputValue='';
inputBox.addEventListener('input',function(e){
  currInputValue=e.target.value;
});

function addItem(){
  if(currInputValue !== undefined && currInputValue !== null && currInputValue !== ""){
    var newListElement = document.createElement('li');
    var textNode= document.createTextNode(currInputValue);
    newListElement.appendChild(textNode);

    newListElement.id= "item" + (list.childElementCount + 1);
    list.appendChild(newListElement);

    inputBox.value="";
    currInputValue="";
  } 
  else{
      alert("Please enter item");
  }
};

function delItem(){
  var firstElement=list.childNodes[1];//list.firstElementChild;
  console.log(firstElement);
  if (list.hasChildNodes()) {
    list.removeChild(firstElement);
}
  else{
    alert('Nothing to remove');
  }
  //list.removeChild(firstElement);
}

btnAdd.addEventListener('click', addItem);
inputBox.addEventListener('keyup',function(e){
  if(e.keyCode==13){
    addItem();
  }
});

btnDel.addEventListener('click',delItem);

