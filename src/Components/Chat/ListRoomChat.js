import classes from "./ListRoomChat.module.css";
import { useEffect, useState } from "react";
import Room from "./Room";

function ListRoomChat() {
  const [rooms, setRooms] = useState([]);
  const fetchRoomList = async function () {
    try {
      const response = await fetch("URL");
      if (response.status !== 200) {
        window.alert("Something went wrong !!");
      }
      const data = await response.json();
      setRooms(data.result);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchRoomList();
  }, []);
  return (
    <div className={classes.listRoomChatWrapper}>
      <form className={classes.searchBox}>
        <input id="search" name="search" placeholder="Search Contact"></input>
        <label htmlFor="search"></label>
      </form>
      <div>
        {rooms &&
          rooms.map((room, index) => {
            return <Room key={index} roomId={room._id} />;
          })}
      </div>
    </div>
  );
}

export default ListRoomChat;
