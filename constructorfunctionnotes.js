
  // ////////////////////////////Today's assignment////////////////////
  // makeList: function() {
  //   this.calcHourlyT();
  //   var tbl = document.createElement('table');

  //   var trElement = document.createElement('tr');

  //   for (var i = 0; i < hours.length; i++) {
  //     var tdElement = document.createElement('th');
  //     tdElement.textContent = hoursArray[i];
  //     trElement.appendChild(tdElement);
  //   }
  //   tbl.appendChild(trElement);
  //   document.body.appendChild(tbl);
  // },
  // ///////////////////////Constructor function///////////////////////

var pikePlaceMarket = new CookieStand("Pike Place Market", 'pike', 17, 88, 5.2);

function CookieStand(storeLocation, minCustHr, maxCustHr, avgCookiesCust) {
  this.storeLocation = storeLocation;
  this.minCustHr = minCustHr;
  this.maxCustHr = maxCustHr;
  this.avgCookiesCust = avgCookiesCust;
  this.hourlyTArray = [];
  this.dailyTotal = 0;
}
