import { useState } from "react";
import NewOrderForm from "../../components/NewOrderForm";

const NewOrder = () => {
  const [isSumbitted, setIsSubmitted] = useState(false);

  // if there would be more fetch calls in the future a new custom hook should be created for its status and error handling
  // plus these async calls should be moved to a separate file/folder
  const addNewOrderHandler = async (nameValue, amountValue) => {
    try {
      setIsSubmitted(false);
      const response = await fetch("/api/new-order", {
        method: "POST",
        body: JSON.stringify({
          name: nameValue,
          amount: amountValue,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("cannot send data");
      }

      const data = await response.json();

      if (data.message === "Order sent") {
        setIsSubmitted(true);
      }
    } catch (err) {
      alert(err);
      setIsSubmitted(false);
    }
  };

  return (
    <NewOrderForm onSubmit={addNewOrderHandler} isSumbitted={isSumbitted} />
  );
};

export default NewOrder;
