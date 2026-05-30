import OrderForm from "../components/OrderForm";
import InventoryList from "../components/InventoryList";
import OrderList from "../components/OrderList";

function Home() {

  return (
    <div className="container mt-4">

      <OrderForm />

      <InventoryList />

      <OrderList />

    </div>
  );
}

export default Home;