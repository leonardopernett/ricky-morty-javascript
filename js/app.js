import API from "./api.js";
import Character from './character.js';

// const btn = document.querySelector('#btn');
// let count = 0;
const api = new API();


const init = async (id)=>{
    const result = await  api.getCharacter(id)
    console.log(result)
    new Character(result);
}

// btn.addEventListener('click',async ()=>{
//     count ++;
//     let response = await  api.getCharacter(count)
//     new Character(response);
// })

init(1)
