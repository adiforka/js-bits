// with promises
function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making a request to ${location}`);
        if (location === 'Momma Bear') {
            resolve('Momma says hi');
        } else {
            reject('We can only talk to Momma');
        }
    });
}

function processResponse(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response');
        resolve(`Extra information: ${response}`);
    });
}

// execution
makeRequest('Momma Bear').then(response => {
    console.log('response received');
    return processResponse(response);
}).then(processedResponse => {
    console.log(processedResponse);
}).catch(err => console.log(err));
