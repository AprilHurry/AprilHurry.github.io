// Step 1//
var animal = {};
animal.species = 'Raccoon';
animal['name'] = 'Shaggy';  
animal.noises = [];
console.log(animal);

// Step 2//
var noises = [];
noises[0] = 'Squee';
noises.push('Bark');
noises.unshift('Meow');
noises[noises.length] = 'Squeal';
console.log(noises.length);
console.log(noises[noises.length -1]);
console.log(noises);

// Step 3//
animal['noises'] = noises;
noises.push('screech');
console.log(animal);

// Step 4//
//
//

// Step 6//
var animals = [];
animals.push(animal);
console.log('animals', animals);
var duck = {
  species: 'duck',
  name: 'Jerome',
  noises: ['quack', 'honk', 'sneeze', 'woosh']
};
animals.push(duck);
var zebra = {
  species: 'zebra',
  name: 'Stripey',
  noises: ['neigh', 'bark', 'bray', 'snort'] 
};
var giraffe = {
  species: 'giraffe',
  name: 'Tall',
  noises: ['snort', 'grunt', 'hum1', 'hun2'] 
};
animals.push(zebra);
animals.push(giraffe);
console.log('animals', animals);

// Step 7//
//Use an array to store friends because it will be an ordered list//
var friends = [];
function randomElement(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var randomAnimal = animals[randomElement(0, animals.length-1)];
friends.push(randomAnimal.name);
console.log(friends);
giraffe['friends'] = friends;
console.log(giraffe);

// Part 2 Step 1//

function search (animalName) {
    for (var i = 0; i < animals.length; i++) {
        if (animalName === animals[i].name) {
            return animals[i];
        } 
    }
}

//Step 2//
function edit (anotherName, object) {
     for (var j = 0; j < animals.length - 1; j++) {
        if (anotherName === animals[j].name) {
         animals[j] = object; 
        }
     } 
}


//Step 3//
function remove (name2) {
    for (var k = 0; k < animals.length -1; k++) {
        if (name2 === animals[k].name) {
            animals.splice(k,1);
        }
    }
}

//Step 4//
function create (newAnimal) {
    if (newAnimal.name && newAnimal.species) {
        for( var l = 0; l < animals.length; l++) {
          if(newAnimal.name === animals[l].name) {
            return null; 
          } 
        } 
        animals.push(newAnimal);
    }
}
        


