const PORT = 33330
const HOST = '0.0.0.0'
const dgram = require('dgram')
const server = dgram.createSocket('udp4')

server.on('listening', function () {
  const address = server.address()
  const str = `UDP Server listening on ${address.address}:${address.port}`
  console.log(str)
});

server.on('error', function (err) {
  console.error('UDP Server get error ', err.message)
})

server.on('message', function (message, remote) {
  console.log(`UDP Server get connection from ${remote.address}:${remote.port}`)

  const now = Date.now()
  const reply  = new Buffer(String(now))

  server.send(reply, 0, reply.length, remote.port, remote.address, function(err) {
    if (err) throw err

    console.log(`
      ==== Message Sent ====
      to: ${remote.address}:${remote.port}
    `)
  })
});

server.bind(PORT, HOST);
