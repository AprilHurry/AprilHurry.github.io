
//Function 1
function objectValues(obj) {
    var keys = Object.keys(obj);
    var vals = [];
    for (var i = 0; i < keys.length; i++) {
        var currentKey = keys[i];           //number
        var currentVal = obj[currentKey];  //string?
        vals.push(currentVal);
    }
    return vals;
}

//Function 2            
function keysToString(obj) {
    var objKeys = Object.keys(obj);  //creates an array of keys
    var keys = [];
    for (var i = 0; i < objKeys.length; i++) {
        var currentKey = objKeys[i];
        keys.push(currentKey);
    }
    return keys.join(' ');
}

//Function 3
/*
QUnit.test("valuesToString() : Should take an object and return all its string values in a string each separated with a space", function(assert){
                var data = {a: "one", boolean: false, b: "two", ponies: "crayons", dingle: "dangle"};
                assert.equal(valuesToString(data), "one false two crayons dangle");
            });
*/

function valuesToString(obj) {
    var keys = Object.keys(obj);
    var vals = [];
    for (var i = 0; i < keys.length; i++) {
        var currentKey = keys[i];
        var currentVal = obj[currentKey];
        vals.push(currentVal);
    }
    return vals.join(' ');
}

//Function 4

function arrayOrObject(par1) {
    if (typeof par1 === 'object' && Array.isArray(par1) === false) {
        return 'object';
    } else 
    return 'array';
}

//Function 5
            
function capitalizeWord(str) {
     var letters = str.split('');
     letters[0] = letters[0].toUpperCase();
     return letters.join('');
}

//Function 6
/*QUnit.test("capitalizeAllWords() : Should take a string of words and return a string with all the words capitalized ", function(assert){
                assert.equal(capitalizeAllWords("one two three four"), "One Two Three Four");
                assert.equal(capitalizeAllWords("please excuse my dear aunt sally"), "Please Excuse My Dear Aunt Sally");
            });*/
            
function capitalizeAllWords(str) {
    var words = str.split(' ');
  
    var newWords = [];
   
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var letters = word.split('');
      letters[0] = letters[0].toUpperCase();
      newWords.push(letters.join(''));
    }
    return newWords.join(' ');
    
}

//Function 7
/*
QUnit.test("welcomeMessage() : Should take an object with a name property and return 'Welcome <Name>!'", function(assert){
                assert.equal(welcomeMessage({name: "bert"}), "Welcome Bert!");
                assert.equal(welcomeMessage({name: "Charlie"}), "Welcome Charlie!");
            });
            */
            
function welcomeMessage(obj) {
    var letters = obj.name.split('');
    letters[0] = letters[0].toUpperCase();
    return 'Welcome' + ' ' + letters.join('') + '!';
}


//Function 8
/*
QUnit.test("profileInfo() : Should take an object with a name an a species and return '<Name> is a <Species>'", function(assert){
                assert.equal(profileInfo({name: "jake", species: "dog"}), "Jake is a Dog");
                assert.equal(profileInfo({name: "reggie", species: "dog"}), "Reggie is a Dog");
            });
*/
function profileInfo(obj) {
  var capName = obj.name.split('');
  capName[0] = capName[0].toUpperCase();
  var capSpecies = obj.species.split('');
  capSpecies[0] = capSpecies[0].toUpperCase();
  return capName.join('') + ' is a ' + capSpecies.join('');  
}

//Function 9
/*
QUnit.test("maybeNoises() : Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises'", function(assert){
                assert.equal(maybeNoises({noises:["bark", "woof", "squeak","growl"]}), "bark woof squeak growl");
                assert.equal(maybeNoises({noises: []}), "there are no noises");
                assert.equal(maybeNoises({}), "there are no noises");
            });
*/

function maybeNoises(obj) {
  if(obj.noises === undefined || obj.noises.length === 0) {
     return 'there are no noises';
  } else {
    return obj.noises.join(' ');
  }     
}

//Function  10
/*QUnit.test("hasWord() : Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.", function(assert){
                var data = "This is a super awesome string of words";
                assert.strictEqual(hasWord(data, "awesome"), true);
                assert.strictEqual(hasWord(data, "words"), true);
                assert.strictEqual(hasWord(data, "turtle"), false);
            });
            */
            
function hasWord(words, word) { 
  if(words.search(word) > -1) {
    return true;
  } else {
    return false;
  }
}


