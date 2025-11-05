console.log('Start');

setTimeout(() => {
    console.log('Async Operation Complete');
    setTimeout(() => {
        console.log('End');
    }, 0);
}, 1000);

