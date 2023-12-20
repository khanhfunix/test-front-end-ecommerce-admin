import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import classes from "./OrderList.module.css";
function OrderList({ title }) {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const fetchOrder = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}order`);
      if (response.status !== 200) {
        window.alert("Something went wrong! Please try refresh the page!");
      }
      const dataOrder = await response.json();
      setOrders(dataOrder.result);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchOrder();
  }, []);
  return (
    <div className={classes.tableList}>
      <h1>{title}</h1>
      <table>
        <thead>
          <tr>
            <th>ID USER</th>
            <th>NAME</th>
            <th>PHONE</th>
            <th>ADDRESS</th>
            <th>TOTAL</th>
            <th>DELIVERY</th>
            <th>STATUS</th>
            <th>DETAIL</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => {
              return (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.fullName}</td>
                  <td>{order.phoneNumber}</td>
                  <td>{order.address}</td>
                  <td>{order.totalPrice.toLocaleString("de-DE")} VND</td>
                  <td>{order.delivery}</td>
                  <td>{order.status}</td>
                  <td>
                    <button
                      onClick={() => {
                        navigate(`/order/${order._id}`);
                      }}
                    >
                      VIEW
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default OrderList;
