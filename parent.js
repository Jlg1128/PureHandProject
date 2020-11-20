
var cp = require("child_process")
let process1 = cp.fork('./sub.js')

process1.on('message',(message) => { console.log('paraent got' + message); })