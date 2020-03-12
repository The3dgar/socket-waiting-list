const {
  io
} = require('../server')

io.on('connection', (client) => {
  console.log('usuario conectado')

  client.on('disconnect', () => {
    console.log('usuario desconectado')
  })

  client.on('enviarMensaje', (mensaje, callback) => {
    // todos los usuarios
    client.broadcast.emit('enviarMensaje', mensaje)


    //   if (mensaje.usuario) {
    //     callback({
    //       resp: 'Todo salio bien'
    //     })
    //   } else {
    //     callback({
    //       resp: 'todo salio mal'
    //     })
    //   }
    // })

    // client.emit('enviarMensaje', {
    //   usuario: 'server',
    //   mensaje: 'Hola mundo'
    // })
  })
})