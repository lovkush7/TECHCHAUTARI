import {Server} from "socket.io"
import http  from "http"
import express from "express"

const app = express();
const server = http.createServer(app);

const io = new Server(server,{
    cors:{
        origin: ["http://localhost:5173"]
    }
});
export function getReciverSocketId(userId: string){
    return userSocketmMap[userId]
}
const userSocketmMap: any = {} //{userId: socketid}

io.on("connection",(socket)=>{
  console.log("a user connected",socket.id);

  const userId = socket.handshake.query.userId as string
  if(userId){
    userSocketmMap[userId] = socket.id
  }

  io.emit("getonlineusers", Object.keys(userSocketmMap));

  socket.on("disconnected",()=>{
    console.log("a user disconnected",socket.id)
    delete userSocketmMap[userId]
  })
})

export {io,server,app}