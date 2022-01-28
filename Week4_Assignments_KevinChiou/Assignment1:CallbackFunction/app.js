const addNumbersToConsole = (n1, n2) => {
    let result = n1 + n2;
    console.log(`Three seconds has passed, and the result in the console is "${result}"!`);
}

const addNumbersToAlert = (n1, n2) => {
    let result = n1 + n2;
    alert(`Two seconds has passed, and the result in this alert is "${result}"!`);
}

function delayedResult (n1, n2, delayTime, callback) {
    setTimeout(callback, delayTime, n1, n2);
}

delayedResult(4, 5, 3000, addNumbersToConsole);
delayedResult(-5, 10, 2000, addNumbersToAlert);