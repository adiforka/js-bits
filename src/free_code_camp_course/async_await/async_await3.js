// with async await instead of promises (less nesting and more readability)
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

// async context
async function doWork(location) {
    // using try-catch to catch errors
    try {
        const response = await makeRequest(location);
        console.log('Response received');
        const processedResponse = await processResponse(response);
        console.log(processedResponse);
    } catch (err) {
        console.log(err);
    }
}

// execution
doWork('Momma Bear');
doWork('Google');
