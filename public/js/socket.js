var socket = io()

socket.on('connect', () => {
    console.log('conectado al server');
})

socket.on('disconnect', () => {
    console.log('perdimos conexión con el server')
})

socket.on('enviarMensaje', (mensaje) => {
    console.log("servidor:", mensaje);
})


socket.emit('enviarMensaje', {
    usuario: 'Edgar',
    apellido: 'Olivar'
}, resp => {
    console.log('se disparo el callback', resp);
})