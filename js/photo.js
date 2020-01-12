// let flowerbox=document.querySelector('.flowerbox');
const fs=require('fs');

let photoArr=[];
const photoPath=fs.readdirSync(__dirname+'image/100CLOUD');
photoPath.forEach(item=>{
    if(item.isFile()){
        photoArr.push(item);
    }
})
console.log(photoArr);