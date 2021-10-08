import axios from 'axios';
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

export const sendMessage = async(topic, data) => {
    if (!socket) {
      return false;
    }

    // await axios.post("http://localhost:3002/votes", { vote: data});
    socket.emit(topic, data);
  };

export const subscribeToNewVote = async() => {
  socket.on('new-vote', (vote) => {
    console.log(vote);
  });
}