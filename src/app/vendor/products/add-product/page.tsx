import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

const page = () => {
  return (
   <section className="bg-black/30 backdrop-blur-lg w-full absolute top-0 left-0 grid place-items-center py-10">
      <section className="w-5xl mx-auto bg-white rounded-lg shadow-lg text-neutral-dark">
        <h2 className="text-2xl font-bold p-5 border-b border-gray-200 flex items-center gap-x-3">
          <Link className="hover:pr-1 duration-150" href={"/vendor/products"}>
            <FiArrowLeft />
          </Link>
          Add New Product
        </h2>
        <form>
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
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium mb-2"
                  >
                    Price <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="price"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-primary"
                    placeholder="e.g. ₦8,500"
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
                  required
                >
                  <option value="">Select category</option>
                  <option value="Health & Beauty">Health & Beauty</option>
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
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-primary"
                  rows={4}
                  placeholder="Enter description"
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
                  rows={4}
                  placeholder="e.g 5000mAh battery with fast charging"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="specifications"
                  className="block text-sm font-medium mb-2"
                >
                  Specifications (one per line) <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="specifications"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-primary"
                  rows={4}
                  placeholder="e.g Brand: Cerave"
                  required
                />
              </div>
              <div>
                <label htmlFor="qty" className="block text-sm font-medium mb-2">
                  Quantity <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="qty"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-primary"
                  min="0"
                  placeholder="e.g 20"
                  required
                />
              </div>
            </section>
            <section className="w-3/7 space-y-4">
              <div className="grid place-content-center border-2 border-dashed rounded-sm h-99 font-medium border-secondary">
                Images will be displayed here
              </div>
              <div>
                <label
                  htmlFor="product-image"
                  className="text-center block text-sm font-medium w-full bg-primary/85 hover:bg-primary cursor-pointer duration-200 transition rounded-md p-3 text-white"
                >
                  Upload Images
                </label>
                <input
                  id="product-image"
                  type="file"
                  accept="image/*"
                  className="hidden"
                />
              </div>
            </section>
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
      </section>
    </section>
  )
}

export default page