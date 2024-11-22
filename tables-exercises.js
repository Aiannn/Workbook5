const spongebobCharacters = [
    {
      name: "SpongeBob SquarePants",
      species: "Sea Sponge",
      occupation: "Fry Cook",
      favoriteActivity: "Jellyfishing",
    },
    {
      name: "Patrick Star",
      species: "Starfish",
      occupation: "Unemployed",
      favoriteActivity: "Eating and sleeping",
    },
    {
      name: "Squidward Tentacles",
      species: "Octopus",
      occupation: "Cashier",
      favoriteActivity: "Playing the clarinet",
    },
    {
      name: "Mr. Krabs",
      species: "Crab",
      occupation: "Restaurant Owner",
      favoriteActivity: "Counting money",
    },
    {
      name: "Sandy Cheeks",
      species: "Squirrel",
      occupation: "Scientist/Inventor",
      favoriteActivity: "Karate and science experiments",
    },
    {
      name: "Plankton",
      species: "Plankton",
      occupation: "Restaurant Owner",
      favoriteActivity: "Stealing the Krabby Patty formula",
    },
    {
      name: "Mrs. Puff",
      species: "Pufferfish",
      occupation: "Boating School Instructor",
      favoriteActivity: "Teaching and avoiding SpongeBob",
    },
    {
      name: "Gary the Snail",
      species: "Snail",
      occupation: "Pet",
      favoriteActivity: "Meowing and eating",
    },
    {
      name: "Larry the Lobster",
      species: "Lobster",
      occupation: "Lifeguard",
      favoriteActivity: "Weightlifting and staying fit",
    },
    {
      name: "Karen Plankton",
      species: "Computer",
      occupation: "Plankton's Wife/Assistant",
      favoriteActivity: "Calculating and assisting Plankton",
    },
    {
      name: "Pearl Krabs",
      species: "Whale",
      occupation: "Student",
      favoriteActivity: "Shopping and hanging out with friends",
    },
    {
      name: "Mermaid Man",
      species: "Human",
      occupation: "Retired Superhero",
      favoriteActivity: "Fighting crime",
    },
    {
      name: "Barnacle Boy",
      species: "Human",
      occupation: "Retired Superhero Sidekick",
      favoriteActivity: "Being grumpy",
    },
    {
      name: "Flying Dutchman",
      species: "Ghost",
      occupation: "Ghostly Pirate",
      favoriteActivity: "Scaring people and collecting souls",
    },
    {
      name: "Bubble Buddy",
      species: "Bubble",
    },
];

let tableBody = document.querySelector('#table-body')

function buildTableRow(array) {

    for (character of array) {
        let tr = document.createElement('tr')
        tableBody.append(tr)
    
        // SECOND WAY TO POPULATE A TABLE 
        for (key in character) {
            let td = document.createElement('td')
            td.innerText = character[key]
            tr.append(td)
        }
        // ONE WAY TO POPULATE A TABLE (not efficient/time consuming)
        // let td1 = document.createElement('td')
        // td1.innerText = character.name 
        // tr.append(td1)
    
        // let td2 = document.createElement('td')
        // td2.innerText = character.species 
        // tr.append(td2)
    
        // let td3 = document.createElement('td')
        // td3.innerText = character.occupation 
        // tr.append(td3)
    
        // let td4 = document.createElement('td')
        // td4.innerText = character.favoriteActivity 
        // tr.append(td4)
    }
}
buildTableRow(spongebobCharacters)

function onlyUnique(value, index, array) {
    return array.indexOf(value) === index
}

function createAndPopulateDropdown() {
    let select = document.querySelector('#select')
    let arrayOfSpecies = spongebobCharacters.map(char => {
        return char.species
    })  // GRAB ALL SPECIES AND PUT TO NEW ARRAY OF SPECIES
    // console.log(arrayOfSpecies)
    let arrayOfSpeciesOnlyUnique = arrayOfSpecies.filter(onlyUnique)
    // console.log(arrayOfSpeciesOnlyUnique)
    // FILTER NEW ARRAY OF SPECIES TO MAKE ALL ELEMNTS BEING UNIQUE
    for (specie of arrayOfSpeciesOnlyUnique) {
        let option = new Option(specie, specie) 
        select.append(option)
    }
    //POPULATE SELECT
}
createAndPopulateDropdown()

function filterBy(spongebobCharacters) {
    let newArr = spongebobCharacters.filter(char => {
        return char.species === select.value 
    })
    let tableBody = document.querySelector('#table-body')
    tableBody.innerHTML = ''
    buildTableRow(newArr)
}
