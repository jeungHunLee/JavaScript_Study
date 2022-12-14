let total = 0;
let message = '';
const $computer = document.querySelector('#computer');
const $score = document.querySelector('#score');
const $rock = document.querySelector('#rock');
const $scissors = document.querySelector('#scissors');
const $paper = document.querySelector('#paper');
const IMG_URL = './rsp.png';
$computer.style.backgroundSize = 'auto 200px';    //가로 자동, 세로 200px
const rspX = {    //객체 리터럴로 표현
    /* 좌표가 0이면 단위(px) 생략 가능 */
    scissors: '-0',      //가위
    rock: '-220px',     //바위
    paper: '-440px',    //보
};

const scoreTable = {
    rock: 0,
    scissors: 1,
    paper: -1,
}

let computerChoice = 'scissors';
const changeComputerHand = () => {
    if(computerChoice === 'rock') {
        computerChoice = 'scissors';
    } else if(computerChoice === 'scissors') {
        computerChoice = 'paper';
    } else if(computerChoice === 'paper') {
                computerChoice = 'rock';
    }
    //* background 속성: url(주소), x좌표, y좌표 */
    $computer.style.background = `url(${IMG_URL}) ${rspX[computerChoice]} 0`;    //주소, x좌표, y좌표
    $computer.style.backgroundSize = 'auto 200px';    //가로는 auto, 세로는 200px가 될때까지 비율 조정
};

let intervalId = setInterval(changeComputerHand, 50);    //50밀리초마다 함수 실행

const clickButton = (event) => {
    clearInterval(intervalId);
    //event 잠시 제거
    $scissors.removeEventListener('click', clickButton);
    $rock.removeEventListener('click', clickButton);
    $paper.removeEventListener('click', clickButton);

    let myChoice = event.target.textContent === '바위' ? 'rock' : event.target.textContent === '가위' ? 'scissors' : 'paper';    //textContent 노드가 가지고 있는 텍스트를 가져온다
    let computerScore = scoreTable[computerChoice];
    let myScore = scoreTable[myChoice];
    let score = myScore - computerScore;

    // 가위: 1,  바위: 0,   보: -1
    // 나\컴퓨터  가위    바위    보
    // 가위       0       1       2
    // 바위      -1       0       1
    // 보        -2      -1       0

    if([2, -1].includes(score)) {
        total += 1;
        message = '승리';
    } else if([1, -2].includes(score)) {
        total -= 1;
        message = '패배';
    } else if(score === 0) {
        message = "무승부";
    }

    $score.textContent = `${message} 총 ${total}`;

    setTimeout(() => {
        $scissors.addEventListener('click', clickButton);
        $rock.addEventListener('click', clickButton);
        $paper.addEventListener('click', clickButton);
        intervalId = setInterval(changeComputerHand, 50);
    }, 1000);    //1초 뒤에 다시 시작
};

$scissors.addEventListener('click', clickButton);
$rock.addEventListener('click', clickButton);
$paper.addEventListener('click', clickButton);