function getFirstSelector(selector){
 return document.querySelector(selector);
}
function nestedTarget(){
  return document.querySelector("#nested");
}

function deepestChild(){
const main =  document.querySelector("#grand-node")
return main;

}


  function increaseRankBy(n){
  var val = parseInt(n);
    const list = document.getElementById('app').querySelectorAll('ul.ranked-list li')

   for (let i = 0, l = list.length; i < l; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) +n;
    }
  }
