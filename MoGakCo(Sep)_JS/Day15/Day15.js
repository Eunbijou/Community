function check_text() {
	var value = document.getElementById("console").value;
  var say = document.getElementById("answer");
  var app = document.getElementById("typed");

  if(key==1){
    if(value=="그래"){
        document.getElementsByClassName("cat_says")[0].innerHTML="대답을 알려줘라 냥!";
        key=2;
    }
    else{
        document.getElementsByClassName("cat_says")[0].innerHTML="알겠다냥,,,ㅠㅅㅠ";
        key=0;
    }
    return;
  }
  if(key==2){
      answer=value;
      push_json();
      return;
  }
  for(let i=0;i<json.length;i++){
      if(value==json[i].question){
          document.getElementsByClassName("cat_says")[0].innerHTML=json[i].answer;
          return;
      }
  }

	if (value=='안녕'){
        say.innerText = "안녕? 난 루나다냥!";
        console.log(say.innerText);
        image.src = "./images/hi.jpg";
        var typewriter = new Typewriter(app, {
          loop: true});
          typewriter.typeString('루나에게 다른 말도 걸어주세요!')
          .pauseFor(1500)
          .deleteAll()
          .typeString('루나가 친절히 답변해줄거다 냥!')
          .pauseFor(3000)
          .start();
    }
    else if(value =='우리 루나꾸!!'){
        say.innerText = "왜 부르냐 집사양";
        console.log(say.innerText);
        image.src = "./images/runa.jpg";
        var typewriter = new Typewriter(app, {
          loop: true});
          typewriter.typeString('루나에게 다른 말도 걸어주세요!')
          .pauseFor(1500)
          .deleteAll()
          .typeString('루나가 친절히 답변해줄거다 냥!')
          .pauseFor(3000)
          .start();
    }
    else if(value =='우리 루나 뭐해?'){
      say.innerText = "츄르 내놔라 냥!!";
      console.log(say.innerText);
      image.src = "./images/chur.jpg";
      var typewriter = new Typewriter(app, {
        loop: true});
        typewriter.typeString('루나에게 다른 말도 걸어주세요!')
        .pauseFor(1500)
        .deleteAll()
        .typeString('루나가 친절히 답변해줄거다 냥!')
        .pauseFor(3000)
        .start();
    }
    else if(value =='루나야~~'){
      say.innerText = "부르지 말라냥!!";
      console.log(say.innerText);
      image.src = "./images/runa.jpg";
      var typewriter = new Typewriter(app, {
        loop: true});
        typewriter.typeString('루나에게 다른 말도 걸어주세요!')
        .pauseFor(1500)
        .deleteAll()
        .typeString('루나가 친절히 답변해줄거다 냥!')
        .pauseFor(3000)
        .start();
    }
    else if(value =='목욕하자 루나야~'){
      say.innerText = "내보내달라냥!!!!!ㅡㅡ";
      console.log(say.innerText);      
      image.src = "./images/shower.jpg";
      var typewriter = new Typewriter(app, {
        loop: true});
        typewriter.typeString('루나에게 다른 말도 걸어주세요!')
        .pauseFor(1500)
        .deleteAll()
        .typeString('루나가 친절히 답변해줄거다 냥!')
        .pauseFor(3000)
        .start();
    }
    else if(value =='루나 괴롭혀야지'){
      say.innerText = "뭐하냥.";
      console.log(say.innerText);
      image.src = "./images/play.jpg";
      var typewriter = new Typewriter(app, {
        loop: true});
        typewriter.typeString('루나에게 다른 말도 걸어주세요!')
        .pauseFor(1500)
        .deleteAll()
        .typeString('루나가 친절히 답변해줄거다 냥!')
        .pauseFor(3000)
        .start();
    }
    else if(value == "불 꺼줘"){
      say.innerText ="집사야 나도 졸리다..";
      console.log(say.innerText);
      image.src = "./images/sleep.jpg";
      document.body.style.backgroundColor = "#282828";
      var typewriter = new Typewriter(app, {
        loop: true});
        typewriter.typeString('루나에게 다른 말도 걸어주세요!')
        .pauseFor(1500)
        .deleteAll()
        .typeString('루나가 친절히 답변해줄거다 냥!')
        .pauseFor(3000)
        .start();
    }
    else if(value == "불 켜줘"){
      say.innerText = "냥?!"
      console.log(say.innerText);
      image.src = "./images/awake.jpg";
      document.body.style.backgroundColor = "white";  
      var typewriter = new Typewriter(app, {
        loop: true});
        typewriter.typeString('루나에게 다른 말도 걸어주세요!')
        .pauseFor(1500)
        .deleteAll()
        .typeString('루나가 친절히 답변해줄거다 냥!')
        .pauseFor(3000)
        .start();   
    }
    else if(value =='루나야 몇시야?'){
      time();
      var typewriter = new Typewriter(app, {
        loop: true});
        typewriter.typeString('루나에게 다른 말도 걸어주세요!')
        .pauseFor(1500)
        .deleteAll()
        .typeString('루나가 친절히 답변해줄거다 냥!')
        .pauseFor(3000)
        .start();
    }
    else if(value =='루나야 며칠이야?'){
      day();
      var typewriter = new Typewriter(app, {
        loop: true});
        typewriter.typeString('루나에게 다른 말도 걸어주세요!')
        .pauseFor(1500)
        .deleteAll()
        .typeString('루나가 친절히 답변해줄거다 냥!')
        .pauseFor(3000)
        .start();
    }
    else{
      document.getElementsByClassName("cat_says")[0].innerHTML="뭔지 모르겠다냥,,, 알려줄고냥? (그래! or 싫)";
      question=value;
      key=1;
      console.log(say.innerText);      
      image.src = "./images/runa.jpg";
      var typewriter = new Typewriter(app, {
        loop: true});
        typewriter.typeString('루나는 이 말을 이해하지 못했다냥...')
        .pauseFor(1500)
        .deleteAll()
        .typeString('다른 말을 적어주시겠냥?')
        .pauseFor(3000)
        .start();
    }
  }

