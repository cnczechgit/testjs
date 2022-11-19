//Kommentare

var recordVideoOne = new Promise(function (resolve, reject) {
    'use strict';
    resolve('Video 1 Recorded');
});

var recordVideoTwo = new Promise((resolve, reject)=> {
    resolve('Video 2 Recorded');
});

var recordVideoThree = new Promise((resolve, reject)=> {
    resolve('Video 3 Recorded')
});

Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message);
})