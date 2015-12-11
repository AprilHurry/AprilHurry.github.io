$(document).ready(function() {
    $.getJSON('data/product.json', function(products) {
        //initilize UI
        var $ul = $('<ul>')
            .attr({style: 'list-style-type: none',
            class: 'flex-container',
            id: 'products'});
        $ul.append(createListItems(products));
        $('main').append($ul);   
                
   //create product list 
    function createListItems(products) {
        var listItems = _.map(products, function(product, i) {
            var $li = $('<li>')
                .attr({id: 'product' + i,
                type: product.type})
                .addClass("flex-item " + product.type + "");
            var prodImage = $('<img src="img/product/thumbs/'+product.image+'"/>');
            var prodType = product.type.charAt(0).toUpperCase() + product.type.slice(1);
            var $div = $('<div>').addClass('productImage');
            var $div2 = $('<div>').addClass('productDescription');
            $div.append(prodImage);
            $li.append($div);
            $div2.append('<b>Description: </b><br>' + product.desc + '<br><b>Product: </b><br>' + prodType +  
            '<br><b>Price: </b><br>$' + product.price);
            return $li.append($div2);
        });
        return listItems;
    }
   
    //create nav bar drop down box for filtering
    function createOptionItems(collection) {
        var $dropDown = $('<form>').css('padding', '15px');
        var $filterList = $('<select>').on('change', onClickFilter);
        var productTypes = _.pluck(collection, 'type');
        var optionItems = _.unique(productTypes);
            for(var i = 0; i < optionItems.length; i++) {
                var $option = $('<option>').attr('value', optionItems[i]).text(optionItems[i].charAt(0).toUpperCase() + optionItems[i].slice(1)); 
                $($filterList).append($($option)); 
            }
         $filterList.prepend($('<option value="filter">--Select--</option>'));
         $filterList.append($('<option value="all">All</option>'));
         $dropDown.append($filterList);
         $('nav').addClass('flex-nav').css('display', 'flex').css('flex-direction', 'row').css('justify-content', 'space-between').css('align-items', 'center').append($dropDown);
    }
    createOptionItems(products, 'type');
    
    //create filter function 
    function filteredList(clickResult) {
      var filterList = _.filter(products, function(product) {
          return product.type === clickResult; 
      });
      return filterList; 
    }
    
    function onClickFilter(event) {
       var clickResult = event.target.value;
       if(clickResult ==='all' || clickResult === 'filter') {
            $($ul, '#products').empty();
            $($ul,'#products').append(createListItems(products));
       } else {
        $($ul, '#products').empty();
        $($ul,'#products').append(createListItems(filteredList(clickResult)));
       }
    }
     
    //create search box 
    var $searchBox = $('<div>').attr('id', 'searchBox');
    var $searchForm = $('<form>').attr('name', 'searchForm');
    var $searchDiv = $('<div>').css('padding-right', '15px');
    var $input = $('<input>').attr({id: 'searchfield',
        type: 'search',
        placeholder: 'Search...'})
        .on('keyup', onClick);
    $searchDiv.append($input);
    $searchBox.append($searchForm).append($searchDiv);
    $('nav').append($searchBox);
    
    function onClick(event) {
        if(event.which !== 13) {
            return;
        }
        var searchString = $('#searchfield');
        searchString.focus();
        var searchFor = searchString.val();
        $($ul, '#products').empty();
        $($ul,'#products').append(createListItems(search(products, searchFor)));
    }
   function search(collection, target) {
       var matchedAnswers = [];
       _.each(collection, function(value) {
           if (Array.isArray(value) || (typeof value === 'object' && value !== null)) {
               if (search(value, target).length > 0) { 
                   matchedAnswers.push(value);
               }
           }   else {
                   if (typeof value === 'string') {
                       if (_.contains(value.toLowerCase(), target.toLowerCase())) {
                         matchedAnswers.push(value);
                       }
                   }
               }
       });
       return matchedAnswers;
   }
   
 });
});


