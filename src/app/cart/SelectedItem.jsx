import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { FiTrash } from "react-icons/fi";

const SelectedItem = () => {
  return (
    <section className="bg-white rounded-sm w-8/11">
      <h3 className="text-xl font-semibold p-3 border-b border-gray-200">
        Cart (1)
      </h3>
      <div className="flex items-start justify-between p-3">
        <div className="flex items-start gap-x-3">
          <Image src={""} alt="" />
          <div>
            <h4 className="text-lg">{"something"}</h4>
            <p>{"something"}</p>
          </div>
        </div>
        <h3 className="text-xl font-semibold">{"Price"}</h3>
      </div>
      <div className="flex items-start justify-between p-3">
        <button
          title="remove"
          className="flex items-center gap-x-2 p-2 font-medium rounded-sm cursor-pointer text-primary hover:bg-primary/35 duration-150"
          type="submit"
        >
          <FiTrash className="text-lg" />
          <span className="text-sm">Remove</span>
        </button>
        <form method="post" className="flex items-center gap-x-3">
          <button
            title="minus"
            className="font-bold text-lg rounded-md p-2 text-white bg-primary/85 cursor-pointer hover:bg-primary disabled:bg-gray-500"
            type="submit"
            disabled
          >
            <FaMinus />
          </button>
          <strong>1</strong>
          <button
            title="plus"
            className="font-bold text-lg rounded-md p-2 text-white bg-primary/85 cursor-pointer hover:bg-primary"
            type="submit"
          >
            <FaPlus />
          </button>
        </form>
      </div>
    </section>
  );
};

export default SelectedItem;
