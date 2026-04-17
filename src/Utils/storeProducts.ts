import { create } from "zustand";

interface Options {
  label: string;
  value: string | number;
}

type ProductStore = {
  options: Options[];
  productImg: string[];
  mainImage: string;
  setMainImage: (img: string) => void;
};

export const useProductStore = create<ProductStore>((set) => ({
  options: [],
  productImg: [],
  mainImage: "",
  setMainImage: (img) => set({ mainImage: img }),
}));
