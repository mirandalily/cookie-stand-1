// var hoursArray = ['10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
var locations = [];

function cookieStand(storeLocation, minCustHr, maxCustHr, avgCookiesCust) {
  this.storeLocation = storeLocation;
  this.minCustHr = minCustHr;
  this.maxCustHr = maxCustHr;
  this.avgCookiesCust = avgCookiesCust;
  this.hourlyTArray = [];
  this.dailyTotal = 0;
  locations.push(this);


  this.calcRand = function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
   // console.log(calcRand());
  }

  this.calcCookiesHr = function() {
  for (var i = 0; i < 8; i++) {
    this.hourlyTArray.push(Math.floor(this.calcRand() * this.avgCookiesCust));
      //this.dailyTotal += this.hourlyTArray[i];
    //console.log(this.hourlyTArray);
    }
  }

  this.calcHourlyT = function() {
  for (var i = 0; i < this.hourlyTArray.length; i++) {
   this.dailyTotal += this.hourlyTArray[i];
   console.log(this.dailyTotal);
  }

  return this.dailyTotal;
  },


  this.display = function() {
    var tbl = document.getElementById("table");
    var storeLocation = document.createElement('tr');
    var th = document.createElement('th');
    th.textContent = this.storeLocation;
    storeLocation.appendChild(th);

    for (var i = 0; i < 9; i++) {
      var td = document.createElement('td');
      td.textContent = this.hourlyTArray[i];
      storeLocation.appendChild(td);
    }

    var daily = document.createElement('td');
    td.textContent = this.calcHourlyT();
    storeLocation.appendChild(td);

    tbl.appendChild(storeLocation);
    document.body.appendChild(tbl);


  }
};

var pikePlaceMarket = new cookieStand("Pike Place", 17, 88, 5.2);
pikePlaceMarket.calcCookiesHr();
pikePlaceMarket.display();

var seaTacAirport = new cookieStand("Sea Tac Airport", 6, 44, 1.2);
seaTacAirport.calcCookiesHr();
seaTacAirport.display();

var southCenter = new cookieStand("Southcenter Mall", 11, 38, 1.9);
southCenter.calcCookiesHr();
southCenter.display();

var bellevue = new cookieStand("Bellevue Mall", 20, 48, 3.3);
bellevue.calcCookiesHr();
bellevue.display();

var alki = new cookieStand("Alki Beach", 3, 24, 2.6);
alki.calcCookiesHr();
alki.display();

  //pikePlaceMarket.calcCookiesHr();
  //pikePlaceMarket.calcHourlyT();
  //pikePlaceMarket.display();
