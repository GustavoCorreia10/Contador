let count = 0;
const countElement = document.getElementById('count');

function increment() {
    count++;
    countElement.innerText = count;
}

function decrement() {
    count--;
    countElement.innerText = count;
}

function reset() {
    count = 0;
    countElement.innerText = count;
}
