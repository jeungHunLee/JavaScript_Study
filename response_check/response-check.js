let startTime;
let endTime;
const recodes = [];    //이전 기록을 저장할 배열
let timeoutId;
const $screen = document.querySelector('#screen');
const $result = document.querySelector('#result');
$screen.addEventListener('click', () => {
    if($screen.classList.contains('waiting')) {     //현재 클래스가 waiting인지 확인
        $screen.classList.replace('waiting', 'ready');    //screen의 클래스를 waiting에서 ready로 변경
        $screen.textContent = '초록색이 되면 클릭하세요';
        timeoutId = setTimeout(() => {
            startTime = new Date();    //시작 시간의 new Date()
            $screen.classList.replace('ready', 'now');
            $screen.textContent = '클릭하세요!'; 
        }, Math.floor(Math.random() * 1000) + 2000);    //2 <= x < 3초 사이의 랜덤 시간
    } 
            
    else if($screen.classList.contains('ready')) {    //현재 클래스가 ready인지 확인
        clearTimeout(timeoutId);    //setTimeout 회수
        $screen.textContent = '너무 성급하시군요! 다시 누르세요!';
        $screen.classList.replace('ready', 'waiting');    //screen의 클래스를 ready에서 wating으로 변경
    } 
            
    else if($screen.classList.contains('now')) {     //현재 클래스가 now인지 확인
        endTime = new Date();    //끝나는 시간의 new Date()
        const current = endTime - startTime;    //걸린 시간
        recodes.push(current);
        const average = recodes.reduce((a, c) => a + c) / recodes.length;    //누적 값 계산
        $result.textContent = `현재 ${current/1000}s 평균 ${average/1000}s`;
        $screen.classList.replace('now', 'waiting');
        $screen.textContent = '클릭해서 시작하세요';
    }
});