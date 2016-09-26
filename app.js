'use strict';

var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];

var pike = {
  location: '1st and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
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
