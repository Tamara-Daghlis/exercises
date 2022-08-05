const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/solar-system-db', { useNewUrlParser: true })

const Schema = mongoose.Schema

const solarSystemSchema = new Schema({
    planets: [{ type: Schema.Types.ObjectId, ref: 'Planet' }],
    starName: String
})

const planetSchema = new Schema({
    name: String,
    system: { type: Schema.Types.ObjectId, ref: 'SolarSystem' },
    visitors: [{ type: Schema.Types.ObjectId, ref: 'Visitor' }]
})

const visitorSchema = new Schema({
    name: String,
    homePlanet: { type: Schema.Types.ObjectId, ref: 'Planet' },
    visitedPlanets: [{ type: Schema.Types.ObjectId, ref: 'Planet' }]
})

const SolarSystem = mongoose.model('SolarSystem', solarSystemSchema)
const Planet = mongoose.model('Planet', planetSchema)
const Visitor = mongoose.model('Visitor', visitorSchema)

let solarSystem = new SolarSystem({
    planets: [],
    starName: 'sun'

})
let planet1 = new Planet({
    name: "Earth",
    system: solarSystem,
    visitors: []
})

let planet2 = new Planet({
    name: 'Jupiter',
    system: solarSystem,
    visitors: []

})

let planet3 = new Planet({
    name: 'Mars',
    system: solarSystem,
    visitors: []
})


let visitore1 = new Visitor({
    name: 'Natasha',
    homePlanet: planet1,
    visitedPlanets: []
})

let visitore2 = new Visitor({
    name: 'Amer',
    homePlanet: planet2,
    visitedPlanets: []
})

visitore1.visitedPlanets.push(planet2)
visitore1.visitedPlanets.push(planet3)

visitore2.visitedPlanets.push(planet1)
visitore2.visitedPlanets.push(planet3)

planet1.visitors.push(visitore2)

planet2.visitors.push(visitore1)

planet3.visitors.push(visitore1)
planet3.visitors.push(visitore2)

solarSystem.planets.push(planet1)
solarSystem.planets.push(planet2)
solarSystem.planets.push(planet3)

// solarSystem.save()

// planet1.save()
// planet2.save()
// planet3.save()

// visitore1.save()
// visitore2.save()


// Visitor.find({}).populate({
//     path: 'visitedPlanets',
//     populate: {
//         path: 'visitors'
//     }
// })
//     .exec(function (err, visitors) {
//         visitors.forEach(visitor => {
//             let visitedPlanets = visitor.visitedPlanets
//             visitedPlanets.forEach(planet => {
//                 let visitors = planet.visitors
//                 visitors.forEach(visitor => {
//                     console.log(`planet ${planet.name} visited by ${visitor.name}`)
//                 })
//             });
//         })
//     })


// Planet.findOne({}).populate("visitors").exec(function (err, planete) {
//     planete.visitors.forEach(v => console.log(`Planet ${planete.name} visited by ${v.name}`))
// })

SolarSystem.findOne({}).populate({
    path: 'planets',
    populate: {
        path: 'visitors'
    }
})
    .exec(function (err, solarSystem) {
        let allPlantes = solarSystem.planets
        console.log(solarSystem)
        console.log(solarSystem.planets)
        allPlantes.forEach(planet => {
            let visitors = planet.visitors
            console.log(`Planet ${planet} visited by ${visitors}`)
        })
    })











