// let flowerbox=document.querySelector('.flowerbox');
const fs=require('fs');

let photoArr=[];
const photoPath=fs.readdirSync(__dirname+'/image/100CLOUD');
console.log(photoPath);