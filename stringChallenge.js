'use strict';
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));


function camelCase(name){
    const names = name.split('_');
    names[1] = names[1].replace(names[1][0],names[1][0].toUpperCase());
    names.join('');
    return names.join("");
}

const textarea = document.querySelector('textarea');
const button = document.querySelector('button');
textarea.style.width = '150px';
textarea.style.height = '100px';
button.style.width = '100px';
button.style.height = '50px';
button.textContent = 'Submit';
button.style.fontSize = '25px';
document.querySelector('button').addEventListener('click',function(){
    const text = textarea.value;
    const texts = text.split('\n');
    const newText = [];
    for(let [index,value] of texts.entries()){
        value = camelCase(value.toLowerCase()).trim().padEnd(20,' ') + '✅'.repeat(index+1);
        newText.push(value);
    }
    console.log(newText.join('\n'));
})

// console.log(camelCase('sai_teja'.toLowerCase()));