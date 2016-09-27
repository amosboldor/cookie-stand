'use strict';

var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];

var pike = {
  location: '1st and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  randCustPerHour: [],
  cookiesSoldPerHour: [],
  totalDailySales: 0,
  genRandCustPerHour: function() {
    for (var i = 0; i < hours.length + 1; i++) {
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
  },
  genCookiesSoldPerHour: function() {
    this.genRandCustPerHour();
    for (var i = 0; i < hours.length + 1; i++) {
      this.cookiesSoldPerHour.push(Math.round(this.randCustPerHour[i] * this.avgCookiesPerCust));
    }
  },
  calcTotalDailySales: function() {
    this.genCookiesSoldPerHour();
    for (var i = 0; i < this.cookiesSoldPerHour.length; i++) {
      this.totalDailySales = this.totalDailySales + this.cookiesSoldPerHour[i];
    }
  },
  render: function() {
    this.calcTotalDailySales();
    var ulEl = document.createElement('ul');
    ulEl.textContent = this.location;
    for (var i = 0; i < this.cookiesSoldPerHour.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + this.cookiesSoldPerHour[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
    document.body.appendChild(ulEl);
  }
};

var seatac = {
  location: 'SeaTac Airport',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerCust: 1.2,
  randCustPerHour: [],
  cookiesSoldPerHour: [],
  totalDailySales: 0,
  genRandCustPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
  },
  genCookiesSoldPerHour: function() {
    this.genRandCustPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.cookiesSoldPerHour.push(Math.round(this.randCustPerHour[i] * this.avgCookiesPerCust));
    }
  },
  calcTotalDailySales: function() {
    this.genCookiesSoldPerHour();
    for (var i = 0; i < this.cookiesSoldPerHour.length; i++) {
      this.totalDailySales = this.totalDailySales + this.cookiesSoldPerHour[i];
    }
  },
  render: function() {
    this.calcTotalDailySales();
    var ulEl = document.createElement('ul');
    ulEl.textContent = this.location;
    for (var i = 0; i < this.cookiesSoldPerHour.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + this.cookiesSoldPerHour[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
    document.body.appendChild(ulEl);
  }
};

var seattleCenter = {
  location: 'Seattle Center',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerCust: 3.7,
  randCustPerHour: [],
  cookiesSoldPerHour: [],
  totalDailySales: 0,
  genRandCustPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
  },
  genCookiesSoldPerHour: function() {
    this.genRandCustPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.cookiesSoldPerHour.push(Math.round(this.randCustPerHour[i] * this.avgCookiesPerCust));
    }
  },
  calcTotalDailySales: function() {
    this.genCookiesSoldPerHour();
    for (var i = 0; i < this.cookiesSoldPerHour.length; i++) {
      this.totalDailySales = this.totalDailySales + this.cookiesSoldPerHour[i];
    }
  },
  render: function() {
    this.calcTotalDailySales();
    var ulEl = document.createElement('ul');
    ulEl.textContent = this.location;
    for (var i = 0; i < this.cookiesSoldPerHour.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + this.cookiesSoldPerHour[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
    document.body.appendChild(ulEl);
  }
};

var capitolHill = {
  location: 'Capitol Hill',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesPerCust: 2.3,
  randCustPerHour: [],
  cookiesSoldPerHour: [],
  totalDailySales: 0,
  genRandCustPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
  },
  genCookiesSoldPerHour: function() {
    this.genRandCustPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.cookiesSoldPerHour.push(Math.round(this.randCustPerHour[i] * this.avgCookiesPerCust));
    }
  },
  calcTotalDailySales: function() {
    this.genCookiesSoldPerHour();
    for (var i = 0; i < this.cookiesSoldPerHour.length; i++) {
      this.totalDailySales = this.totalDailySales + this.cookiesSoldPerHour[i];
    }
  },
  render: function() {
    this.calcTotalDailySales();
    var ulEl = document.createElement('ul');
    ulEl.textContent = this.location;
    for (var i = 0; i < this.cookiesSoldPerHour.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + this.cookiesSoldPerHour[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
    document.body.appendChild(ulEl);
  }
};

var alki = {
  location: 'Alki',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerCust: 4.6,
  randCustPerHour: [],
  cookiesSoldPerHour: [],
  totalDailySales: 0,
  genRandCustPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
  },
  genCookiesSoldPerHour: function() {
    this.genRandCustPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.cookiesSoldPerHour.push(Math.round(this.randCustPerHour[i] * this.avgCookiesPerCust));
    }
  },
  calcTotalDailySales: function() {
    this.genCookiesSoldPerHour();
    for (var i = 0; i < this.cookiesSoldPerHour.length; i++) {
      this.totalDailySales = this.totalDailySales + this.cookiesSoldPerHour[i];
    }
  },
  render: function() {
    this.calcTotalDailySales();
    var ulEl = document.createElement('ul');
    ulEl.textContent = this.location;
    for (var i = 0; i < this.cookiesSoldPerHour.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + this.cookiesSoldPerHour[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
    document.body.appendChild(ulEl);
  }
};

pike.render();
seatac.render();
seattleCenter.render();
capitolHill.render();
alki.render();
