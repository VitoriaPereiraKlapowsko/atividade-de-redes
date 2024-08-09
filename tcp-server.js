const net = require('net');

const PORT = 5000;
const HOST = 'localhost';

const server = net.createServer((socket) => {
    console.log('Cliente conectado!!!');

    socket.on('data', (data) => {
        console.log('Dados que foram recebidos: ' + data.toString());
        socket.write('Tudo certinho!!');
    });

    socket.on('end', () => {
        console.log('Cliente desconectado com sucesso...');
    });

    socket.on('error', (err) => {
        console.error('Erro: ' + err.message);
    });
});

server.listen(PORT, HOST, () => {
    console.log(`Servidor TCP escutando em: ${HOST}:${PORT}`);
});
