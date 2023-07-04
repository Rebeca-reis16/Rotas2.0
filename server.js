const express = require('require')

const app = express()

app.get('/', (req, res)=>{
    return res.send('Bem vindo(a) a nossa página de Bolos.');
});

app.get('/Home', (req, res)=>{
    return res.send('Home');
});

app.get('/Contatos', (req, res)=>{
    return res.send('Contatos');
});

app.get('/Localização', (req, res)=>{
    return res.send('Localização');
});

app.get('/redes sociais', (req, res)=>{
    return res.send('redes sociais');
});

app.get('/funcionarios', (req, res)=>{
    return res.send('funcionarios');
});

app.listen('3344', console.log('Servidor ON na porta 3344'));