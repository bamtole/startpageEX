const body = document.querySelector("body");
const numOfImg = 3;


function getnumber(){

    const number= Math.floor(Math.random()*numOfImg);
    console.log(number)
    return number;
}
function showImg(number){
    const img = new Image();
    img.src = `./image/${number+1}.jpg`
    body.append(img)

}

function init(){
    const number= getnumber();
    showImg(number);

}
init()
