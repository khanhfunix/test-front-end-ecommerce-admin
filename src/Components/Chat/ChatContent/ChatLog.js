import classes from "./ChatLog.module.css";
function ChatLog({ userChat, adminChat }) {
  return (
    <div className={classes.chatLog}>
      <h1>Chat Log</h1>
    </div>
  );
}

export default ChatLog;
