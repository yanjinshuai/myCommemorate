let wrapper=document.querySelector('.wrapper');
let flowers=document.querySelectorAll('.flower');
let audio=document.querySelector('audio');
let music=document.querySelector('.music');
let photos=document.querySelectorAll('.photo');
let isPlay=false;
const photoArr=[
    'IMG_0003.JPG', 'IMG_0006.JPG', 'IMG_0012.JPG',
    'IMG_0013.JPG', 'IMG_0016.JPG', 'IMG_0022.JPG',
    'IMG_0026.JPG', 'IMG_0027.JPG', 'IMG_0028.JPG',
    'IMG_0030.JPG', 'IMG_0031.JPG', 'IMG_0034.JPG',
    'IMG_0039.JPG', 'IMG_0041.JPG', 'IMG_0042.JPG',
    'IMG_0043.JPG', 'IMG_0044.JPG', 'IMG_0045.JPG',
    'IMG_0046.JPG', 'IMG_0047.JPG', 'IMG_0048.JPG',
    'IMG_0049.JPG', 'IMG_0050.JPG', 'IMG_0051.JPG',
    'IMG_0052.JPG', 'IMG_0053.JPG', 'IMG_0054.JPG',
    'IMG_0055.JPG', 'IMG_0056.JPG', 'IMG_0058.JPG',
    'IMG_0061.JPG', 'IMG_0062.JPG', 'IMG_0064.JPG',
    'IMG_0069.JPG', 'IMG_0070.JPG', 'IMG_0072.JPG',
    'IMG_0073.JPG', 'IMG_0074.JPG', 'IMG_0075.JPG',
    'IMG_0084.JPG', 'IMG_0085.JPG', 'IMG_0088.JPG',
    'IMG_0091.JPG'
  ];
//背景音乐
music.onclick=()=>{
   if(isPlay){
    music.classList.add('icon-yinlemusic216');
    music.classList.remove('icon-yinlemusic214');
        isPlay=false;
        audio.pause();
   }else{
    music.classList.add('icon-yinlemusic214');
    music.classList.remove('icon-yinlemusic216');
        isPlay=true;
        audio.play();
   }
};
//照片
[...photos].forEach(item=>{
    item.style.position='absolute';
    item.style.right=random()+'px';
    item.style.top='0px';

});
//花朵
    [...flowers].forEach((item)=>{
        item.style.position='absolute';
        item.style.right=random()+'px';
        item.style.top='0px';
});

//随机数
function random(){
    let n=1;
    let m=1920;
   return  Math.floor(Math.random()*(m-n)+1)
}