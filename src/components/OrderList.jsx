import { useEffect, useState } from "react";
import { getAllOrders } from "../services/orderService";

function OrderList() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {

    try {

      const response = await getAllOrders();

      setOrders(response.data);

    } catch (error) {

      console.error(error);
    }
  };

  return (
    <div className="card shadow p-4 mt-4">

      <h2>Recent Orders</h2>

      <table className="table table-bordered">

        <thead>

          <tr>
            <th>ID</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Customer Type</th>
          </tr>

        </thead>

        <tbody>

          {orders.map((order) => (

            <tr
              key={order.id}
              className={
                order.status === "BACKORDERED"
                  ? "table-danger"
                  : ""
              }
            >

              <td>{order.id}</td>

              <td>
                {order.inventoryItem?.name}
              </td>

              <td>{order.quantity}</td>

              <td>{order.status}</td>

              <td>{order.customerType}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default OrderList;