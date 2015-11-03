var hoursArray = ['10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
//var location = ['pikePlaceMarket', 'seaTacAirport', 'southCenterMall', 'bellevueSquare', 'alki']



////////////////////////////////////////////////////////////
var pikePlaceMarket = {
  storeLocation: "Pike Place Market",
  minCustHr: 17,
  maxCustHr: 88,
  avgCookiesCust: 5.2,
  hourlyTArray: [],
  dailyTotal: 0,

  calcRand: function() {   ///randomly generates customers per hour
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
  },

  calcHourlyT: function() {  ///calculating number of customers * avg cookies per customer
    return Math.floor(this.calcRand() * this.avgCookiesCust);
    var singleHour = this.calcHourlyT();
    this.calcHourlyT.push(singleHour);
    this.dailyTotal += hourlyTArray[i];//this.dailyTotal += singleHour;
  },

  calcCookiesHr: function() {  ///for loop that runs as long as the hours array, pushes hourly total
  for (var i = 0; i < hoursArray.length; i++) {
    pikePlaceMarket.hourlyTArray.push(pikePlaceMarket.calcHourlyT())
    }
  },

  display: function() {      //populates a list in to the DOM
    for (var i = 0; i < pikePlaceMarket.hourlyTArray.length; i++) {
      var node =document.createElement("LI");
      var textnode =document.createTextNode(hoursArray[i] + ": " + pikePlaceMarket.hourlyTArray[i]);
      node.appendChild(textnode);
      document.getElementById('list').appendChild(node);
    };

    var node =document.createElement("LI");
    var textnode =document.createTextNode("Total" + ": " + this.dailyTotal);
    node.appendChild(textnode);
    document.getElementById('list').appendChild(node);
  }


};

//////////////////////////////////////////////////////////////
pikePlaceMarket.calcCookiesHr();   //variabls declared outside of object
pikePlaceMarket.display();        //variables again




console.log(pikePlaceMarket.calcRand(pikePlaceMarket.minCustHr,pikePlaceMarket.maxCustHr));



// SeaTac

// Southcenter Mall

// Bellevue Mall

// Alki
