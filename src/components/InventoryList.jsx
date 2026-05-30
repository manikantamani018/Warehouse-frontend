import { useEffect, useState } from "react";
import { getInventory } from "../services/orderService";

function InventoryList() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    loadInventory();
  }, []);

  const loadInventory = async () => {

    try {

      const response = await getInventory();

      console.log("Inventory Response:", response.data);

      setItems(response.data);

    } catch (error) {

      console.error("Inventory Error:", error);
    }
  };

  return (
    <div className="card shadow p-4 mt-4">

      <h2>Inventory</h2>

      <table className="table table-bordered">

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Restock</th>
          </tr>
        </thead>

        <tbody>

          {items.length > 0 ? (
            items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.stockQuantity}</td>
                <td>{item.restockQuantity}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">
                No Inventory Found
              </td>
            </tr>
          )}

        </tbody>

      </table>

    </div>
  );
}

export default InventoryList;