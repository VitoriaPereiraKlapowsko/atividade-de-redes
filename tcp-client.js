const net = require('net');

const PORT = 5000;
const HOST = 'localhost';

const cliente = new net.Socket();

cliente.connect(PORT, HOST, () => {
    console.log('Conectado no servidor com sucesso!!');
    cliente.write('Hello, servidor!!!');
});

cliente.on('data', (data) => {
    console.log('A resposta do servidor é: ' + data.toString());
    cliente.destroy();
});

cliente.on('error', (err) => {
    console.error('Erro: ' + err.message);
});

cliente.on('close', () => {
    console.log('Conexão fechada com sucesso!!');
});
