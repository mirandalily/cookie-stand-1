var hoursArray = ['10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
//var location = ['pikePlaceMarket', 'seaTacAirport', 'southCenterMall', 'bellevueSquare', 'alki']



//////////////////////////PROPERTIES?///////////////////////////////////////////////////
var pikePlaceMarket = {
  storeLocation: "Pike Place Market",
  minCustHr: 17,
  maxCustHr: 88,
  avgCookiesCust: 5.2,
  hourlyTArray: [],
  dailyTotal: 0,

/////////////////////////////METHODS/////////////////////////////////////////////////////

  calcRand: function() {   ///randomly generates customers per hour
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
  },

  calcHourlyT: function() {  ///calculating number of customers * avg cookies per customer
    return Math.floor(this.calcRand() * this.avgCookiesCust);
    var singleHour = this.calcHourlyT();
    this.calcHourlyT.push(singleHour);
    this.dailyTotal += hourlyTArray[i];//this.dailyTotal += singleHour;  ///my daily total doesn't work
  },

  calcCookiesHr: function() {  ///for loop that runs as long as the hours array, pushes hourly total
  for (var i = 0; i < hoursArray.length; i++) {
    pikePlaceMarket.hourlyTArray.push(pikePlaceMarket.calcHourlyT())
    }
  },



  //////////////////////////////DOM POPULATION//////////////////////////////////////////

  display: function() {      //populates a list in to the DOM
    for (var i = 0; i < pikePlaceMarket.hourlyTArray.length; i++) {
      var node =document.createElement("LI");                                                         // Create a <li> node
      var textnode =document.createTextNode(hoursArray[i] + ": " + pikePlaceMarket.hourlyTArray[i]);  // Create a text node
      node.appendChild(textnode);                                                                     // Append the text to <li>
      document.getElementById('list').appendChild(node);                                        // Append <li> to <ul> with id="myList"
    };

    var node =document.createElement("LI");                                   // Create a <li> node
    var textnode =document.createTextNode("Total" + ": " + this.dailyTotal);  // Create a text node
    node.appendChild(textnode);                                               // Append the text to <li>
    document.getElementById('list').appendChild(node);            // Append <li> to <ul> with id="myList"
  }


};

//////////////////////////////////////////////////////////////
pikePlaceMarket.calcCookiesHr();   //this is called outside the object
pikePlaceMarket.display();        //this is called outside the object




console.log(pikePlaceMarket.calcRand(pikePlaceMarket.minCustHr,pikePlaceMarket.maxCustHr)); //debug



// SeaTac

// Southcenter Mall

// Bellevue Mall

// Alki
