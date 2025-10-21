import { useCartStore } from "@/Utils/storeCart";
import useFunctions from "@/Utils/useFunctions";
import { FaMinus, FaPlus } from "react-icons/fa6";

const Counter = ({
  item,
  counterClass,
}: {
  item: { id: number; quantity: number };
  counterClass: string;
}) => {
  const { alertMessage } = useFunctions();
  const incrementQuantity = useCartStore((state) => state.incrementQuantity);
  const decrementQuantity = useCartStore((state) => state.decrementQuantity);
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      method="post"
      className={`flex items-center gap-x-3 ${counterClass}`}
    >
      <button
        title="minus"
        className="font-bold text-lg rounded-md p-2 text-white bg-primary/85 cursor-pointer hover:bg-primary disabled:bg-gray-500"
        type="submit"
        onClick={() => {
          if(item.quantity===1){
            alertMessage("Item removed from cart", "bg-red-600");
          }
          decrementQuantity(item.id);
        }}
      >
        <FaMinus />
      </button>
      <strong>{item.quantity}</strong>
      <button
        title="plus"
        className="font-bold text-lg rounded-md p-2 text-white bg-primary/85 cursor-pointer hover:bg-primary"
        type="submit"
        onClick={() => incrementQuantity(item.id)}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default Counter;
