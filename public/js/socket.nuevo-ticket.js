// comando para establecer la comunicacion


var socket = io()
var label = $('#lblNuevoTicket')
socket.on('connect', () => {
  console.log('Conectado al server');
})

socket.on('disconnect', () => {
  console.log('Desconectado del server');
})

socket.on('estadoActual', ticketActual => {
  label.text(ticketActual.actual)
})

$('button').on('click', () => {
  socket.emit('siguienteTicket', null, siguienteTicket => {
    label.text(siguienteTicket)
  })
})

// esto se puede hacer con un callback del lado del server
// socket.on('siguienteTicket', ticket => {
//   console.log('ticket numero:', ticket);
// })