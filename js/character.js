
export default class Character {
  constructor({ name, image }) {
    this.characterContainer = document.querySelector("#character-container");
    this.name = name;
    this.image = image;
    this.render();
  }

  build() {
    return `
        <article class="character">
          <div class="character-grip">
            <h2>${this.name}</h2>
            <img src=${this.image} >   
          </div>
        </article>
    `;
  }
  render() {
    if(this.characterContainer ===null){
        return console.log('null')
    }else {
        return this.characterContainer.innerHTML = this.build();
    }
  }
}
