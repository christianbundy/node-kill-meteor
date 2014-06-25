#!/usr/bin/env node
var exec = require('child_process').exec;
exec("kill `ps ax | grep '[m]eteor' | awk '{print $1}'`");
