const watch = document.querySelector(".watch");

function callDate(){
    const date = new Date();
    const hour = date.getHours(),
        minute = date.getMinutes(),
        second  = date.getSeconds();
    watch.innerText = `${hour}:${minute<10?`0${minute}`:minute}:${second<10?`0${second}`:second}`;

}


function init(){
    callDate();
    setInterval(callDate,30);
}
init();