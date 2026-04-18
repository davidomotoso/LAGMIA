"use client";

import { useState } from "react";
import { useProductStore } from "@/Utils/storeProducts";
import useFunctions from "./useFunctions";

const useAddProduct = () => {
  const { productImg, mainImage, setMainImage, specifications, product } =
    useProductStore();
  const { alertMessage } = useFunctions();
  const [spec, setSpec] = useState<string>("");
  const [specValue, setSpecValue] = useState<string>("");
  const [productName, setProductName] = useState<string>("");
  const [productPrice, setProductPrice] = useState<number>(0);
  const [productCategory, setProductCategory] = useState<string>("");
  const [productDescription, setProductDescription] = useState<object>([]);
  const [productFeatures, setProductFeatures] = useState<object>([]);
  const [productQuantity, setProductQuantity] = useState<number>(0);

  const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const MAX_SIZE = 1 * 1024 * 1024;

    const remainingSlots = 4 - productImg.length;
    const filesToAdd = Array.from(files).slice(0, remainingSlots);

    filesToAdd.forEach((file) => {
      if (file.size > MAX_SIZE) {
        alertMessage(`"${file.name}" is larger than 1MB.`, "bg-red-500");
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

  const handleAddSpec = () => {
    const exists = specifications.find((item) => item.label === spec);
    if (exists) {
      alertMessage("Specification already exists", "bg-yellow-500");
      setSpec("");
      setSpecValue("");
      return;
    }

    useProductStore.setState((state) => ({
      specifications: [
        ...state.specifications,
        { label: spec, value: specValue },
      ],
    }));

    setSpec("");
    setSpecValue("");
  };

  const handleDeleteSpec = (index: number) => {
    const newspecifications = specifications.filter((_, i) => i !== index);
    useProductStore.setState({ specifications: newspecifications });
  };

  const handleAddProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!productImg.length || !specifications.length) {
      alertMessage("Please fill necessary fields", "bg-red-500");
      return;
    }

    const list = {
      name: productName,
      price: productPrice,
      category: productCategory,
      description: productDescription,
      features: productFeatures,
      quantity: productQuantity,
      specifications: specifications,
    };

    useProductStore.setState((state) => ({
      product: [...state.product, list],
    }));
    console.log(product);
  };

  return {
    handleAddImage,
    handleDeleteImage,
    handleAddSpec,
    handleDeleteSpec,
    handleAddProduct,
    setSpec,
    setSpecValue,
    spec,
    specValue,
    setProductName,
    setProductPrice,
    setProductCategory,
    setProductDescription,
    setProductFeatures,
    setProductQuantity,
  };
};

export default useAddProduct;
