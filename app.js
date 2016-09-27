'use strict';

var hours = ['6am ', '7am ', '8am ', '9am ', '10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];

var tableUl = document.createElement('table');
document.body.appendChild(tableUl);

function tableHead() {
  var trEl = document.createElement('tr');
  tableUl.appendChild(trEl);
  var tdEl = document.createElement('td');
  trEl.appendChild(tdEl);
  for (var i = 0; i < hours.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  var totalEl = document.createElement('th');
  totalEl.textContent = 'Totals';
  trEl.appendChild(totalEl);
}
tableHead();



function CookiesStore(location, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
  this.location = location;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.randCustPerHour = [];
  this.cookiesSoldPerHour = [];
  this.totalDailySales = 0;
  this.genRandCustPerHour = function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
  };
  this.genCookiesSoldPerHour = function() {
    this.genRandCustPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.cookiesSoldPerHour.push(Math.round(this.randCustPerHour[i] * this.avgCookiesPerCust));
    }
  };
  this.calcTotalDailySales = function() {
    this.genCookiesSoldPerHour();
    for (var i = 0; i < this.cookiesSoldPerHour.length; i++) {
      this.totalDailySales = this.totalDailySales + this.cookiesSoldPerHour[i];
    }
  };
  this.render = function() {
    this.calcTotalDailySales();
    var trEl = document.createElement('tr');
    tableUl.appendChild(trEl);
    var tdEl = document.createElement('td');
    tdEl.textContent = this.location;
    trEl.appendChild(tdEl);
    for (var i = 0; i < this.cookiesSoldPerHour.length; i++) {
      var tdEl = document.createElement('td');
      tdEl.textContent = this.cookiesSoldPerHour[i];
      trEl.appendChild(tdEl);
    }
    var totalTd = document.createElement('td');
    totalTd.textContent = this.totalDailySales;
    trEl.appendChild(totalTd);
  };
}
var firstAndPike = new CookiesStore('1st and Pike',23,65,6.3);
var seatac = new CookiesStore('SeaTac Airport',3,24,1.2);
var seattleCenter = new CookiesStore('Seattle Center',11,38,3.7);
var capitolHill = new CookiesStore('Capitol Hill',20,38,2.3);
var alki = new CookiesStore('Alki',2,16,4.6);

function genTable() {
  firstAndPike.render();
  seatac.render();
  seattleCenter.render();
  capitolHill.render();
  alki.render();
}
genTable();
