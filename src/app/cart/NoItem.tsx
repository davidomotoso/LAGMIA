import Image from "next/image";
import cart from "@/../public/cart.png";
import Link from "next/link";

const NoItem = () => {
  return (
    <section className="bg-white rounded-sm text-neutral-dark py-8 w-full grid place-items-center gap-y-5">
      <Image
        className="rounded-full bg-gray-200 p-2 w-28 h-28"
        src={cart}
        alt="cart"
      />
      <h5 className="font-medium">Your cart is empty!</h5>
      <p>Check our categories and discover your preference!</p>
      <Link href={"/"}>
        <button
          className="p-4  shadow-lg mt-4 cursor-pointer bg-primary/85 hover:bg-primary duration-150 text-white font-medium rounded-sm"
          title="start shopping"
          type="button"
        >
          Start Shopping
        </button>
      </Link>
    </section>
  );
};

export default NoItem;
