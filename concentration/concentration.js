const $wrapper = document.querySelector('#wrapper');
let total = Number(prompt("카드의 개수 짝수로 입력(최대 20개)"));
const colors = ['red', 'orange', 'yellow', 'green', 'white', 'pink', 'blue', 'purple', 'gray', 'brown']
let colorCopy = colors.slice(0, total / 2).concat(colors.slice(0, total / 2));    //기존 배열에 기존 배열 요소를 추가하여 새로운 배열 반환
let shuffled = [];
let clicked = [];
let completed = [];
let clickable = false;
let start;
let end;

function shuffle () {
    for(let i = 0; i < total; i++) {
        let index = Math.floor(Math.random() * colorCopy.length);
        shuffled.push(colorCopy.splice(index, 1));
    }
}

function createCard(i) {
    const card = document.createElement('div');
    card.className = 'card';
    const cardInner = document.createElement('div');
    cardInner.className = 'card-inner';
    const cardFront = document.createElement('div');
    cardFront.className = 'card-front';
    const cardBack = document.createElement('div');
    cardBack.className = 'card-back';
    cardBack.style.backgroundColor = shuffled[i];
    cardInner.append(cardFront);
    cardInner.append(cardBack);
    card.append(cardInner);
    return card;
}

function onClickCard() {
    //카드를 감추는 중이거나, 이미 완료된 카드이거나, 먼저 선택한 카드를 다시 클릭한 경우 함수 실행 x 
    if(!clickable || completed.includes(this) || clicked[0] === this) {
        return;
    }

    this.classList.toggle('flipped');    //해당 클래스가 없으면 추가하고 있으면 제거
    clicked.push(this);
    if(clicked.length !== 2) {    //카드가 두장 클릭 되지 않았다면 계속 게임 계속 실행
        return;
    }
    clickable = false;
    const firstBackColor = clicked[0].querySelector('.card-back').style.backgroundColor;
    const secondBackColor = clicked[1].querySelector('.card-back').style.backgroundColor;
    if(firstBackColor === secondBackColor) {    //두 장의 카드가 같은 색이라면 완료 처리
        completed.push(clicked[0]);
        completed.push(clicked[1]);
        clicked = []
        clickable = true;

        if(completed.length !== total) {
            return;
        }
        setTimeout(() => {    //1초 뒤에 "축하합니다" 출력
            end = new Date();
            alert(`축하합니다! 시간: ${Math.floor((end - start) / 1000)}초`);
            restartGame();
        }, 1000);
        return;
    }
    //두 장의 카드가 다른색이면 다시 되돌리기
    setTimeout(() => {
        clicked[0].classList.remove('flipped');
        clicked[1].classList.remove('flipped');
        clicked = [];
        clickable = true;
    }, 500);
}

function startGame() {
    shuffle();
    for(let i = 0; i < total; i++) {
        const card = createCard(i);
        card.addEventListener('click', onClickCard);
        $wrapper.append(card);
    }
    document.querySelectorAll('.card').forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('flipped');
        }, 1000 + 100 * index);
    });
    setTimeout(() => {
        document.querySelectorAll('.card').forEach((card) => {
            card.classList.remove('flipped');
        });
        clickable = true;
        start = new Date();
    }, 5000);
}

function restartGame() {
    $wrapper.innerHTML = '';
    total = Number(prompt("카드의 개수 짝수로 입력(최대 20개)"));
    colorCopy = colors.slice(0, total / 2).concat(colors.slice(0, total / 2));
    shuffled = [];
    completed = [];
    clickable = false;
    startGame();
}

startGame();