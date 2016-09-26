'use strict';

var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];

var Pike = {
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
    for (var i = 0; i < hours.length; i++) {
      this.cookiesSoldPerHour.push(Math.round(this.randCustPerHour[i] * this.avgCookiesPerCust));
    }
  },
  calcTotalDailySales: function() {
    for (var i = 0; i < this.cookiesSoldPerHour.length; i++) {
      this.totalDailySales = this.totalDailySales + this.cookiesSoldPerHour[i];
    }
  }
};
