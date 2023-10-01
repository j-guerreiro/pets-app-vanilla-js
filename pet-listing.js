const cutePets = [
  {
    petName: 'Melzushka',
    image: './assets/pets/melzushka.png',
    age: 14,
    favorites: 'Loves to hunt!',
    race: 'Caramel',
    weight: 8,
  },
  {
    petName: 'Mel',
    image: './assets/pets/mel.jpeg',
    age: 16,
    favorites: 'Loves to sleep all day!',
    race: 'Tabby',
    weight: 4,
  },
  {
    petName: 'Felix',
    image: './assets/pets/felix.png',
    age: 10,
    favorites: 'Chasing birds all day long',
    race: 'Undefined',
    weight: 7,
  },
];

const petCards = document.getElementById("pet-cards");

// Loop through the cutePets array
cutePets.forEach(pet => {
  // Create a new div element with the class "pet-card"
  const newPetCardElement = document.createElement("div");
  newPetCardElement.classList.add("pet-card");

  // Populate the pet card with pet information
  newPetCardElement.innerHTML = `
    <h2 id="pet-name">${pet.petName}</h2>
    <img id="pet-image" src="${pet.image}">
    <ul>
      <li id="pet-age">Age: ${pet.age}</li>
      <li id="pet-favorite">Favorite: ${pet.favorites}</li>
      <li id="pet-race">Race: ${pet.race}</li>
      <li id="pet-weight">Weight: ${pet.weight}lbs</li>
    </ul>
  `;

  // Append the new pet card element to the "pet-cards" section
  petCards.appendChild(newPetCardElement);
});