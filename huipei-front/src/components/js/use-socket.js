import {WS_URL} from "../../assets/constants.js";


export default function useSocket(handleMessage){
  
  const ws = new WebSocket(WS_URL);

  // 监听ws事件
  ws.addEventListener("open", handleOpen);
  ws.addEventListener("error", handleError);
  ws.addEventListener("close", handleClose);
  ws.addEventListener("message", handleMessage);


  function handleOpen(e){
    console.log("ws is opening....",e);
  }

  function handleError(e){
    console.log("ws is error....",e);
  }

  function handleClose(e){
    console.log("ws is closing....",e);
  }


  function sendMsg(msg){
    ws.send(JSON.stringify(msg))
  }

  return {
    sendMsg,
  }
}

