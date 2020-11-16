// Episode 1

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
//   };
  
//   const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
//   }
  
//   const verdict = declareMurderer();
//   console.log(verdict);

  // The result will be Miss Scarlet - the return statement declares the murderer 
  // is $(scenario.murderer), so it is accessing the const class of scenario and
  // key of murderer which is 'Miss Scarlet'.



// Episode 2
// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// the result will be "TypeError: Assignment to constant variable", the code tries
// to change a const variable in the changeMurderer function, but this is not possible
// and the error message will be returned. 


// Episode 3
// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// The first verdict will be 'Mrs Peacock', and the second verdict will be 
// 'Professor Plum'. The code in the firstVerdict function accesses the declareMurderer
// const which declares the murderer as 'Mrs Peacock'.  The secondVerdict variable doesn't
// access the declareMurderer variable and instead accesses the let murder = "professor 
// plum" variable


// Episode 4
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// Suspect three is 'Mrs Peacock' as this is declared first, before the block content
// where the suspect is changed so the change is only captured in the array of suspects.


// // Episode 5
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }

// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

// the weapon is 'revolver', the changeWeapon function has a parameter in it, and just
// before it is logged out, the changeWeapon function is called and an arguement of 
// 'Revolver' is passed in.


// Episode 6
// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// I initially thought the result was going to return "TypeError: Assignment to 
// constant variable" as I thought after the murderer was defined as an immutable
// object in the first const variable then the next change would crash it.
// After working through the code again it appears that the two const variable are set
// up in 1 big block scope, so the second const changes the murderer variable to 'Mrs White'


// Episode 7
// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// I thought the murderer was going to be Colonel Mustard.  However i can see that the statement in line 140
// is a let variable which won't change a const variable. I did then wonder why the final const change to Miss Scarlet isn't
// enforced, but can only assume that the code breaks at the let variable in line 140 and reverts to the first const
// change in line 136 and murderer is Mr Green.


// Episode 8

// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };

// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';

//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }

//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }

//     unexpectedOutcome('Colonel Mustard');
//   }

//   plotTwist('Dining Room');
// }

// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

// The weapon is candle stick, because the room is changed to 'dining room' after the first const variable
// change.  the plotTwist function strictly equals dining room, therefore making murderer Colonel Mustard.  
// the unexpectedOutcome function also strictly equals Colonel Mustard and this now makes the weapon candle stick.


// Episode 9
// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

// The murderer is Professor Plum, and I believe it is due to the strictly equal operator, but also the let murderer
// statement on line 209 "is declared but its object is never read"

// Eps 6 & 7 were confusing.