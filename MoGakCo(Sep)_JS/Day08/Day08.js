var word = ['💻','S','i','l','v','e','r','B','의',' ','J','A','V','A','S','C','R','I','P','T',' ','공','부','💻'];
var index = 0;
var writting = document.getElementById('word');

function clear() {
  writting.innerHTML = "";
  index = 0;
}

function btnClick(){
    if(word.length > index){
        writting.innerHTML += word[index++];
    }
    else if(word.length <= index){
        clear()
    }
}