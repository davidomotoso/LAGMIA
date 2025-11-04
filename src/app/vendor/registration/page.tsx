import Location from "@/components/Location";
import UploadBioData from "./UploadBioData";

const page = () => {
  return (
    <section className="bg-black/30 backdrop-blur-lg w-full absolute top-0 left-0 grid place-items-center py-10">
      <section className="bg-white p-3 rounded-sm text-neutral-dark w-6/10">
        <h2 className="font-semibold text-center text-2xl">
          Complete your registration!
        </h2>
        <form className="mt-8 space-y-6">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-5 px-6">
            <div>
              <label className="font-medium text-sm" htmlFor="business-name">
                Business name
              </label>
              <input
                className="w-full border border-gray-300 rounded-md p-2.5 focus:outline-primary mt-1"
                type="text"
                name="business-name"
                id="business-name"
                placeholder="e.g Chidera Fashions"
                required
              />
            </div>
            <div>
              <label className="font-medium text-sm" htmlFor="business-email">
                Email
              </label>
              <input
                className="w-full border border-gray-300 rounded-md p-2.5 focus:outline-primary mt-1"
                type="email"
                name="business-email"
                id="business-email"
                placeholder="e.g example@gmail.com"
                required
              />
            </div>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-5 px-6">
            <div>
              <label className="font-medium text-sm" htmlFor="bank-name">
                Bank name
              </label>
              <input
                className="w-full border border-gray-300 rounded-md p-2.5 focus:outline-primary mt-1"
                type="text"
                name="bank-name"
                id="bank-name"
                placeholder="e.g example bank"
                required
              />
            </div>
            <div>
              <label className="font-medium text-sm" htmlFor="account-number">
                Account number
              </label>
              <input
                className="w-full border border-gray-300 rounded-md p-2.5 focus:outline-primary mt-1"
                type="number"
                name="account-number"
                id="account-number"
                placeholder="e.g 0123456789"
                required
              />
            </div>
          </section>
          <section className="flex items-center gap-2 px-6">
            <div>
              <h6 className="text-sm mb-1 font-medium">Prefix</h6>
              <div className="w-20 border border-gray-300 rounded-md p-2.5 bg-gray-100">
                +234
              </div>
            </div>
            <div className="flex-1">
              <label className="text-sm font-medium" htmlFor="phone-number">
                Phone Number
              </label>
              <input
                id="phone-number"
                type="number"
                placeholder="e.g 9099099900"
                max={10}
                className="w-full border border-gray-300 rounded-md p-2.5 focus:outline-primary mt-1"
                required
              />
            </div>
          </section>
          <section className="flex gap-4 border-b border-gray-100 pb-7 px-6">
            <Location addClass="p-2.5 mt-1" labelClass="text-sm font-medium" visible={true} />
          </section>
          <UploadBioData />
          <div className="flex justify-end pt-6 px-6 border-t border-gray-200">
            <button
              type="submit"
              className="bg-primary/85 text-white font-medium px-7 py-3 rounded-md hover:bg-primary cursor-pointer duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default page;
