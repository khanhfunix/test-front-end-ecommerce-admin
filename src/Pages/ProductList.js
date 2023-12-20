import ProductList from "../Components/ProductList/ProductList";
import PageContent from "../Components/MainLayout/PageContent";

import { useLoaderData } from "react-router-dom";

function ProductListPage() {
  const dataProduct = useLoaderData();

  return (
    <PageContent>
      <ProductList products={dataProduct} />
    </PageContent>
  );
}

export default ProductListPage;
