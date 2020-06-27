import { createServer } from 'http'
import socketIO from 'socket.io'
import app from './src/app.js'

const server = createServer(app)
const io = socketIO(server)
app.locals.io = io

const PORT = process.env.PORT || 80

server.listen(PORT, console.log(`Server Running on port ${PORT}`))

