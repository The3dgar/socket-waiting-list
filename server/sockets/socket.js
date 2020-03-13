const {
  io
} = require('../server')

const {
  TicketControl
} = require('../classes/ticket-control')

const ticketControl = new TicketControl()

io.on('connection', (client) => {
  console.log('usuario conectado')

  client.on('disconnect', () => {
    console.log('usuario desconectado')
  })

  client.on('enviarMensaje', (mensaje, callback) => {
    // todos los usuarios
    // client.broadcast.emit('enviarMensaje', mensaje)




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

  client.on('siguienteTicket', (data, callback) => {
    let numero = ticketControl.siguienteTicker()
    callback(numero)
  })

  client.emit('estadoActual', {
    actual: ticketControl.getUltimo(),
    ultimos4: ticketControl.getUltimos4()
  })

  client.on('atenderTicket', (data, callback) => {
    if (!data.escritorio) return callback({
      err: true,
      mensaje: 'El escritorio es necesario'
    })

    let atenderTicket = ticketControl.atenderTicket(data.escritorio)

    callback(atenderTicket)

    // aqui hay que actualizar la pantalla--..
    // emitir ultimos4 hay que usar el broadcast 
    // para que llegue  a todos

    client.broadcast.emit('ultimos4', {ultimos4: ticketControl.getUltimos4()})

  })

})