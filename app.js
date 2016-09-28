'use strict';

var hours = ['6am ', '7am ', '8am ', '9am ', '10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];

var stores = [];

var tableUl = document.createElement('table');
var formEL = document.getElementById('form');
document.body.appendChild(tableUl);

function gentableHead() {
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
  totalEl.textContent = 'Daily Location Total';
  trEl.appendChild(totalEl);
}

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
    var trEl = document.createElement('tr');
    tableUl.appendChild(trEl);
    var tdEl = document.createElement('td');
    tdEl.textContent = this.location;
    trEl.appendChild(tdEl);
    for (var i = 0; i < this.cookiesSoldPerHour.length; i++) {
      var tdEl = document.createElement('td'); //eslint-disable-line
      tdEl.textContent = this.cookiesSoldPerHour[i];
      trEl.appendChild(tdEl);
    }
    var totalTd = document.createElement('td');
    totalTd.textContent = this.totalDailySales;
    trEl.appendChild(totalTd);
  };
  stores.push(this);
}

new CookiesStore('1st and Pike',23,65,6.3);
new CookiesStore('SeaTac Airport',3,24,1.2);
new CookiesStore('Seattle Center',11,38,3.7);
new CookiesStore('Capitol Hill',20,38,2.3);
new CookiesStore('Alki',2,16,4.6);

gentableHead();
for (var i = 0; i < stores.length; i++) {
  stores[i].calcTotalDailySales();
  stores[i].render();
}
genFooter();

function clearFormFields() {
  event.target.location.value = null;
  event.target.minCPH.value = null;
  event.target.maxCPH.value = null;
  event.target.avgCPC.value = null;
}

function handleForm(event) {
  event.preventDefault();
  var changeStore = false;
  var location = event.target.location.value;
  var minCPH = parseInt(event.target.minCPH.value);
  var maxCPH = parseInt(event.target.maxCPH.value);
  var avgCPC = parseInt(event.target.avgCPC.value);
  for (var i = 0; i < stores.length; i++) {
    if (location === stores[i].location) {
      changeStore = true;
      stores[i].minCustPerHour = minCPH;
      stores[i].maxCustPerHour = maxCPH;
      stores[i].avgCookiesPerCust = avgCPC;
      clearFormFields();
      stores[i].randCustPerHour = [];
      stores[i].cookiesSoldPerHour = [];
      stores[i].totalDailySales = 0;
      stores[i].calcTotalDailySales();
      tableUl.textContent = '';
      gentableHead();
      for (var k = 0; k < stores.length; k++) {
        stores[k].render();
      }
    }
  }
  if (changeStore === false) {
    new CookiesStore(location, minCPH, maxCPH, avgCPC);
    clearFormFields();
    tableUl.textContent = '';
    gentableHead();
    for (var j = 0; j < stores.length; j++) {
      stores[j].randCustPerHour = [];
      stores[j].cookiesSoldPerHour = [];
      stores[j].calcTotalDailySales();
      stores[j].render();
    }
  }
  genFooter();
}

formEL.addEventListener('submit', handleForm);

function genFooter() {
  var trEl = document.createElement('tr');
  tableUl.appendChild(trEl);
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Totals Per Hour';
  trEl.appendChild(tdEl);
  var totalSold = 0;
  for (var i = 0; i < hours.length; i++) {
    var totalSoldHour = 0;
    for (var j = 0; j < stores.length; j++) {
      totalSoldHour += stores[j].cookiesSoldPerHour[i];
    }
    totalSold += totalSoldHour;
    var totalSoldPerHourEl = document.createElement('td');
    totalSoldPerHourEl.textContent = totalSoldHour;
    trEl.appendChild(totalSoldPerHourEl);
  }
  var tdEl = document.createElement('td'); //eslint-disable-line
  tdEl.textContent = totalSold;
  trEl.appendChild(tdEl);
}
