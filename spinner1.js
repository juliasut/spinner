

const chalk =require('chalk');

process.stdout.write(chalk.bgMagenta.inverse('hello from spinner1.js... \rheyyy\n'));

const sentence = chalk.bgCyan('hello from spinner1.js... \rheyyy\n');
console.log(sentence);

let delay = 1000;
const typewrite = (sentence) => {
  for (const char of sentence) {
    delay += 50;
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
  };
  return sentence;
};
typewrite((sentence));
console.log("\n");


setTimeout(() => {
  process.stdout.write(chalk.magenta('\r|  '));
}, 100);

setTimeout(() => {
  process.stdout.write(chalk.magenta('\r/  '));
}, 300);

setTimeout(() => {
  process.stdout.write(chalk.magenta('\r-  '));
}, 500);

setTimeout(() => {
  process.stdout.write(chalk.magenta('\r\\  ')); //escaping the backslash
}, 700);

setTimeout(() => {
  process.stdout.write(chalk.magenta('\r-  '));
}, 900);

setTimeout(() => {
  process.stdout.write(chalk.green('\r\  '));
}, 1100);

setTimeout(() => {
  process.stdout.write(chalk.green('\r|  '));
}, 1300);

setTimeout(() => {
  process.stdout.write(chalk.green('\r/  '));
}, 1500);

setTimeout(() => {
  process.stdout.write(chalk.green('\r-  '));
}, 1700);

setTimeout(() => {
  process.stdout.write(chalk.green('\r\  '));
}, 1900);
setTimeout(() => {
  process.stdout.write(chalk.green('\r|  '));
}, 2100);