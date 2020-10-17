function get(url) {
    return new Promise(function(resolve, reject) {
        let req = new XMLHttpRequest(); // new object to xmlhttpreq
        req.open('GET', url); // get url
        req.onload = function() {
            if (req.status == 200) {
                resolve(req.response); // after 200 ms record the response
            } else {
                reject(Error(req.statusText)); // or return error
            }
        };

        req.onerror = function() {
            return 'Network Error'; //if error occurs, return this function
        };

        req.send(); // all logic defined, send the request

    });
}

// Use all of these

get('stoty.json').then(function(response) {
        JSON.parse
        console.log('Success', response);
    },
    function(error) {

        console.error('Failed!', error);

    })