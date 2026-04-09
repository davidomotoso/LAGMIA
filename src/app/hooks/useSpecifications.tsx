"use client";

import { useCartStore } from "@/Utils/storeCart";
import { useState } from "react";
import useFunctions from "./useFunctions";

const useSpecifications = () => {
  const [spec, setSpec] = useState<string>("");
  const [specValue, setSpecValue] = useState<string>("");
  const options = useCartStore((state) => state.options);
  const { alertMessage } = useFunctions();

  const handleAddSpec = () => {
    if (!spec || !specValue) {
      alertMessage("Please fill necessary fields", "bg-red-500");
      return;
    }
    const exists = options.find((item) => item.label === spec);

    if (exists) {
      alertMessage("Specification already exists", "bg-yellow-500");
      return;
    }

    useCartStore.setState({
      options: [...options, { label: spec, value: specValue }],
    });

    setSpec("");
    setSpecValue("");
  };

  const handleDeleteSpec = (index: number) => {
    const newOptions = options.filter((_, i) => i !== index);
    useCartStore.setState({ options: newOptions });
  };
  return {
    handleAddSpec,
    handleDeleteSpec,
    setSpec,
    setSpecValue,
    spec,
    specValue,
  };
};

export default useSpecifications;
