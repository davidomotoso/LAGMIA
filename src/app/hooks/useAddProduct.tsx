import { useProductStore } from "@/Utils/storeProducts";
import useFunctions from "./useFunctions";

const useAddProduct = () => {
  const { productImg, mainImage, setMainImage } = useProductStore();
  const { alertMessage } = useFunctions();

  const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
  const files = e.target.files;
  if (!files) return;

  const MAX_SIZE = 1 * 1024 * 1024;

  const remainingSlots = 4 - productImg.length;
  const filesToAdd = Array.from(files).slice(0, remainingSlots);

  filesToAdd.forEach((file) => {
    if (file.size > MAX_SIZE) {
      alertMessage(`"${file.name}" is larger than 1MB.`,"bg-red-500");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const result = reader.result as string;

      useProductStore.setState((state) => ({
        productImg: [...state.productImg, result],
        mainImage: state.mainImage || result,
      }));
    };

    reader.readAsDataURL(file);
  });
};
  const handleDeleteImage = (index: number) => {
    const updated = productImg.filter((_, i) => i !== index);
    useProductStore.setState({
      productImg: updated,
    });

    if (mainImage === productImg[index]) {
      setMainImage(updated[0] || "");
    }
  };
  return {
    handleAddImage,
    handleDeleteImage,
  };
};

export default useAddProduct;
