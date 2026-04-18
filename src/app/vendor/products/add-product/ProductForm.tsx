"use client";

import useAddProduct from "@/app/hooks/useAddProduct";
import ImageUploader from "./ImageUploader";
import Specifications from "./Specifications";

const ProductForm = () => {
  const {
    setProductName,
    setProductPrice,
    setProductCategory,
    setProductDescription,
    setProductFeatures,
    setProductQuantity,
    handleAddProduct,
  } = useAddProduct();
  return (
    <form onSubmit={(e)=>handleAddProduct(e)}>
      <main className="flex items-start justify-between p-5">
        <section className="space-y-6 w-6/11">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="product-name"
                className="block text-sm font-medium mb-2"
              >
                Product Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="product-name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-primary"
                placeholder="Enter product name"
                onChange={(e) => setProductName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="price" className="block text-sm font-medium mb-2">
                Price <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="price"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-primary"
                placeholder="e.g 8,500"
                min={0}
                onChange={(e) => setProductPrice(parseFloat(e.target.value))}
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium mb-2"
            >
              Category <span className="text-red-500">*</span>
            </label>
            <select
              id="category"
              name="category"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-primary"
              onChange={(e) => setProductCategory(e.target.value)}
              required
            >
              <option value="">Select category</option>
              <option value="Health&Beauty">Health & Beauty</option>
              <option value="Electronics">Electronics</option>
              <option value="Fashion">Fashion</option>
              <option value="Home Appliances">Home Appliances</option>
              <option value="Computing">Computing</option>
              <option value="Phones & Tablets">Phones & Tablets</option>
              <option value="Books">Books</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium mb-2"
            >
              Description (one per line) <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-primary"
              rows={5}
              placeholder="Enter description"
              onChange={(e) =>
                setProductDescription(e.target.value.split("\n"))
              }
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Features (one per line) <span className="text-red-500">*</span>
            </label>
            <textarea
              id="features"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-primary"
              rows={5}
              placeholder="e.g 5000mAh battery with fast charging"
              onChange={(e) => setProductFeatures(e.target.value.split("\n"))}
              required
            />
          </div>
          <Specifications />
          <div>
            <label htmlFor="qty" className="block text-sm font-medium mb-2">
              Quantity <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="qty"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-primary"
              min={0}
              placeholder="e.g 20"
              onChange={(e) => setProductQuantity(parseFloat(e.target.value))}
              required
            />
          </div>
        </section>
        <ImageUploader />
      </main>
      <div className="p-6">
        <button
          type="submit"
          className="w-full bg-primary/85 py-3 px-4 rounded-md text-white font-medium hover:bg-primary cursor-pointer duration-200 transition"
        >
          Add Product
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
