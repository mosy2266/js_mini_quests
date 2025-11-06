const myFirstPromise = new Promise((resolve, reject) => {
    resolve('Hello, Promise!');
});

// 아래 코드는 수정하지 마세요.
myFirstPromise.then(message => {
  console.log(message);
});

async function waitForMessage(){
    const promise = await new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello, Async/Await!'), 1000);
    })

    console.log(promise);
}

waitForMessage();

/*
const result = await somePromise(); 이거는

somePromise().then(result => {
    ...
});
와 완전히 동일한 의미
*/