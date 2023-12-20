import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import classes from "./InfoBoard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faDollarSign,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

function InfoBoard() {
  const [data, setData] = useState(undefined);
  const currentUser = useSelector((state) => state.log);
  const fetchInfoBoard = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_ENDPOINT}admin/info`,
        {
          headers: {
            Authorization: "Bearer " + currentUser.token,
          },
        }
      );
      if (response.status !== 200) {
        window.alert("Something went wrong! Please try refresh the page!");
      }
      const dataInfo = await response.json();

      setData(dataInfo.result);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchInfoBoard();
  }, []);
  return (
    <>
      {data && (
        <div className={classes.wrapper}>
          <div className={classes.infoContent}>
            <p>USERS</p>
            <span>{data.totalUser}</span>
            <FontAwesomeIcon
              className={classes.icon}
              icon={faUser}
              style={{ color: "#ff0000" }}
            />
          </div>
          <div className={classes.infoContent}>
            <p>ORDERS</p>
            <span>{data.totalOrder}</span>
            <FontAwesomeIcon
              className={classes.icon}
              icon={faCartShopping}
              style={{ color: "#ff7b00" }}
            />
          </div>
          <div className={classes.infoContent}>
            <p>EARNINGS</p>
            <span>{data.totalEarning.toLocaleString("en-Us")}.000 VND</span>
            <FontAwesomeIcon
              className={classes.icon}
              icon={faDollarSign}
              style={{ color: "#43e907" }}
            />
          </div>
          <div className={classes.infoContent}>
            <p>BALANCE</p>
            <span>{data.totalBalance.toLocaleString("en-Us")}.000 VND</span>
            <FontAwesomeIcon
              className={classes.icon}
              icon={faWallet}
              style={{ color: "#ec13da" }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default InfoBoard;
