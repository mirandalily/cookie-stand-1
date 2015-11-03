// var hoursArray = ['10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];


var pikePlaceMarket = {
  storeLocation: "Pike Place Market",
  minCustHr: 17,
  maxCustHr: 88,
  avgCookiesCust: 5.2,
  hourlyTArray: [],
  dailyTotal: 0,


  calcRand: function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
    console.log(calcRand());
  },

  calcCookiesHr: function() {
  for (var i = 0; i < 8; i++) {
    this.hourlyTArray.push(Math.floor(this.calcRand() * this.avgCookiesCust));
    console.log(this.hourlyTArray);
    }
  },

  calcHourlyT: function() {
  for (var i = 0; i < this.hourlyTArray.length; i++) {
   this.dailyTotal += this.hourlyTArray[i];
   console.log(this.dailyTotal);
  }

  return this.dailyTotal;
  },


  display: function() {
    var listTotal = document.createElement('li');
    listTotal.innerHTML = this.hourlyTArray;
    document.body.appendChild(listTotal);

    var daily = document.createElement('li');
    daily.innerHTML = this.dailyTotal;
    document.body.appendChild(daily);



  }
};
  pikePlaceMarket.calcCookiesHr();
  pikePlaceMarket.calcHourlyT();
  pikePlaceMarket.display();





















// SeaTac

// Southcenter Mall

// Bellevue Mall

// Alki
