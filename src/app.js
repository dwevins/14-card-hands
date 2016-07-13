'use strict';

import deal from 'deal';

export default class App {
  constructor(element) {
    this.main = element.querySelector('.app-main');
  }

  start() {
    deal(this.main);
  }
}
