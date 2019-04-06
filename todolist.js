
const todoform = document.querySelector(".todoform")
const inputtodo = document.querySelector(".inputtodo");
const todolist = document.querySelector(".todolist");
let todos = [];


function paintTodos(){
    localStorage.getItem("todos");

    console.log("painttodo");
    
}
function checkTodo(){
    console.log("checkTodo")
    const oldtodo_LS = localStorage.getItem("todos");
    if(oldtodo_LS!==null){
        //기존 LS 로드 후 savetodo사이클 돌리기
        const oldtodo = JSON.parse(oldtodo_LS)
        oldtodo.forEach(function(todo){
        savetodo(todo.text);
        });
        
    }else{

    }
    console.log("addinput");
    todoform.addEventListener("submit",asktodo)

}


function asktodo(event){
    console.log("asktodo");
    event.preventDefault();
    const todoinput = inputtodo.value;
    savetodo(todoinput);
    inputtodo.value="";
    
}

function savetodo(todoinput){
    //LS에 저장
    console.log("savetodo");
    const newid = todos.length +1;
    tododatas = {
        id:newid,
        text:todoinput
    };
    todos.push(tododatas);
    localStorage.setItem("todos",JSON.stringify(todos));
    //페인팅
    const newLi = document.createElement("li");
    const span = document.createElement("span");
    const delButton = document.createElement("button");
    todolist.appendChild(newLi);
    newLi.appendChild(span);
    newLi.appendChild(delButton);
    newLi.id = newid
    span.innerText= todoinput;
    delButton.innerText= "X";
    delButton.addEventListener("click",delTodo)
    
    
}
function delTodo(event){
    console.log("delete");
    const del = event.target
    const targetli = del.parentNode;
    todolist.removeChild(targetli);
    const rebuild_LS =todos.filter(function filterFn(todo){
        return todo.id !== parseInt(targetli.id);
    })
    todos = rebuild_LS;
    localStorage.setItem("todos",JSON.stringify(todos))
}
function filterFn(todo){
    return todo.id === 1
}

function init(){
    console.log("init")
    checkTodo()
}

init();