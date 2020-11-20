process.on("message",(message) => { console.log('chidren got' + message); })

// process.send('show')
process.send("xixi")