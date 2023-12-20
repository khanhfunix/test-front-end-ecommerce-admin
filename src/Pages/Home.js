import InfoBoard from "../Components/Home/InfoBoard";
import PageContent from "../Components/MainLayout/PageContent";

import OrderList from "../Components/OrderList/OrderList";

function HomePage() {
  return (
    <PageContent>
      <InfoBoard />
      <OrderList title="Latest Orders" />
    </PageContent>
  );
}

export default HomePage;
