import useAddProduct from "@/app/hooks/useAddProduct";
import { FaTimes } from "react-icons/fa";

interface Specifications {
  label: string;
  value: string | number;
}
const SpreadOptions = ({ arrs }: { arrs: Specifications[] }) => {
  const { handleDeleteSpec } = useAddProduct();
  return (
    <>
      {arrs.length > 0 && (
        <section className="mt-2 flex gap-2 flex-wrap items-center">
          {arrs.map((arr, index) => (
            <div
              key={index}
              className="text-xs py-1 px-2 w-max bg-gray-200 flex items-center gap-x-1 rounded-2xl font-medium"
            >
              {arr.label}: {arr.value}
              <FaTimes
                className="cursor-pointer p-1 text-lg rounded-full hover:bg-gray-400 duration-200"
                onClick={() => handleDeleteSpec(index)}
              />
            </div>
          ))}
        </section>
      )}
    </>
  );
};

export default SpreadOptions;
