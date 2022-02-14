var os = require('os');
const path = require('path/posix');

console.log("Platform: " +os.platform());
console.log("Architecture: " +os.arch());

console.log(path.dirname(__filename));

console.log(process.execPath);
console.log(process.cpuUsage());
console.log(process.cwd());

