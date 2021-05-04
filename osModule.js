const os = require("os");

const user = os.userInfo();
console.log(user);

// setTimeout(() => {
//     console.log('Hello World!!!');
// }, 1000);

// setInterval(() => {
//     console.log('Hello World!!!');
// }, 1000);

console.log(`the system up time is ${os.uptime} seconds`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOs);
