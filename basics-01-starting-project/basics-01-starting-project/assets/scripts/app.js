const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) { // 함수가 전역변수를 이용해서 값을 반환 하는것은 bad, 전역변수 값을 수정하는건 ok
    currentResult = currentResult + userInput.value;
}

addBtn.addEventListener('click', add); // 클릭 했을때 add 함수를 찾아서 호출해라!