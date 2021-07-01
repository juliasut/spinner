const chalk = require('chalk')

const spinnerCaptions = ['\r|  ', '\r/  ', '\r-  ',  '\r\\ ', '\r|  ', '\r-/ ', '\r-  ']

const spinner = (captions) => {

  let delay = 200;

  for (let i = 0; i < spinnerCaptions.length; i++) {
  
    setTimeout(() => {
      process.stdout.write(chalk.green(spinnerCaptions[i]))
    }, delay);
    delay += 50;
    
  }

}

spinner(spinnerCaptions);