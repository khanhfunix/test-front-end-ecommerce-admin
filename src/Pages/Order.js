import PageContent from "../Components/MainLayout/PageContent";
import OrderList from "../Components/OrderList/OrderList";
import { useLoaderData } from "react-router-dom";

function OrderPage() {
  const data = useLoaderData();
  return (
    <PageContent>
      <OrderList orders={data} title="Orders List" />
    </PageContent>
  );
}

export async function loader() {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}order`);
    if (response.status !== 200 && response.status !== 201) {
      window.alert("Something went wrong!!! Please try refresh page!");
    }
    const data = await response.json();
    return data.result;
  } catch (err) {
    console.log(err);
  }
}

export default OrderPage;
