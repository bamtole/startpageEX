const nameform = document.querySelector(".nameform");
const nameDisplay =document.querySelector(".nameDisplay");
const inputname = document.querySelector(".inputname");

function deleteID(event){
    localStorage.removeItem("ID");
    const loadedName = document.querySelector("span");
    nameDisplay.removeChild(loadedName);
    const button = document.querySelector("button");
    nameDisplay.removeChild(button);
    checkName();
}

function loadName(){
    inputname.style.display= "none";
    const ID = localStorage.getItem("ID");
    const span = document.createElement("span");
    nameDisplay.appendChild(span);
    span.innerText= `${ID}`;
    const button = document.createElement("button");
    nameDisplay.appendChild(button);
    button.innerText= "x";
    button.addEventListener("click",deleteID)
}



function checkName(){
    const ID = localStorage.getItem("ID");
    if(ID !== null){
        loadName();
        
    }else{
        askName();
    }
}

function askName(){
    inputname.style.display="";
    nameform.addEventListener("submit",gotName);
    
}

function gotName(event){
    event.preventDefault();
    const newID= inputname.value;
    localStorage.setItem("ID",newID);
    inputname.value= "";
    checkName();
}


function init(){
    checkName();
}
init();
