const cutePets = [
  {
    petName: 'Melzushka',
    image: '/assets/pets/melzushka.png',
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
  {
    petName: 'Juquete',
    image: './assets/pets/juquete.jpeg',
    age: 12,
    favorites: 'Being lazy all day',
    race: 'White tabby',
    weight: 6,
  },
];

const petCards = document.getElementById("pet-cards");

// Loop through the cutePets array
cutePets.forEach(pet => {

  const cardElements = {
    // Heading
    h2Element: document.createElement('h2'),
    h2ElementId: "pet-name",
    h2ElementTextContent: pet.petName,

    // Image
    petImgElement: document.createElement('img'),
    petImgElementId: "pet-image",
    petImgElementSrc: pet.image,

    // Listing
    ulElement: document.createElement('ul'),
    liAge: document.createElement('li'),
    liAgeId: 'pet-age',
    liAgeTextContent: `Age: ${pet.age}`,
    liFavorite: document.createElement('li'),
    liFavoriteId: 'pet-favorite',
    liFavoriteTextContent: `Favorite: ${pet.favorites}`,
    liRace: document.createElement('li'),
    liRaceId: document.createElement('pet-race'),
    liRaceTextContent: `Race: ${pet.race}`,
    liWeight: document.createElement('li'),
    liWeightId: 'pet-weight-id',
    liWeightTextContent: `Weight: ${pet.weight}`,
  };

  // Create a new div element with the class "pet-card"
  const newPetCardElement = document.createElement("div");
  newPetCardElement.classList.add("pet-card");

  // Pet title
  const h2 = cardElements.h2Element;
  h2.id = cardElements.h2ElementId;
  h2.textContent = cardElements.h2ElementTextContent;

  // Pet image
  const petImg = cardElements.petImgElement;
  petImg.id = cardElements.petImgElementId;
  petImg.src = cardElements.petImgElementSrc;

  // Pet info
  const ul = cardElements.ulElement;

  const age = cardElements.liAge;
  age.id = cardElements.liAgeId;
  age.textContent = cardElements.liAgeTextContent;

  const favorite = cardElements.liFavorite;
  favorite.id = cardElements.liFavoriteId;
  favorite.textContent = cardElements.liFavoriteTextContent;

  const race = cardElements.liRace;
  race.id = cardElements.liRaceId;
  race.textContent = cardElements.liRaceTextContent;

  const weight = cardElements.liWeight;
  weight.id = cardElements.liWeightId;
  weight.textContent = cardElements.liWeightTextContent;

   // Show info
   const petInfo = document.createElement('button');
   petInfo.classList.add('pet-info-btn');
   petInfo.textContent = 'Pet Info';
 
   petInfo.addEventListener('click', () => {
     
   });

  // Append the elements to the parent
  ul.appendChild(age);
  ul.appendChild(favorite);
  ul.appendChild(race);
  ul.appendChild(weight);

  // Append the new pet card element to the "pet-cards" section
  newPetCardElement.appendChild(h2);
  newPetCardElement.appendChild(petImg);
  newPetCardElement.appendChild(petInfo);
  newPetCardElement.appendChild(ul);
  petCards.appendChild(newPetCardElement);
});