# JavaScript.Testing

This project sets up for JavaScript testing frameworks.

 - [Mocha](https://mochajs.org/) a unit test framework.
 - [Jasmine](https://jasmine.github.io/) a behaviour-driven development framework.
 - [Karma](https://www.npmjs.com/package/karma) allows you to execute JavaScript code in multiple real browsers.
 - [Protractor](http://www.protractortest.org/#/) an E2E test framework for Angular. 

# Installation
## install express, request
<p>npm install --save express
npm install --save request
</p>

## install mocha
npm install -g mocha
npm install --save-dev mocha

## install Chai
npm install --save-dev chai

## install Sinon
npm install --save-dev sinon

## install gulp
npm install -g gulp
npm install --save gulp gulp-mocha gulp-util

## install grunt
npm install -g grunt-cli 
npm install --save grunt grunt-mocha-test grunt-contrib-watch

## install Jasmine
npm install -g jasmine
npm install --save-dev jasmine -core

## initializeing Jasmine
jasmine init

## install karma:
npm install -g karma
npm install -g karma-cli
npm install --save-dev karma 
npm install --save-dev karma-jasmine karma-chrome-launcher karma-ie-launcher 
npm install --save-dev karma-browserify browserify watchify 

## initialise karma config file
karma init

## Run Karma:
./node_modules/karma/bin/karma start

## set up protractor
install java

## install protractor
npm install -g protractor

## update WebDriver-manager
webdriver-manager update
webdriver-manager update --ie

## set up CHROME_BIN and IE_BIN
set CHROME_BIN=C:\Program Files (x86)\Google\Chrome\Application\chrome.exe
set IE_BIN=C:\Program Files\Internet Explorer\iexplore.exe

 
# Getting Start 
## run mocha test
mocha mocha_testing
mocha "mocha_testing/addTesting.js"

## run jasmine
jasmine

## run gulp
gulp

## run grunt
grunt

## run karma
karma start

## run protractor
start WebDriver
webdriver-manager start

protractor conf.js
 
# Source code structure  

| Files/Folders | Description |
| ------ | ------ |
| gruntfile.js   | grunt file for run mocha testing |
| gulpfile.js    | gulp  file for run mocha testing |
| -karma_testing  | Karma test runner |
| -mocha_testing  | Mocha framework, using Chai as assertion library and Simon as mocking library |
| -protractor | Protractor for end to end testing |
| -spec | Jasmine framework |
| -src | source code to be tested |

