var word = ['π»','S','i','l','v','e','r','B','μ',' ','J','A','V','A','S','C','R','I','P','T',' ','κ³΅','λΆ','π»'];
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