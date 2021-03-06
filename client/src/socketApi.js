import { io } from 'socket.io-client'

let socket;
export const connectToSocket = () => {
  console.log('Connectting');
  socket = io('https://survey-app-3.herokuapp.com/', { transports: ['websocket' ]});
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