import AddProduct from "../Components/Add-Product/AddProduct";
import PageContent from "../Components/MainLayout/PageContent";

function AddProductPage() {
  return (
    <PageContent>
      <AddProduct />
    </PageContent>
  );
}

export default AddProductPage;

export async function action({ request }) {
  const data = await request.formData();

  const productData = {
    name: data.get("name"),

    category: data.get("category"),
    price: data.get("price"),
    short_desc: data.get("short_desc"),
    long_desc: data.get("long_desc"),

    images: data.get("images"),
  };
  console.log(productData.images);

  const response = await fetch(
    `${process.env.REACT_APP_API_ENDPOINT}admin/add-product/`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    }
  );
  if (response.status !== 200 && response.status !== 201) {
    window.alert("Something went wrong");
  }
  const receiveData = await response.json();
  window.alert(receiveData.message);
  // return redirect("/products");
  return null;
}
