import { createServer } from 'http'
import socketIO from 'socket.io'
import app from './src/app.js'
import socketEvent from './src/socket.js'

const server = createServer(app)
const io = socketIO(server)
// socketEvent(io)


const PORT = process.env.PORT || 80

server.listen(PORT, console.log(`Server Running on port ${PORT}`))

