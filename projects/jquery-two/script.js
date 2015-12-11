$(document).ready(function(){
 var avengers = ["Iron Man", "Thor", "Hulk", "Ant Man", "Wasp"];

 _.each(avengers, function(avenger) {
    //console.log(toDashCase(avenger)) 
 });
 
 /*
 * Takes an array of avengers returns an <ul> populated with avengers
 */
 $(addAvengers(avengers, 'Captain America'));
 function createAvengersList(avengers) {
     var $ul = $('<ul>')
       .attr('id', 'avengers-list')
       .append(_.map(avengers, function(avenger) {
           return $('<li>')
               .attr('id', toDashCase(avenger))
           .html(avenger);
       }));
       //console.log($ul);
     return $ul;
 }
 $(createAvengersList(avengers/*.sort()*/)).appendTo('main');
 $(removeAvengers(["Ant Man"]));
 $(removeAvengers(["Wasp"]));
 $(sortAvengers());
 $('li', '#avengers-list').hide();
 $(appearAvenger());
});

//takes any string and returns the string formatted all lowercase, with spaces replaces by dashes. For example, "Iron Man" becomes "iron-man"

function toDashCase(str) {
   return str.toLowerCase().replace(" ", "-");
}

function removeAvengers(avengers) {
   _.each(avengers, function(avenger) {
       var $found = findAvengerItem(toDashCase(avenger));
       if($found[0]) $found.remove();
   });
}

function findAvengerItem(id) {
   return $('li#' + id);
}

function addAvengers(avengers, newAvenger) {
    avengers.push(newAvenger);
}

///////Sort Avengers List

function sortAvengers() {
    $("li", "#avengers-list").sort(function(a, b) {
    return $(a).text() > $(b).text();
    }).appendTo("#avengers-list");
}



function appearAvenger() {
   $('#avengers-list li').each(function(i, li) {
    setTimeout(function() {$(li).fadeIn();}, i * 1500);
   });
}


var $btn = $('<button>')
    .text("Reorder List")
    .on("click", onClick)
    .appendTo("body");
    
function onClick(event) {
    $('li', '#avengers-list').first().appendTo('#avengers-list');
    //$('li', '#avengers-list').first().remove();
}

var $btn = $("<button>")
    .text('click')
    .on('click', function(e) { //can use one instead of on to limit to one click
        console.log(e.currentTarget + 'was clicked.');
    })
    .appendTo('body');
    
