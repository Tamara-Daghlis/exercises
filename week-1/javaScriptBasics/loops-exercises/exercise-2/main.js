const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for(let i = 0 ; i < names.length ; i++){
    let person ={
        name: names[i],
        age: ages[i]
    }
    people.push(person);
}

for(let personIndex in people){
    console.log(people[personIndex].name + " " + "is" + " " + people[personIndex].age + " " + "years old");
}