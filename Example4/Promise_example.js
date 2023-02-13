// Promise

// Initialization of promise.
/* promise has 2 callback parameters
    - resolve
    - reject
*/
const promise = new Promise((resolve, reject) => {
    const dbStatus = 'fail';
    if (dbStatus === 'success') {
        const dbData = { id: 1, name: 'user1', email: 'user@email.com' };
        resolve(dbData);
    } else {
        reject("Failed to fetch data");
    }
});

function validation(response) {
    const newReponse = { ...response, isValid: true };
    return Promise.resolve(newReponse);
}
const additionalErrorHandling = error => {
    return Promise.reject(`${error}, extra error handling`);
}

promise.then(validation)
    .then(response => {
        console.log(response);
    })
    .catch(additionalErrorHandling)
    .catch(error => {
        console.log(error);
    });

    