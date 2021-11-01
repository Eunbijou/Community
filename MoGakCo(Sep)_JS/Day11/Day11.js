function check_text() {
	var value = document.getElementById("console").value;
    var say = document.getElementById("answer");
    

	if (value=='안녕'){
        say.innerText = "안녕? 난 루나다냥!";
        console.log(say.innerText);
    }
    else if(value =='우리 루나꾸!!'){
        say.innerText = "왜 부르냐 집사양";
        console.log(say.innerText);

    }
    else if(value =='우리 루나 뭐해?'){
      say.innerText = "츄르 내놔라 냥!!";
      console.log(say.innerText);

  }
  else if(value =='루나야~~'){
    say.innerText = "부르지 말라냥!!";
    console.log(say.innerText);
  }
  else if(value =='목욕하자 루나야~'){
    say.innerText = "-----(응답없음-----";
    console.log(say.innerText);
  }
    else{
        say.innerText = "뭐라고 하는 거냥! 다시 말해주겠냥?";
        console.log(say.innerText);
    }
}