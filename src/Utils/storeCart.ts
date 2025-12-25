"use client";
import { create } from "zustand";
import { StaticImageData } from "next/image";

interface Product {
  id: number;
  name: string;
  price: string;
  image: StaticImageData;
  quantity: number;
  seller: string;
}

interface Alert {
  message: string;
  type: boolean;
  color: string;
}

interface ReportProduct {
  id: number;
  reason: string;
  additionalDetails: string;
}

interface CartState {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (item: Product) => void;
  alert: Alert | object;
  setAlert: (alert: Alert | object) => void;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
  report: ReportProduct[];
  addReport: (report: ReportProduct) => void;
}
export const useCartStore = create<CartState>((set) => {
  return {
    cart: [],
    addToCart: (product: Product) =>
      set((state) => ({ cart: [...state.cart, product] })),
    removeFromCart: (item: Product) =>
      set((state) => ({ cart: state.cart.filter((i) => i.id !== item.id) })),
    alert: {},
    setAlert: (alert) => set(() => ({ alert })),
    incrementQuantity: (id) =>
      set((state) => ({
        cart: state.cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        ),
      })),
    decrementQuantity: (id) =>
      set((state) => ({
        cart: state.cart
          .map((item) =>
            item.id === id && item.quantity > 0
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          )
          .filter((item) => item.quantity > 0),
      })),
    report: [],
    addReport: (report: ReportProduct) =>
      set((state) => ({ report: [...state.report, report] })),
  };
});
