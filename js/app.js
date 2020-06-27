import API from "./api.js";
import Character from './character.js';

const api = new API();

const init = async (id)=>{
    const result = await  api.getCharacter(id)
    new Character(result);
    console.log(result)
}

init(3)
