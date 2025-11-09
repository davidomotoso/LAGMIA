import useCartFunctions from "@/app/hooks/useCartFunctions";
import { useCartStore } from "@/Utils/storeCart";
import { FaMinus, FaPlus } from "react-icons/fa6";

const Counter = ({
  item,
  counterClass,
}: {
  item: { id: number; quantity: number };
  counterClass: string;
}) => {
  const { handleRemoveItem } = useCartFunctions();
  const incrementQuantity = useCartStore((state) => state.incrementQuantity);
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
        onClick={() => handleRemoveItem(item.quantity, item.id)}
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
