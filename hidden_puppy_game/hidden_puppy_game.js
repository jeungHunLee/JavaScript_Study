let mark = new Array(24);    //달걀 24개에 대한 배열
let timeID = null;    //타이머 ID
let NOOFANSWER = 8    //숨은 그림의 개수
let MAXTRY = 5;    //허용되는 실패 개수
let FINDINGSECONDS = 20;    //정답을 찾는데 허용된 시간
let THINKSECOND = 10;    //기억하도록 허용된 시간

let restNum;    //찾아야할 잔여 정답 수
let failNum = 0;    //실패 카운트
let watingSeconds;    //기억하도록 허용된 시간

let audio = null;    //<audio> 태그 객체로 효과음 울림
let gameTitle = null;    //game title
let startMenuObj = null;    //시작 메뉴
let timeObj = null;    //시간을 출력하는 태그 영역
let restObj = null;    //남은 개수를 출력하는 태그 영역
let failObj = null;    //틀린 개수를 출력하는 태그 영역
let resultObj = null;    //게임 진행 상태를 보여주는 태그 영역
let gameoverObj = null;    //게임 진행 상태를 보여주는 태그 영역

function clickStartGame() {
    audio = document.getElementById("audio");
    startMenuObj = document.getElementById("startMenu");
    timeObj = document.getElementById("time");
    restObj = document.getElementById("rest");
    failObj = document.getElementById("fail");
    resultObj = document.getElementById("result");
    gameoverObj = document.getElementById("gameover");
    startGame();
}

function startGame() {
    if(audio == null || startMenuObj == null || timeObj == null ||
        restObj == null || failObj == null || restObj == null) return;
    
    playsound("media/recycle.mp3");    //시작 사운드 재생
    gameoverObj.style.display = "none";    //객체 숨김
    watingSeconds=THINKSECOND;    //기억하도록 허용된 시간 초기화
    restNum = NOOFANSWER; 
    failNum = 0;    //실패 카운트 초기화
    timeObj.innerHTML="남은 시간 : " + watingSeconds;    //남은 시간 표시
    failObj.innerHTML="남은 수 : " + restNum;    //남은 수 표시
    resultObj.innerHTML = "숨은 그림을 보세요";    //게임 진행 메세지
    startMenuObj.style.visibility="hidden";    //게임 시작 텍스트 숨김

    //mark 배열 false로 초기화, 각 셀을 모두 달걀 이미지로 초기화
    for(let i = 0; i < mark.length; i++) {
        mark[i] = false;
        document.images[i].src = "media/img1.gif";
        document.images[i].style.borderWidth="0px";    //테두리 제거
    }

    //숨은 강아지의 위치를 랜덤하게 선택
    for(let i = 0; i < NOOFANSWER;) {
        let index = Math.floor(Math.random() * 24);    //0~23 사이의 정수 index
        if(mark[index] != true) {    //false인 경우 true로 초기화(강아지가 숨을 위치)
            mark[index] = true;
            document.images[index].src = "media/img2.gif";    //숨은 강아지 이미지
            i++;
        }
    }
    timerID=setInterval("thinkTime()", 1000);     //1초 간격으로 정답 위치 보여줌
}

function playsound(src) {
    audio.src = src;
    audio.play();    //효과음 발생
}

function thinkTime() {
    watingSeconds--;
    timeObj.innerText = "남은 시간 : " + watingSeconds;    //남은 시간 출력

    if(watingSeconds == 0) {
        playsound("media/bi.mp3");
        hideAnswer();    //정답 숨기기
    }
    else if(watingSeconds > 0 && watingSeconds <= 5) {
        playsound("media/clock.mp3");
    }
}

function hideAnswer() {
    clearInterval(timerID);    //타이머 해제
    for(let i = 0; i < document.images.length; i++) {
        document.images[i].src = "media/img1.gif"
        document.images[i].onclick=checkAnswer;
    }
    watingSeconds=FINDINGSECONDS;    //정답을 찾는 시간 20초
    resultObj.innerHTML = "정답을 찾으세요";    //게임 진행 메세지
    timerID=setInterval("findTime()", 1000);
}

function findTime() {
    watingSeconds--;
    timeObj.innerText="남은 시간 : " + watingSeconds;

    if(watingSeconds == 0) {    //남은 시간이 다 된 경우
        playsound("media/bi.mp3");
        gameover(false);    //게임 오버
    } else if(watingSeconds > 0 && watingSeconds <= 5) {    //남은 시간이 1~5초일 경우 경고음
        playsound("media/clock.mp3");
    }
}

function checkAnswer(e) {    //매개변수는 event 객체
    let clickIndex = -1    //초기값

    for(let i = 0; i < document.images.length; i++) {
        if(e.target == document.images[i]) {
            clickIndex = i;
            break;
        }
    }
    if(clickIndex == -1) {
        alert("클릭이 발생하였지만 클릭한 달걀을 찾지 못함 심각한 오류");
        return;
    }

    if(mark[clickIndex] == true) {
        mark[clickIndex] = false;
        playsound("media/chimes.mp3");

        document.images[clickIndex].src = "media/img2.gif";
        document.images[clickIndex].onclick = null;
        restNum--;
        restObj.innerText = "남은수 : " + restNum;
        if(restNum == 0) {
            if(audio.currentTime != audio.duration) {
                audio.onended = function () {
                    playsound("media/tada.mp3");
                    audio.onended = null;
                }
            } else {
                playsound("media/tada.mp3");
            }
            gameoverObj(true);
        }
    } else {
        playsound("media/bad.mp3");
        failNum++;
        failObj.innerText = "실패수 : " + failNum;
        if(failNum == MAXTRY) {
            gameover(false);
        }
    }
}

function gameover(winner) {
    clearInterval(timerID);

    gameoverObj.style.display = "block";

    if(winner == true) {
        resultObj.innerHTML = "성공";
        gameoverObj.innerHTML = "WINNER";
    }
    else {
        resultObj.innerHTML = "실패";
        for(let i = 0; i < mark.length; i++) {
            if(mark[i] == true) {
                document.images[i].src="media/img2.gif";
                document.images[i].onclick = null;
                document.images[i].style.border = "1px solid red";
            }
        }
        gameoverObj.innerHTML = "GAME OVER";
    }

    for(let i = 0; i < document.images.length; i++) {
        document.images[i].onclick = null;
    }
    startMenuObj.style.visibility="visible";
}