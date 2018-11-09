const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const next = require('next')
const morgan = require('morgan');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()

// fake DB
const messages = {
  chat1: [],
  chat2: [],
  names: new Map(),
}

// socket.io server
io.on('connection', socket => {
  /*
  socket.on('message.chat1', (data) => {
    messages['chat1'].push(data)
    socket.broadcast.emit('message.chat1', data)
  })
  socket.on('message.chat2', (data) => {
    messages['chat2'].push(data)
    socket.broadcast.emit('message.chat2', data)
  })*/
})

nextApp.prepare().then(() => {
  app.use(morgan('dev'));
  
  app.get('/name/:name', (req, res) => {
    let result = messages.names.has(req.params.name)
    if (result === true) {
      res.status(500).json({'error':"name already exists"})
    }else {
      messages.names.set(req.params.name,"")
      res.status(200).json({'registered': req.params.name})   
    }
    //   res.json(messages[req.params.name])
  })
  app.get('/registered',(req,res) => {
    let keys = Array.from(messages.names.keys())
    console.log(keys)
    res.status(201).json(keys)
  })

  app.get('*', (req, res) => {
    return nextHandler(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
