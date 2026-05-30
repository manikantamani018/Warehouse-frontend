import OrderForm from "../components/OrderForm";
import InventoryList from "../components/InventoryList";

function Home() {
  return (
    <div className="container mt-4">
      <OrderForm />
      <InventoryList />
    </div>
  );
}

export default Home;