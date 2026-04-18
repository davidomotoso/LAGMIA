import { create } from "zustand";

interface Product {
  name: string;
  price: number;
  category: string;
  description: object;
  features: object;
  quantity: number;
  specifications: Specifications[];
}

interface Specifications {
  label: string;
  value: string | number;
}

type ProductStore = {
  product: Product[];
  specifications: Specifications[];
  productImg: string[];
  mainImage: string;
  setMainImage: (img: string) => void;
};

export const useProductStore = create<ProductStore>((set) => ({
  product: [],
  specifications: [],
  productImg: [],
  mainImage: "",
  setMainImage: (img) => set({ mainImage: img }),
}));
