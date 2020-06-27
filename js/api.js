export default class API {
    
    constructor(){
        this.API ='https://rickandmortyapi.com/api/character'
    }

    async getCharacter(id){
        const res  = await fetch(`${this.API}/${id}`)
        const data = await res.json();
        return data;
    }
}