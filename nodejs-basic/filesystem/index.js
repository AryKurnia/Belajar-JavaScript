// TODO: tampilkan teks pada notes.txt pada console.

const fs = require('fs');
const { resolve } = require('path');

function readTextCalback(error,data) {
    if (error) {
        console.log('Data tidak ditemukan.');
        return;
    }
    console.log(data);
}

fs.readFile(resolve(__dirname,'notes.txt'), 'UTF-8', readTextCalback);