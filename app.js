var hoursArray = ['10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];

////////Properties
var pikePlaceMarket = {
  storeLocation: "Pike Place Market",
  minCustHr: 17,
  maxCustHr: 88,
  avgCookiesCust: 5.2,
  hourlyTArray: [],
  dailyTotal: 0,

/////////Methods

  calcRand: function() {   ///randomly generates amount of customers
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
  },

  calcCookiesHr: function() {  ///for loop that runs as long as the hours array, pushes to hourly total array
  for (var i = 0; i < hoursArray.length; i++) {
    pikePlaceMarket.hourlyTArray.push(pikePlaceMarket.calcHourlyT()) //this.hourlyTArray.push(calcRand() * avgCookiesCust)
    }
  },

  calcHourlyT: function() {  ///calculates random number of customers * avg cookies per customer
    return Math.floor(this.calcRand() * this.avgCookiesCust);

    var singleHour = this.calcHourlyT();  ///not sure what is happening here <------------------------
    this.calcHourlyT.push(hourlyTArray());    ///not sure what is happening here <------------------------
    this.dailyTotal += hourlyTArray[i];//this.dailyTotal += singleHour;  ///my daily total doesn't work <------------------------
  },



//////DOM POPULATION

  display: function() {      //populates a list in to the DOM
    for (var i = 0; i < pikePlaceMarket.hourlyTArray.length; i++) {               //http://www.w3schools.com/jsref/met_node_appendchild.asp
      var node =document.createElement("LI");                                                         // Create a <li> node
      var textnode =document.createTextNode(hoursArray[i] + ": " + pikePlaceMarket.hourlyTArray[i]);  // Create a text node
      node.appendChild(textnode);                                                                     // Append the text to <li>
      document.getElementById('pikelist').appendChild(node);                                        // Append <li> to <ul> with id="pikelist"
    };
                            //supposed to populate the totaly to the DOM      //http://www.w3schools.com/jsref/met_node_appendchild.asp
      var node =document.createElement("LI");                                   // Create a <li> node
      var textnode =document.createTextNode("Total" + ": " + this.dailyTotal);  // Create a text node
      node.appendChild(textnode);                                               // Append the text to <li>
      document.getElementById('pikelist').appendChild(node);            // Append <li> to <ul> with id="pikelist"
  }
};

  pikePlaceMarket.calcCookiesHr();   //this is called outside the object
  pikePlaceMarket.display();        //this is called outside the object





















// SeaTac

// Southcenter Mall

// Bellevue Mall

// Alki
