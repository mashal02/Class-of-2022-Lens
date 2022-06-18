/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//
// Spark AR Studio extension for VS Code - https://fb.me/spark-vscode-plugin
//
// For projects created with v87 onwards, JavaScript is always executed in strict mode.
//==============================================================================

// How to load in modules
const Scene = require('Scene');
const Patches = require('Patches');

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');

// To use variables and functions across files, use export/import keyword
// export const animationDuration = 10;

// Use import keyword to import a symbol from another file
// import { animationDuration } from './script.js'

(async function () {  // Enables async/await in JS [part 1]

   
    // To set two dates to two variables
  var d0 = new Date();
  var d1 = new Date("06/30/2022");
  
 
  function getDaysBetweenDates(d0, d1) {

    var msPerDay = 8.64e7;
  
    // Copy dates so don't mess them up
    var x0 = new Date(d0);
    var x1 = new Date(d1);
  
    // Set to noon - avoid DST errors
    x0.setHours(12,0,0);
    x1.setHours(12,0,0);
  
    // Round to remove daylight saving errors
    return Math.round( (x1 - x0) / msPerDay );
  }
var days=getDaysBetweenDates(new Date(),new Date(2022,6,10))-30;
  const textObject = await Scene.root.findFirst("2dText1");
  textObject.text = days.toString();
  
//now display "days" in 2DText

  // To access scene objects
  // const [directionalLight] = await Promise.all([
  //   Scene.root.findFirst('directionalLight0')
  // ]);

  // To access class properties
  // const directionalLightIntensity = directionalLight.intensity;

  // To log messages to the console
  // Diagnostics.log('Console message logged from the script.');

})(); // Enables async/await in JS [part 2]