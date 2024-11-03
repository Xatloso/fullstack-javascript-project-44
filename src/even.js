import readlineSync from 'readline-sync';
import getName from '../src/cli.js';

export default () => {
  const name = getName();
  console.log('Answer "yes" if the number is even, otherwise "no".');
  for (let i = 0; i < 3;) {
    if (i < 3) {
      const theNumber = Math.floor(Math.random() * 100);
      console.log(`Question: ${theNumber}`);
      const trueAnswer = theNumber % 2 === 0 ? 'yes' : 'no';
      const userAnswer = readlineSync.question('Your answer: ');
      if (userAnswer === trueAnswer) {
        i += 1;
        console.log('Correct!');
      } else if (userAnswer !== trueAnswer) {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'`);
        console.log(`Let's try again, ${name}!`);
        break;
      }
    } if (i === 3) {
      console.log(`Congratulations, ${name}`);
    }
  }
};
