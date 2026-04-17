"use client";
import useSpecifications from "@/app/hooks/useSpecifications";
import Alert from "@/components/Alert";
import SpreadOptions from "@/components/SpreadOptions";
import { useProductStore } from "@/Utils/storeProducts";
const Specifications = () => {
  const { handleAddSpec, setSpec, setSpecValue, spec, specValue } =
    useSpecifications();
  const options = useProductStore((state) => state.options);

  return (
    <fieldset className="border border-gray-300 p-4 rounded-md">
      <legend className="block text-sm font-medium mb-2">Specifications</legend>
      <label htmlFor="specification" className="block text-sm font-medium mb-2">
        Select specification <span className="text-red-500">*</span>
      </label>
      <select
        id="specification"
        value={spec}
        onChange={(e) => setSpec(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-primary"
        required
      >
        <option value="">Specification</option>
        <option value="Brand">Brand</option>
        <option value="Model">Model</option>
        <option value="Subcategory">Subcategory</option>
        <option value="Color">Color</option>
        <option value="Weight">Weight</option>
        <option value="Warranty">Warranty</option>
        <option value="Condition">Condition</option>
        <option value="Author">Author</option>
        <option value="Edition">Edition</option>
        <option value="Size">Size</option>
        <option value="Gender">Gender</option>
      </select>
      <label
        htmlFor="specificationValue"
        className="block text-sm font-medium mb-2 mt-6"
      >
        Value <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        id="specificationValue"
        value={specValue}
        onChange={(e) => setSpecValue(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-primary"
        placeholder="E.g Samsung, Smartphones, Male, Black"
        required
      />
      <SpreadOptions arrs={options} />
      <div className="flex justify-end mt-4">
        <button
          type="button"
          onClick={handleAddSpec}
          className="bg-primary/80 font-medium text-sm text-white px-4 py-2 rounded-md cursor-pointer hover:bg-primary duration-200"
        >
          Add Specification
        </button>
      </div>
      <Alert />
    </fieldset>
  );
};

export default Specifications;
