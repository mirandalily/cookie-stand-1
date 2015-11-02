var hoursArray = ['10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM'];
//var location = ['pikePlaceMarket', 'seaTacAirport', 'southCenterMall', 'bellevueSquare', 'alki']



////////////////////////////////////////////////////////////
var pikePlaceMarket = {
  minCustHr: 17,
  maxCustHr: 88,
  avgCookiesCust: 5.2,
  hourlyTArray: [],

  calcRand: function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
  },
  calcHourlyT: function() {
    return Math.floor(this.calcRand() * this.avgCookiesCust);
  },

};
//////////////////////////////////////////////////////////////


  for (var i = 0; i < hoursArray.length; i++) {
    pikePlaceMarket.hourlyTArray.push(pikePlaceMarket.calcHourlyT())
}
  for (var i = 0; i < pikePlaceMarket.hourlyTArray.length; i++) {
    var node =document.createElement("LI");
    var textnode =document.createTextNode(hoursArray[i] + ": " + pikePlaceMarket.hourlyTArray[i]);
    node.appendChild(textnode);
    document.getElementById('list').appendChild(node);
}

console.log(pikePlaceMarket.calcRand(pikePlaceMarket.minCustHr,pikePlaceMarket.maxCustHr));




// SeaTac

// Southcenter Mall

// Bellevue Mall

// Alki
