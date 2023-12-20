import classes from "./Chat.module.css";
import ChatLog from "./ChatContent/ChatLog";
import ResponseBox from "./ChatContent/ResponseBox";
import ListRoomChat from "./ListRoomChat";
import { useState, useEffect } from "react";

function Chat({ chatAdmin }) {
  const [userChat, setUserChat] = useState([]);
  const fetchUserChat = async function () {
    const response = await fetch("URL");
    if (response.status !== 200) {
      window.alert("Something went wrong. Please try refresh the page");
    }
    const data = await response.json();
    setUserChat(data.result);
  };
  useEffect(() => {
    fetchUserChat();
  }, []);
  return (
    <div className={classes.chatWrapper}>
      <h1>Chat App</h1>
      <div className={classes.chatComponent}>
        <ListRoomChat />
        <div className={classes.chatBox}>
          <ChatLog userChat={userChat} adminChat={chatAdmin} />
          <ResponseBox />
        </div>
      </div>
    </div>
  );
}

export default Chat;
