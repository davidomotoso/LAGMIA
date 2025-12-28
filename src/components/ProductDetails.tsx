const ProductDetails = ({ product }: { product: { desc: string[] } }) => {
  return (
    <section className="bg-white rounded-sm text-neutral-dark">
      <h3 className="text-xl font-medium p-3 border-b border-gray-200">
        Product Details
      </h3>
      <div>
        {product.desc.map((line, index) => (
          <p key={index} className="px-3 py-2 text-gray-600 text-sm">
            {line}
          </p>
        ))}
      </div>
    </section>
  );
};

export default ProductDetails;
