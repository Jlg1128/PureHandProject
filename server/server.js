const net = require('net');
const { port } = require('./config');
const config = require('./config');

const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        console.log('你好');
     });
     socket.on('error', (error) => console.log(error));
});

server.listen(config.port, () => console.log(`服务运行在${config.host}:${port}`));
