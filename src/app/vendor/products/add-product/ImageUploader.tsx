
import useAddProduct from "@/app/hooks/useAddProduct";
import { useProductStore } from "@/Utils/storeProducts";
import { FaPlus, FaTimes } from "react-icons/fa";

const ImageUploader = () => {
  const { productImg, mainImage, setMainImage } = useProductStore();
  const { handleAddImage, handleDeleteImage } = useAddProduct();

  return (
    <section className="w-3/7 space-y-4">
      <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-md h-99 font-medium border-primary">
        {mainImage ? (
          <img
            src={mainImage}
            className="h-9/10 w-9/10 object-cover rounded-lg shadow-xl"
            alt=""
          />
        ) : (
            <>
          <p className="text-gray-500">Image will be displayed here</p>
          <span className="text-red-500 text-xs ">*Upload no more than 4 images</span>
          </>
        )}
      </div>
      <div className="flex items-center justify-center gap-3">
        {productImg.length < 4 && (
          <label className="w-20 h-20 border-2 border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 p-1 text-primary text-center">
            <FaPlus className="text-xl mb-2" />
            <span className="text-xs font-semibold">Add Image</span>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleAddImage}
              className="hidden"
            />
          </label>
        )}
        {productImg.map((img, index) => (
          <div key={index} className="relative cursor-pointer group">
            <img
              src={img}
              className="w-20 h-20 rounded-lg object-cover group-hover:scale-105 transition"
              alt=""
              onClick={() => setMainImage(img)}
            />
            <FaTimes
              className="cursor-pointer p-1 text-xl rounded-full bg-gray-200 hover:bg-gray-400 duration-200 absolute -right-1 -top-1"
              onClick={() => handleDeleteImage(index)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageUploader;
