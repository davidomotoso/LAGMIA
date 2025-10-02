const CartSummary = () => {
  return (
    <section className="bg-white rounded-sm w-3/12">
      <h5 className="uppercase p-2 border-b border-gray-200 font-medium">
        Cart Summary
      </h5>
      <div className="flex items-center justify-between p-2 border-b border-gray-200 ">
        <h6 className="text-sm font-medium">Subtotal</h6>
        <h3 className="text-xl font-semibold">Price</h3>
      </div>
      <div className="p-2">
        <button
          className="bg-primary/85 text-center font-medium w-full text-white text-sm p-3 cursor-pointer duration-150 hover:bg-primary rounded-sm"
          title="checkout"
          type="submit"
        >
          Checkout (Price)
        </button>
      </div>
    </section>
  );
};

export default CartSummary;