//Function 11
/*
QUnit.test("addFriend() : Should take a name and an object and add the name to the object's friends array then return the object", function(assert){
                assert.deepEqual(addFriend("lester", {friends:[]}), {friends:["lester"]});
                assert.deepEqual(addFriend("jimmy", {friends:["bobby","jones"]}), {friends:["bobby", "jones", "jimmy"]});
            });
*/

function addFriend(name, obj) {
  obj.friends.push(name);
  return obj;    
}

//Function 12
/*
QUnit.test("isFriend() : Should take a name and an object and return true if <name> is a friend of <object> and false otherwise", function(assert){
                assert.equal(isFriend("jimmy",{friends:["bobby", "ralf"]}), false);
                assert.equal(isFriend("ralf",{friends:["bobby", "ralf"]}), true);
                assert.equal(isFriend("chuck",{}), false);
            });
*/

function isFriend(name, obj) {
  var friendCheck = [];
  if(Object.keys(obj).length === 0) {
      return false;
  } else {
      for(var i = 0; i < obj.friends.length; i++) { 
        if(name === obj.friends[i]) {
          friendCheck.push(i);
       } else {
         friendCheck.push();
       }    
    } if (friendCheck.length !== 0) {
      return true; 
  } else {
     return false;
  }   
  }  
}

//Function 13

/*
QUnit.test("nonFriends() : Should take a name and a list of people, and return a list of all the names that <name> is not friends with", function(assert){
                var data = [
                    {name: "Jimmy", friends:["Sara", "Liza"]},
                    {name: "Bob", friends:[]},
                    {name: "Liza", friends: ["Jimmy"]},
                    {name: "Sara", friends: ["Jimmy"]}
                ];
                assert.deepEqual(nonFriends("Jimmy", data), ["Bob"]);
                assert.deepEqual(nonFriends("Bob", data), ["Jimmy", "Liza", "Sara"]);
                assert.deepEqual(nonFriends("Sara", data), ["Bob","Liza"]);
            });
*/
function nonFriends (name, data){
  var notFriends = [];
  for (var i = 0; i < data.length; i++) {
    var friend = data[i].friends;
    
    var check = false;
    if (data[i].name !== name) {
      for (var j = 0; j < friend.length; j++) {
        if(friend[j] === name) {
          check = true;
        } 
      }
      if (!check) {
          notFriends.push(data[i].name);
        } else {
          check = true;
        }
    }
  } 
  return notFriends;
}

//Function 14
/*
QUnit.test("updateObject() : Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.", function(assert){
                var data = {a: "one", b: "two", "hokey": false};
                assert.deepEqual(updateObject(data, "b", "three"), {a:"one", b:"three", hokey: false});
                var data = {a: "one", b: "two", "hokey": false};
                assert.deepEqual(updateObject(data, "ponies", "yes"), {a:"one", b:"two", hokey: false, ponies: "yes"});
                var data = {a: "one", b: "two", "hokey": false};
                assert.deepEqual(updateObject(data, "a", Infinity), {a:Infinity, b:"two", hokey: false});
            });
*/

function updateObject(data, name, value) {
  for (var i = 0; i < Object.keys(data).length; i++) {
    if(name === Object.keys(data)[i]) {
      data[name] = value;
    } else {
    data[name] = value;
    }
  } 
  return data;
} 




//Function 15
/*QUnit.test("removeProperties() : Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>", function(assert){
                var data = {a: "one", b: "two", "hokey": false};
                removeProperties(data, ["a","hokey"]);
                assert.deepEqual(data, {b: "two"});
                
                var data = {a: "one", b: "two", "hokey": false};
                removeProperties(data, ["b"])
                assert.deepEqual(data, {a: "one", "hokey": false});
                
                var data = {a: "one", b: "two", hokey: false};
                removeProperties(data, []);
                assert.deepEqual(data, {a: "one", b: "two", "hokey": false});
            });
*/

function removeProperties(data, array) {
  for (var i = 0; i < Object.keys(data).length; i++) {
    for (var j = 0; j < array.length; j++) {
      if (Object.keys(data)[i] === array[j]) {
        delete data[Object.keys(data)[i]];
      }
    }
  }
  return data;
}


//Function 16

function dedup(data) {
for (var i = 0; i < data.length; i++) {
  if(data[i] === data[i + 1]) {
    data.splice(i + 1,1);
    i-=1;
  }
 }
return data;
}