function time(){
    let today=new Date();
    let hours=today.getHours();
    let minutes=today.getMinutes();
    document.getElementsByClassName("cat_says")[0].innerHTML=(hours+"시 "+minutes+"분이다 냥!");
    var typewriter = new Typewriter(app, {
      loop: true});
      typewriter.typeString('루나에게 다른 말도 걸어주세요!')
      .pauseFor(1500)
      .deleteAll()
      .typeString('루나가 친절히 답변해줄거다 냥!')
      .pauseFor(3000)
      .start();
}

function day(){
    let today=new Date();
    let month=today.getMonth()+1; 
    let date=today.getDate();    
    document.getElementsByClassName("cat_says")[0].innerHTML=(month+"월 "+date+"일이다 냥!");
    var typewriter = new Typewriter(app, {
      loop: true});
      typewriter.typeString('루나에게 다른 말도 걸어주세요!')
      .pauseFor(1500)
      .deleteAll()
      .typeString('루나가 친절히 답변해줄거다 냥!')
      .pauseFor(3000)
      .start();
} 

var question="";
var answer="";
var key=0;

var json=
[
    {
        "question":"안녕?",
        "answer":"안냥!"
    },
    {
        "question":"뭐를 좋아하니?",
        "answer":"츄르를 좋아한다 냥!"
    },
    {
        "question":"좋아하는 계절이 뭐야?",
        "answer":"우리 집사님이 가을이 좋다 그랬다냥!"
    }
]

function push_json(){
    json.push({question: `${question}`, answer: `${answer}`}); 
	  document.getElementsByClassName("cat_says")[0].innerHTML = "저장했다냥!";
	  key = 0; 
    var typewriter = new Typewriter(app, {
      loop: true});
      typewriter.typeString('루나에게 다른 말도 걸어주세요!')
      .pauseFor(1500)
      .deleteAll()
      .typeString('루나가 친절히 답변해줄거다 냥!')
      .pauseFor(3000)
      .start();
}
