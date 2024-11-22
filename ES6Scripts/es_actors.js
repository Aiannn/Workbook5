let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["AWho is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["AWalking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
];

let thatActor = academyMembers.find(actor => {
    return actor.memID === 187
})
// console.log(thatActor)

let more3filmsActors = academyMembers.filter(actor => {
    return actor.films.length >=3
})
// console.log(more3filmsActors)

let actorsInFilmsStartsWithA = academyMembers.filter(actor => {
    for (let film of actor.films) {
        if (film.startsWith("A")) {
            return actor 
        }
    }
})
console.log(actorsInFilmsStartsWithA)