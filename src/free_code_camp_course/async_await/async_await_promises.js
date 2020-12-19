function resolveAfter3Seconds() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('resolved');
            reject('rejected');
        }, 3000);
    });
}

// promises
/*resolveAfter3Seconds()
    .then(data => {
        console.log(data);
    }).catch(err => console.error(err));*/

// handling a promise with async await
async function getAsyncData() {
    const result = await resolveAfter3Seconds();
    console.log(result);
}

getAsyncData();