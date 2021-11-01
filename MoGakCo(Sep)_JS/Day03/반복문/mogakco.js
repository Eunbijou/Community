function changeText (index) {
  var text = document.getElementsByTagName('h1');
  switch(index) {
      case 0:
          text[index].innerHTML = "모두 모두 모여라";
          break;    
      case 1:
          text[index].innerHTML = "각자, 그리고 또 같이"  
          break;  
      default : 
          text[index].innerHTML = "코딩하자!!"  
  }
}