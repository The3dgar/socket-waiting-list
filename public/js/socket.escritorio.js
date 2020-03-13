var socket = io()

let searchParams = new URLSearchParams(window.location.search)

if (!searchParams.has('escritorio')) {
  window.location.href = 'index.html'
  throw new Error('El escritorio es necesario')
}

let escritorio = searchParams.get('escritorio')
let label = $('small')

console.log(escritorio);
$('h1').text(`Escritorio ${escritorio}`)


$('button').on('click', () => {
  socket.emit('atenderTicket', {
    escritorio: escritorio
  }, resp => {
    if (resp === 'No hay más tickets'){
      label.text(resp)
      return alert(resp)
    }
    label.text(resp.numero)
  })
})