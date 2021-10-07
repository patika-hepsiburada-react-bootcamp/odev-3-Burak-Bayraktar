import { io } from 'socket.io-client'

let socket;
export const connectToSocket = () => {
    socket = io('http://localhost:3002', { transports: ['websocket' ]});

    socket.on('connect', () => {
        console.log('connected');
      });
    
    socket.on('connect_error', () => {
      console.error('Connection failed.');
    });
}

export const sendMessage = (topic, data) => {
    if (!socket) {
      return false;
    }

    socket.emit(topic, data);
  };