const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let name, activity, music, meal, food, sport, superpower;

rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  console.log();
  name = answer;
  rl.question("What's an activity you like doing?", (answer) => {
    console.log();
    activity = answer;
    rl.question("What do you listen to while doing that?", (answer) => {
      console.log();
      music = answer;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
        console.log();
        meal = answer;
        rl.question("What's your favourite thing to eat for that meal?", (answer) => {
          console.log();
          food = answer;
          rl.question("Which sport is your absolute favourite?", (answer) => {
            console.log();
            sport = answer;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
              superpower = answer;
              console.log(`${name} loves listening to ${music} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and their superpower is ${superpower}.}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

