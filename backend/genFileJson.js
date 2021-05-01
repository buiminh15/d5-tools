const fs = require('fs');
var obj = {};
var arr = [];
// var data = fs.readFileSync(`${__dirname}/data-test.csv`, 'utf-8');

fs.readFile(
  `${__dirname}/data-test.csv`,
  'utf8',
  function readFileCallback(err, data) {
    if (err) {
      console.log(err);
    } else {
      data.split('\r\n').map((item) => {
        let obj1 = Object.assign({}, obj)
        obj1['test_case'] = item;
        arr.push(obj1)
        let json = JSON.stringify(arr);
        fs.writeFile('demo.json', json, 'utf8', (err) => {
          if (err) throw err;
        });
      });
    }
  }
);
