var casper = require('casper').create();
var surveyCodeStr = casper.cli.get(0) + ""
casper.options.waitTimeout = 20000;
casper.start('https://kor.tellburgerking.com');

casper.then(function() {
  this.click('input[type="submit"]')
});

casper.waitForSelector("#NextButton", function() {
   this.fillSelectors('form#surveyEntryForm', {
        'input[id="CN1"]': surveyCodeStr.substring(0,3),
        'input[id="CN2"]': surveyCodeStr.substring(3,6),
        'input[id="CN3"]': surveyCodeStr.substring(6,9),
        'input[id="CN4"]': surveyCodeStr.substring(9,12),
        'input[id="CN5"]': surveyCodeStr.substring(12,15),
        'input[id="CN6"]': surveyCodeStr.substring(15,16)
    }, true);
  this.click('input[type="submit"]') 
});

//Step 1
casper.waitForSelector("#NextButton", function() {
  this.echo('Step 1')
  this.click('input[type="submit"]')
});
casper.waitForSelector("#NextButton", function() {
  this.click('input[type="submit"]')
});

//Step 2
casper.waitForSelector("#NextButton", function() {
  this.echo('Step 2')
  this.click('input[type="submit"]')
});
casper.waitForSelector("#NextButton", function() {
  this.click('input[type="submit"]')
});

//Step 3
casper.waitForSelector("#NextButton", function() {
  this.echo('Step 3')
  this.click('input[type="submit"]')
});
casper.waitForSelector("#NextButton", function() {
  this.click('input[type="submit"]')
});

//Step 4
casper.waitForSelector("#NextButton", function() {
  this.echo('Step 4')
  this.click('input[type="submit"]')
});
casper.waitForSelector("#NextButton", function() {
  this.click('input[type="submit"]')
});

//Step 5
casper.waitForSelector("#NextButton", function() {
  this.echo('Step 5')
  this.click('input[type="submit"]')
});
casper.waitForSelector("#NextButton", function() {
  this.click('input[type="submit"]')
});

//Step 6
casper.waitForSelector("#NextButton", function() {
  console.log('Step 6')
  this.click('input[type="submit"]')
});
casper.waitForSelector("#NextButton", function() {
  this.click('input[type="submit"]')
});

//Step 7
casper.waitForSelector("#NextButton", function() {
  this.echo('Step 7')
  this.click('input[type="submit"]')
});
casper.waitForSelector("#NextButton", function() {
  this.click('input[type="submit"]')
});

//Step 8
casper.waitForSelector("#NextButton", function() {
  this.echo('Step 8')
  this.click('input[type="submit"]')
});
casper.waitForSelector("#NextButton", function() {
  this.click('input[type="submit"]')
});

//Step 9
casper.waitForSelector("#NextButton", function() {
  this.echo('Step 9')
  this.click('input[type="submit"]')
});
casper.waitForSelector("#NextButton", function() {
  this.click('input[type="submit"]')
});

//Step 10
casper.waitForSelector("#NextButton", function() {
  this.echo('Step 10')
  this.click('input[type="submit"]')
});
casper.waitForSelector("#NextButton", function() {
  this.click('input[type="submit"]')
});

//Step 11
casper.waitForSelector("#NextButton", function() {
  this.echo('Step 11')
  this.click('input[type="submit"]')
});
casper.waitForSelector("#NextButton", function() {
  this.click('input[type="submit"]')
});

//Step 12
casper.waitForSelector("#NextButton", function() {
  this.echo('Step 12')
  this.click('input[type="submit"]')
});
casper.waitForSelector("#NextButton", function() {
  this.click('input[type="submit"]')
});

//Step 13
casper.waitForSelector("#NextButton", function() {
  this.echo('Step 13')
  this.click('input[type="submit"]')
});
casper.waitForSelector("#NextButton", function() {
  this.click('input[type="submit"]')
});

//Step 14
casper.waitForSelector("#NextButton", function() {
  this.echo('Step 14')
  this.click('input[type="submit"]')
});
casper.waitForSelector("#NextButton", function() {
  this.click('input[type="submit"]')
});

//Step 15
casper.waitForSelector("#NextButton", function() {
  this.echo('Step 15')
  this.capture('google1.png', {
        top: 0,
        left: 0,
        width: 1024,
        height: 1024
    });
  this.click('input[type="submit"]')
});
casper.waitForSelector("p.ValCode", function() {
  this.capture('google2.png', {
        top: 0,
        left: 0,
        width: 1024,
        height: 1024
    });
  var text = this.evaluate(function(){
    return document.querySelector("p.ValCode").textContent;
  });
  this.echo(text)
});

casper.run();
