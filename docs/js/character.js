export default class Character {
  
  constructor({ name, image, gender, species, status }) {
    this.characterContainer = document.querySelector("#character-container");
    this.name = name;
    this.image = image;
    this.gender = gender;
    this.species = species;
    this.status = status;
    this.render();
  }

  build() {
    return /*html*/ `
    <article class="character">
      <div class="character-grid">
        <img class="character-image" src="${this.image}"/>
        <h2 class="character-name">${this.name}</h2>
        <div class="character-labels">
            <h3 class="character-label">Genero: ${this.gender}</h3>
            <h3 class="character-label">Especie: ${this.species}</h3>
            <h3 class="character-label">Status:  ${this.status}</h3>
        </div>
      </div>
    </article>
    `;
  }
  render() {
    return (this.characterContainer.innerHTML = this.build());
  }
}
