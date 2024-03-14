#!/usr/bin/node
let narg = 0;
"Write a function that prints nm of args"
exports.logMe = function (item) {
  console.log(narg + ': ' + item);
  narg++;
};
