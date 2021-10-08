import { io } from 'socket.io-client'

let socket;
export const connectToSocket = () => {
  console.log('Connectting');
  socket = io('http://127.0.0.1:5000/', { transports: ['websocket' ]});
    socket.on('connect', () => {
        console.log('connected');
      });
    
    socket.on('connect_error', () => {
      console.error('Connection failed from socketApi.js');
    });
}

export const sendMessage = async(topic, data) => {
    if (!socket) {
      return false;
    }

    socket.emit(topic, data);
  };

export const subscribeToNewVote = async(cb) => {
  socket.on('new-vote', (message) => {
    cb(message);
  });
}