const net = require('net');
const { port } = require('./config');
const config = require('./config')

var server = net.createServer(function(socket){
    socket.on('data',function (data) { 
        console.log('你好');
     })
     socket.on('error', (error) => console.log(error))
})

server.listen(config.port, () => console.log(`服务运行在${config.host}:${port}`))