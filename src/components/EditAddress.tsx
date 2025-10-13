import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

const EditAddress = ({ back }: { back: string }) => {
  return (
    <section className="w-8/11 bg-white rounded-sm shadow-sm text-neutral-dark">
      <Link href={`${back}`} className="text-xl flex items-center gap-2 border-b border-gray-100 p-3">
        <FiArrowLeft  />
        <h3 className="font-semibold">Edit Address</h3>
      </Link>
      <form className="space-y-5 py-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6">
          <div>
            <label className="text-sm" htmlFor="first-name">
              First Name
            </label>
            <input
              id="first-name"
              autoComplete="on"
              type="text"
              placeholder="Enter first name"
              className="w-full border border-gray-300 rounded-md p-2.5 focus:outline-primary"
            />
          </div>
          <div>
            <label className="text-sm" htmlFor="last-name">
              Last Name
            </label>
            <input
              id="last-name"
              autoComplete="on"
              type="text"
              placeholder="Enter first name"
              className="w-full border border-gray-300 rounded-md p-2.5 focus:outline-primary"
            />
          </div>
        </div>
        <div className="flex gap-2 px-6">
          <div>
            <h6 className="text-sm">Prefix</h6>
            <div className="w-20 border border-gray-300 rounded-md p-2.5 bg-gray-100">
              +234
            </div>
          </div>
          <div className="flex-1">
            <label className="text-sm" htmlFor="phone-number">
              Phone Number
            </label>
            <input
              id="phone-number"
              type="number"
              placeholder="Enter phone number"
              max={10}
              className="w-full border border-gray-300 rounded-md p-2.5 focus:outline-primary"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-gray-100 pb-7 px-6">
          <div>
            <label className="text-sm" htmlFor="region">
              Region
            </label>
            <select
              id="region"
              title="Region"
              className="w-full border border-gray-300 rounded-md p-2.5 focus:outline-primary"
              autoComplete="on"
            >
              <option value="akoka">Akoka (UNILAG)</option>
              <option value="idi-araba">Idi-Araba (CMUL)</option>
            </select>
          </div>
          <div>
            <label className="text-sm" htmlFor="vicinity">
              Vicinity
            </label>
            <select
              title="Vicinity"
              id="vicinity"
              className="w-full border border-gray-300 rounded-md p-2.5 pr-6 focus:outline-primary"
              autoComplete="on"
            >
              <option value="Yaba-(Unilag)">Yaba-(Unilag)</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end pt-2 px-6">
          <button
            type="button"
            className="bg-primary/85 text-white font-medium px-6 py-2.5 rounded-md hover:bg-primary cursor-pointer duration-200"
          >
            Save
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditAddress;
