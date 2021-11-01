function check_text() {
	var value = document.getElementById("console").value;
  var say = document.getElementById("answer");

	if (value=='안녕'){
        say.innerText = "안녕? 난 루나다냥!";
        console.log(say.innerText);
        image.src = "./images/hi.jpg";
    }
    else if(value =='우리 루나꾸!!'){
        say.innerText = "왜 부르냐 집사양";
        console.log(say.innerText);
        image.src = "./images/runa.jpg";
    }
    else if(value =='우리 루나 뭐해?'){
      say.innerText = "츄르 내놔라 냥!!";
      console.log(say.innerText);
      image.src = "./images/chur.jpg";
    }
    else if(value =='루나야~~'){
      say.innerText = "부르지 말라냥!!";
      console.log(say.innerText);
      image.src = "./images/runa.jpg";
    }
    else if(value =='목욕하자 루나야~'){
      say.innerText = "내보내달라냥!!!!!ㅡㅡ";
      console.log(say.innerText);      
      image.src = "./images/shower.jpg";
    }
    else if(value =='루나 괴롭혀야지'){
      say.innerText = "뭐하냥.";
      console.log(say.innerText);
      image.src = "./images/play.jpg";
    }
    else if(value == "불 꺼줘"){
      say.innerText ="집사야 나도 졸리다..";
      console.log(say.innerText);
      image.src = "./images/sleep.jpg";
      document.body.style.backgroundColor = "#282828";
    }
    else if(value == "불 켜줘"){
      say.innerText = "냥?!"
      console.log(say.innerText);
      image.src = "./images/awake.jpg";
      document.body.style.backgroundColor = "white";     
    }
    else{
      say.innerText = "뭐라고 하는 거냥! 다시 말해주겠냥?";
      console.log(say.innerText);      
      image.src = "./images/runa.jpg";
    }
  }