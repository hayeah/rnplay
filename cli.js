#!/usr/bin/env node
"use strict";

const path = require("path");

require('react-native/packager/babelRegisterOnly')([
  /private-cli\/src/,
  /local-cli/
]);

const isPackagerRunning = require('react-native/local-cli/util/isPackagerRunning');
const cli = require('react-native/local-cli/cli');

function runPackager() {
  const rnplayRoot = __dirname;
  const projectRoot = process.cwd();

  process.argv = ["node", __filename, 'start', '--projectRoots', __dirname, '--projectRoots', process.cwd()];
  cli.run();
}

function runIOS() {
  isPackagerRunning().then(result => {
    console.log("packager test:", result);
    if (result === "running") {
      // List devices
      // xcrun simctl list devices
      const simulatorDevice = process.argv[3] || "iPhone 6 Plus";

      console.log("Starting iOS simulator:", simulatorDevice);

      process.argv = ["node", __filename, 'run-ios', '--project-path', path.join(__dirname, "ios")];

      if (simulatorDevice) {
        process.argv.push("--simulator", simulatorDevice);
      }

      cli.run();
    } else {
      console.log("Please run `rnplay server` to start package server");
    }
  });
}

function runAndroid() {
  isPackagerRunning().then(result => {
    if (result === "running") {
      process.argv = ["node", __filename, 'run-android', '--root', __dirname];
      cli.run();
    } else {
      console.log("Please run `rnplay server` to start package server");
    }
  });
}

const commands = {
  "packager": runPackager,
  "serve": runPackager,
  "ios": runIOS,
  "run-ios": runIOS,
  "android": runAndroid,
  "run-android": runAndroid,

}

const command = commands[process.argv[2]];

if(command === undefined) {
  console.log("Unrecognized command: ", process.argv[2]);
} else {
  command();
}