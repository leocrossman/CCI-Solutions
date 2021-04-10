/*
1.5 One Away:
There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character.
Given two strings, write a fucntion to check if they are one edit (or zero edits) away.
*/

var oneAway = function(string1, string2) {
    // insert a char for str1 -> remove a char for str2
    var checkOneMissing = function(first, second) {
      if (first.length !== second.length - 1) {
        return false;
      } else {
        var mulligan = false;
        var fP = 0; // first Pointer
        var sP = 0; // second Pointer
        while (fP < first.length) {
          if (first[fP] !== second[sP]) {
            if (mulligan) {
              return false;
            } else {
              mulligan = true;
              sP++; // second length is longer
            }
          } else {
            fP++;
            sP++;
          }
        }
        return true;
      }
    };
  
    var checkOneDiff = function(first, second) {
      if (first.length !== second.length) {
        return false;
      } else {
        var mulligan = false;
        var fP = 0; // first Pointer
        var sP = 0; // second Pointer
        while (fP < first.length) {
          if (first[fP] !== second[sP]) {
            if (mulligan) {
              return false; // more than one mismatch
            } else {
              mulligan = true; // use up mulligan
            }
          }
          fP++;
          sP++;
        }
        return true;
      }
    };
    // insert a char for str1 -> remove a char for str2
    // check one diff
  
    // console log checks
    // console.log(string1, string2, 'checkMiss', checkOneMissing(string1, string2));
    // console.log(string2, string1, 'checkMiss', checkOneMissing(string2, string1));
    // console.log(string1, string2, 'checkDiff', checkOneDiff(string1, string2));
  
    return checkOneMissing(string1, string2) || checkOneMissing(string2, string1) || checkOneDiff(string1, string2);
  };

const s1 = 'pale'
const s2 = 'ple'
const s3 = 'pales'
const s4 = 'bake'

console.log(oneAway(s1,s2),'true')
console.log(oneAway(s3,s4),'false')