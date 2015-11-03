var hoursArray = ['10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM'];
//var location = ['pikePlaceMarket', 'seaTacAirport', 'southCenterMall', 'bellevueSquare', 'alki']



////////////////////////////////////////////////////////////
var pikePlaceMarket = {
  minCustHr: 17,
  maxCustHr: 88,
  avgCookiesCust: 5.2,
  hourlyTArray: [],
  dailyTotal: 0,

  calcRand: function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
  },

  calcHourlyT: function() {
    return Math.floor(this.calcRand() * this.avgCookiesCust);
    var singleHour = this.calcHourlyT();
    this.calcHourlyT.push(singleHour);
    this.dailyTotal += singleHour;
  },

  calcCookiesHr: function() {
  for (var i = 0; i < hoursArray.length; i++) {
    pikePlaceMarket.hourlyTArray.push(pikePlaceMarket.calcHourlyT())
    }
  },

  display: function() {
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
pikePlaceMarket.calcCookiesHr();
pikePlaceMarket.display();




console.log(pikePlaceMarket.calcRand(pikePlaceMarket.minCustHr,pikePlaceMarket.maxCustHr));



// SeaTac

// Southcenter Mall

// Bellevue Mall

// Alki
