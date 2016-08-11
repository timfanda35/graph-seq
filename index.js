#!/usr/bin/env node
var fs = require('fs');
var program = require('commander');
var txtDia = require("./text-diagram.js");

program
  .arguments('<file>')
  .action(function(file) {
    var isFileExists = fs.existsSync(file);

    if (isFileExists) {
      var txt = fs.readFileSync(file, "utf8");
      var dia = txtDia.sequence_diagram(txt);
      console.log(dia);
    }
    else {
      console.error("File does not exists!");
    }

  })
.parse(process.argv);
