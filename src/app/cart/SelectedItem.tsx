import Counter from "@/components/Counter";
import { useCartStore } from "@/Utils/storeCart";
import useFunctions from "@/Utils/useFunctions";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FiTrash } from "react-icons/fi";

const SelectedItem = () => {
  const cart = useCartStore((state) => state.cart) as {
    id: number;
    name: string;
    price: string;
    image: StaticImageData;
    quantity: number;
    seller: string;
  }[];
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const { alertMessage } = useFunctions();
  return (
    <section className="bg-white rounded-sm w-8/11 mb-4">
      <h3 className="text-xl font-semibold p-3 border-b border-gray-200">
        Cart ({cart.length} items)
      </h3>
      {cart.map((item, index) => (
        <div key={index} className="not-last:border-b border-gray-200">
          <div className="flex items-start justify-between p-3">
            <div className="flex items-start gap-x-3">
              <Image
                className="w-18 h-18 rounded-sm object-cover"
                src={item.image}
                alt={item.name}
              />
              <div>
                <h4 className="text-lg hover:text-secondary duration-200">
                  <Link href={`products/${item.id}`}> {item.name}</Link>
                </h4>
                <p className="text-sm text-gray-400">{"In stock"}</p>
              </div>
            </div>
            <h3 className="text-xl font-semibold">{item.price}</h3>
          </div>
          <div className="flex items-start justify-between p-3">
            <button
              title="remove"
              className="flex items-center gap-x-2 p-2 font-medium rounded-sm cursor-pointer text-primary hover:bg-primary/35 duration-150"
              type="submit"
              onClick={() => {
                removeFromCart({
                  id: item.id,
                  name: item.name,
                  price: item.price,
                  image: item.image,
                  quantity: item.quantity,
                  seller: item.seller,
                }),
                  alertMessage("Item removed from cart", "bg-red-600");
              }}
            >
              <FiTrash className="text-lg" />
              <span className="text-sm">Remove</span>
            </button>
            <Counter
              item={{ id: item.id, quantity: item.quantity }}
              counterClass={""}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default SelectedItem;
