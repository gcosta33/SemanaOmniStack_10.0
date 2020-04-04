import socketio from 'socket.io-client'
import { baseURL } from './api'

const socket = socketio(baseURL, {
    autoConnect: false
})

function subcribeToNewDev( subcribeFunction ){
    socket.on( 'new-dev',subcribeFunction )
}

function connect( latitude, longitude, techs ){
    socket.io.opts.query = {
        latitude,
        longitude,
        techs
    }
    socket.connect()

    socket.on('message', text =>{
        console.log(text);
    })
}

function disconnect(){
    if(socket.connected){
        socket.disconnect()
    }
}

export {
    connect,
    disconnect,
    subcribeToNewDev
}