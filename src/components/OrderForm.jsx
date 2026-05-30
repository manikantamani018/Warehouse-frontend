import { useState } from "react";
import { createOrder } from "../services/orderService";

function OrderForm() {

  const [formData, setFormData] = useState({
    itemId: "",
    quantity: "",
    customerType: "REGULAR"
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await createOrder({
        itemId: Number(formData.itemId),
        quantity: Number(formData.quantity),
        customerType: formData.customerType
      });

      setMessage("Order Created Successfully");

      setFormData({
        itemId: "",
        quantity: "",
        customerType: "REGULAR"
      });

    } catch (error) {

      console.error(error);

      setMessage("Failed To Create Order");
    }
  };

  return (
    <div className="card shadow p-4">

      <h2>Create Order</h2>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label>Item ID</label>

          <input
            type="number"
            name="itemId"
            className="form-control"
            value={formData.itemId}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Quantity</label>

          <input
            type="number"
            name="quantity"
            className="form-control"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Customer Type</label>

          <select
            name="customerType"
            className="form-control"
            value={formData.customerType}
            onChange={handleChange}
          >
            <option value="REGULAR">REGULAR</option>
            <option value="PREMIUM">PREMIUM</option>
          </select>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
        >
          Place Order
        </button>

      </form>

      {message && (
        <div className="alert alert-info mt-3">
          {message}
        </div>
      )}

    </div>
  );
}

export default OrderForm;