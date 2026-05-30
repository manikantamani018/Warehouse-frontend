import { useState } from "react";
import { createOrder } from "../services/orderService";

function OrderForm() {

  const [formData, setFormData] = useState({
    itemId: "",
    quantity: "",
    customerType: "REGULAR"
  });

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await createOrder({
        itemId: parseInt(formData.itemId),
        quantity: parseInt(formData.quantity),
        customerType: formData.customerType
      });

      console.log("SUCCESS:", response.data);

      setIsError(false);
      setMessage("Order Created Successfully");

      setFormData({
        itemId: "",
        quantity: "",
        customerType: "REGULAR"
      });

    } catch (error) {

      console.error("ERROR:", error);

      setIsError(true);

      if (error.response && error.response.data) {

        setMessage(
          error.response.data.message ||
          "Request Failed"
        );

      } else {

        setMessage(
          "Unable to connect to server"
        );
      }
    }
  };

  return (
    <div className="card shadow p-4">

      <h2>Create Order</h2>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label className="form-label">
            Item ID
          </label>

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
          <label className="form-label">
            Quantity
          </label>

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
          <label className="form-label">
            Customer Type
          </label>

          <select
            name="customerType"
            className="form-control"
            value={formData.customerType}
            onChange={handleChange}
          >
            <option value="REGULAR">
              REGULAR
            </option>

            <option value="PREMIUM">
              PREMIUM
            </option>
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
        <div
          className={
            isError
              ? "alert alert-danger mt-3"
              : "alert alert-success mt-3"
          }
        >
          {message}
        </div>
      )}

    </div>
  );
}

export default OrderForm;