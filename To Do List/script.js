"use strict";

const taskBox = document.querySelector(".task-box input");
const addButton = document.querySelector(".task-box button");
const tasks = document.querySelector(".task-list");

function addTask(){
    if (taskBox.value === ''){
        alert('You must write something!')
    }else{
        const li = document.createElement('li');
        li.innerHTML = taskBox.value;
        tasks.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    taskBox.value = "";
    saveData();
}

tasks.addEventListener(
    'click',function (e){
        console.log(e);
        if (e.target.tagName === "LI") {
            e.target.classList.toggle('task1');
        }else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
        }
        saveData();
    },false
);

function saveData(){
    localStorage.setItem('data',tasks.innerHTML);
}

function showData(){
    tasks.innerHTML = localStorage.getItem('data');
}
showData();