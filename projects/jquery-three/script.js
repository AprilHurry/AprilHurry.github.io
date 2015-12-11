$(document).ready(function() {
   
    var oldGuardians = [
    {
      name: "Star Lord",
      notes: "Team leader"
    },
    {
      name: "Drax the Destroyer"
    },
    {
      name: "Adam Warlock"
    },
    {
      name: "Quasar",
      notes: "Changed name to Martyr in Guardians of the Galaxy vol. 2 #12 (May 2009)."
    },
    {
      name: "Rocket",
      notes: "Served as temporary leader during Star-Lord's absence"
    },
    {
      name: "Gamora"
    }
  ];

  var newGuardians = [
    {
      name: "Mantis",
      notes: "Served as an advisor beginning in Guardians of the Galaxy vol. 2 #1 (July 2008) before becoming an active member."
    },
    {
      name: "Groot",
      notes: "Appeared as a sapling beginning in Guardians of the Galaxy vol. 2 #1 (July 2008); joined active team after fully regrowing."
    },
    {
      name: "Jack Flag"
    },
    {
      name: "Quasar",
      notes: "Changed name to Martyr in Guardians of the Galaxy vol. 2 #12 (May 2009)."
    },
    {
      name: "Cosmo the Spacedog",
      notes: "Assisted the team beginning in Guardians of the Galaxy vol. 2 #1 (July 2008) before officially joining team."
    },
    {
      name: "Major Victory",
      notes: "Also member of the alternate reality Guardians of the Galaxy team."
    },
    {
      name: "Bug"
    },
    {
      name: "Moondragon",
      notes: "Resurrected by Drax and Phyla-Vell."
    }
  ];
  
  // ALL YOUR CODE BELOW HERE //
var allGuardians = oldGuardians.concat(newGuardians);
console.log(allGuardians);

var heroNames = _.pluck(allGuardians, 'name');
console.log(heroNames);

var firstNames = $.map(allGuardians, function(g) {
    return g.name.split(" ")[0];
});
console.log(firstNames);

/*
var groot = _.filter(allGuardians, function(g) {
    return g.name === 'Groot';
})
*/  
var groot = _.filter(allGuardians, filterByName('Groot'));  
console.log(groot); 
  
  
  // ALL YOUR CODE ABOVE HERE //


function filterByName(name) {
    return function(g) {
    return g.name === name;
    }
}

allGuardians.sort(function(a, b) { //a is previous value, b is next value
    var an = a.name;
    var bn = b.name;
    return an > bn ? 1 : -1; 
});  

var createTable = function (guardians, tableID) {
      var createRow = function (guardian) {
          var $row = $("<tr>");
          var $name = $("<td>").text(guardian.name);
          var $notes = $("<td>").text(guardian.notes || "No Data Available");
          $row.append($name);
          $row.append($notes);
          return $row;
      };
      var $table = $("<table>")
         .attr('id', tableID);
      var $header = $('<tr>');
      var $nameH = $('<th>').text('NAME');
      var $notes = $('<th>').text('NOTES');
      $header.append($nameH);
      $header.append($notes);
      var $rows = guardians.map(createRow);
      $table.append($header);
      $table.append($rows);
      return $table;
};



$('body').append(createTable(allGuardians, 'allGuardians'));
formatTable('allGuardians', '#d9f2e6');

function formatTable(name, color) {
    $('#' + name).css('background-color', color);
    $('td').css('border', '1px solid black');
    $('th').css('border', '1px solid black');
    $('table').css('padding', '2px');
    $('td').css('padding', '2px');
    $('th').css('padding', '2px');
    $('table').css('margin-bottom', '20px');
}



$('body').append(createTable(oldGuardians, 'oldGuardians'));
formatTable('oldGuardians', '#99bfcc');
$('body').append(createTable(newGuardians, 'newGuardians'));
formatTable('newGuardians', '#ffd699');

var $btn = $('<button>')
    .text("Combine Tables")
    .on("click", onClick)
    .appendTo("body");
    

function onClick(event) {
  $('#oldGuardians > tbody:last').append($('#newGuardians > tbody').html());
  $('#newGuardians').remove();
} 


});



