export function getAllDogs() {
    return fetch('/dogs')
    // const url = '/dogs';
    // return await fetch(url, {method: 'GET'})
}

export function getDogNumberTwo() {
    return fetch('/dogs/2')
}

export function postNewDog() {
    const url = "/dogs";
    const headers = {"Content-Type": "applications/x-www-form-urlencoded"};
    const body = new URLSearchParams({
        name: "Fluffy",
        age: "9"
    });

    const options = {
        method: "POST",
        headers: headers,
        body: body
    };

    fetch(url, options);
}

export function postNewDogV2(name, age) {
     // Your code here
}

export function deleteDog(id) {
      // Your code here
}

// const url = "/endpoint";
// const headers = {"Content-Type": "Request body's Content-Type"};
// // Use the URLSearchParams API to format your body as shown below
// const body = new URLSearchParams({
//     key: "value"
// });

// const options = {
//     method: "GET|POST|PUT|DELETE",
//     headers: headers,
//     body: body
// };

// fetch(url, options);
//
