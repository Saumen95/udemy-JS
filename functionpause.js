function* getEmployee() {
    console.log('Start');
    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        console.log(name);
    }

    console.log('the function has ended');
}

getEmployee();

function* displayResponse() {

    const response = yield;
    console.log(`your response is '${response}'`);

}

const iterator = displayResponse();
iterator.next();
iterator.next('Hi,There');
