const server = require('http').createServer()
const io = require('socket.io')(server)

io.on('connection', (client) => {
  client.on('RoundTripTest', (message) => {
    console.log('On Message', message)
    client.emit('RoundTripTestResult', message)
  })

  client.on('disconnect', () => {
    console.log('Disconnected')
  })
})

server.listen(3000)
