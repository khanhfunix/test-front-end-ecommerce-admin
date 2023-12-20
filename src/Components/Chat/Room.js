import classes from "./Room.module.css";

function Room({ roomId }) {
  return (
    <div className={classes.roomWraper}>
      <h1>{roomId}</h1>
    </div>
  );
}

export default Room;
