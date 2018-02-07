const $ = require('config');
const indexTpl = require($.alias.views + '/home/index');

class Home {
  constructor() {
    this.index = this.index.bind(this);
  }

  index(req, res) {
    // Data processing here



    res.marko(indexTpl, {
      title: 'Inter Milan',
    });
  }
}

module.exports = new Home();
