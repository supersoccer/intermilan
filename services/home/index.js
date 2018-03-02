const $ = require('config');
const request = require('request-promise');
const JSONApi = require('node-jsonapi');
const API = new JSONApi();
const lodash = require('lodash');
const indexTpl = require($.alias.views + '/home/index');

class Home {
  constructor() {
    this.index = this.index.bind(this);
  }

  index(req, res) {
    // Data processing here

  var list;
  var currentMonth = 0;

  if (req.query.month){
    currentMonth = parseInt(req.query.month);
  }
  if (req.query.nextorprev){
    if (req.query.nextorprev === "next"){
      currentMonth = currentMonth + 1;
      if (currentMonth > 2){
        currentMonth = 0;
      }
    }
    else if (req.query.nextorprev === "prev"){
      currentMonth = currentMonth - 1;
      if (currentMonth < 0){
        currentMonth = 0;
      }
    }
  }

    function getData(link, cond){
        return request({
        url: link,
        method: 'GET',
        json: true
      });
    }

    getData('http://api-d.supersoccer.tv/v1/intermilan/content.json')
    .then((body) => {
      return (body);
    })
    .then((data) => {

      list = data;
      var enable = {};
      var id1 = [];
      var id2 = [];
      var id3 = [];
      var id4 = [];
      var id5 = [];
      var id6 = [];
      var id7 = [];

      for (var i = 0; i < list.data.length; i++){
          if (list.data[i].attributes){
              if (list.data[i].attributes.enabled){
                if (list.data[i].attributes.id === "1"){
                  id1.push(list.data[i]);
                  enable.id1 = id1;
                  // console.log(id1);
                }
                else if (list.data[i].attributes.id === "2"){
                  id2.push(list.data[i]);
                  enable.id2 = id2;
                  // console.log(id2);
                }
                else if (list.data[i].attributes.id === "3"){
                  id3.push(list.data[i]);
                  enable.id3 = id3;
                  // console.log(id3);
                }
                else if (list.data[i].attributes.id === "4"){
                  id4.push(list.data[i]);
                  enable.id4 = id4;
                  // console.log(id4);
                }
                else if (list.data[i].attributes.id === "7"){
                  id7.push(list.data[i]);
                  enable.id7 = id7;
                  // console.log(id7);
                }
              }
          }
      }

      if (list.data[9].schedule[currentMonth].attributes.enabled) {
        id5.push(list.data[9].schedule[currentMonth]);
      }

      const category = {
      };

      // console.log(enable);



      res.marko(indexTpl, {
        title: 'Inter Milan',
        data: {
          enable: enable,
          id1: id1,
          id2: id2,
          id3: id3,
          id4: id4,
          id5: id5,
          id6: id6,
          id7: id7,
          currentMonth: currentMonth,
        },
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
}

module.exports = new Home();
