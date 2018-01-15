const server = require('http').createServer()
const io = require('socket.io')(server)

io.on('connection', (client) => {
  client.on('hello', () => {
    client.emit('message', 'hello')
  })

  client.on('disconnect', () => {

  })
})

server.listen(3000)
