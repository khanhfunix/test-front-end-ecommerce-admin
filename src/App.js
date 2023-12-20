import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import HomePage from "./Pages/Home";
import Login from "./Components/Login/Login";
import RootLayout from "./Pages/Root";
import UsersPage from "./Pages/Users";
import ProductListPage from "./Pages/ProductList";

import AddProductPage, { action as newProductAction } from "./Pages/AddProduct";

import OrderPage, { loader as orderLoader } from "./Pages/Order";

import EditHotelPage, {
  loader as editHotelPageLoader,
  action as editHotelPageAction,
} from "./Pages/EditHotel";
import OrderDetail from "./Components/OrderList/OrderDetail/OrderDetail";
import ChatPage, { action as chatPageAction } from "./Pages/Chat";
import { logActions } from "./store/userLog";

function App() {
  const currentUser = useSelector((state) => state.log);
  const dispatch = useDispatch();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "users",
          element: <UsersPage />,
        },
        {
          path: "products",
          id: "productList",
          element: <ProductListPage />,
          loader: productLoader,
        },

        {
          path: "order",
          element: <OrderPage />,
          loader: orderLoader,
        },
        {
          path: "order/:orderid",
          element: <OrderDetail />,
        },
        {
          path: "add-product",
          element: <AddProductPage />,
          action: newProductAction,
        },

        {
          path: "edit-hotel/:hotelid",
          element: <EditHotelPage />,
          loader: editHotelPageLoader,
          action: editHotelPageAction,
        },
        {
          path: "chat",
          element: <ChatPage />,
          action: chatPageAction,
        },
      ],
    },
  ]);
  const getTokenDuration = () => {
    if (currentUser.token === "") {
      return;
    }
    const storedExpirationDate = currentUser.expire;

    const expirationDate = new Date(storedExpirationDate);

    const now = new Date();
    const duration = expirationDate.getTime() - now.getTime();
    return duration;
  };

  useEffect(() => {
    if (currentUser.token === "") {
      return;
    }
    const tokenDuration = getTokenDuration();

    if (tokenDuration < 0) {
      dispatch(logActions.logOut());
    }
    console.log(tokenDuration);
    setTimeout(() => {
      dispatch(logActions.logOut());
    }, tokenDuration);
  }, [currentUser]);
  return (
    <>
      {currentUser.isAdmin !== "TRUE" && <Login />}
      {currentUser.isAdmin === "TRUE" && (
        <RouterProvider router={router}></RouterProvider>
      )}
    </>
  );
}

export async function productLoader() {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}product`
    );
    if (!response.ok) {
      throw new Error("Something went wrong!!!");
    }
    const data = await response.json();
    return data.result;
  } catch (err) {
    console.log(err);
  }
}

export default App;
