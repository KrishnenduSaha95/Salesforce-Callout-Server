const socketEvent = (io) => {
    
    io.on('connection', socket => {
        console.log('A user connected');
        
    })

}

export default socketEvent