const EditDetails = () => {
  return (
    <section className="bg-white rounded-sm w-8/11 py-4 px-6">
      <h3 className="text-xl font-medium">Edit Details</h3>
      <form className="space-y-3 mt-8">
        <div>
          <label className="text-gray-600 text-sm" htmlFor="first-name">
            First Name
          </label>
          <input
            className="w-full border-b border-gray-400 py-3 focus:outline-0 focus:border-b-primary"
            type="text"
            id="first-name"
            placeholder="Enter your first name"
          />
        </div>
        <div>
          <label className="text-gray-600 text-sm" htmlFor="last-name">
            Last Name
          </label>
          <input
            className="w-full border-b border-gray-400 py-3 focus:outline-0 focus:border-b-primary"
            type="text"
            id="last-name"
            placeholder="Enter your last name"
          />
        </div>
        <div>
          <label className="text-gray-600 text-sm" htmlFor="user-email">
            Email
          </label>
          <input
            className="w-full border-b border-gray-400 py-3 focus:outline-0 focus:border-b-primary"
            type="email"
            id="user-email"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="text-gray-600 text-sm" htmlFor="phone-number">
            Phone Number
          </label>
          <input
            className="w-full border-b border-gray-400 py-3 focus:outline-0 focus:border-b-primary"
            type="number"
            id="phone-number"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="flex justify-end pt-5">
          <button
            className="py-2 px-5 bg-primary/85 hover:bg-primary text-white rounded-sm font-medium cursor-pointer"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditDetails;
