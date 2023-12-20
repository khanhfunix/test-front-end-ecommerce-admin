import EditHotel from "../Components/Edit-Hotel/EditHotel";
import PageContent from "../Components/MainLayout/PageContent";

import { useLoaderData, redirect } from "react-router-dom";

function EditHotelPage() {
  const data = useLoaderData();
  return (
    <PageContent>
      <EditHotel hotel={data} />
    </PageContent>
  );
}

export async function loader({ params }) {
  const id = params.hotelid;
  try {
    const response = await fetch(`http://localhost:5000/hotel/${id}`);
    if (!response.ok) {
      throw new Error("Something went wrong!!!");
    }
    const data = await response.json();
    return data.result;
  } catch (err) {
    console.log(err);
  }
}

export async function action({ request, params }) {
  const data = await request.formData();
  const id = params.hotelid;

  const hotelData = {
    name: data.get("name"),
    city: data.get("city"),
    type: data.get("type"),
    address: data.get("address"),
    distance: data.get("distance"),
    title: data.get("title"),
    description: data.get("description"),
    price: data.get("price"),
    images: data.get("images").split(","),
    featured: data.get("isFeatured") === "Yes" ? true : false,
    rooms: data.get("rooms").split(","),
    ratings: data.get("ratings"),
  };
  const response = await fetch(`http://localhost:5000/admin/edit-hotel/${id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(hotelData),
  });

  const receiveData = await response.json();
  window.alert(receiveData.message);
  if (receiveData.status === 422) {
    return null;
  }
  if (receiveData.status === 200) {
    return redirect("/hotels");
  }
  return null;
}

export default EditHotelPage;
