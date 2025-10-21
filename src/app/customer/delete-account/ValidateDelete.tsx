const ValidateDelete = () => {
  return (
    <section className="p-6 bg-white rounded-sm w-8/12 space-y-10">
      <div className="text-center space-y-3">
        <h3 className="text-xl font-bold">We hate to see you go!</h3>
        <p className="text-gray-600">
          Before you delete your account, please note that this action will
          permanently remove all your data across all Lagmia platforms. If
          you're sure you want to continue, kindly enter your email or phone
          number to confirm your identity.
        </p>
      </div>
      <form className="space-y-10">
        <input
          className="w-full rounded-sm border border-gray-400 p-3 focus:outline-primary"
          type="text"
          id="user-email"
          placeholder="Confirm your email or phone number"
          autoComplete="on"
        />
        <button
          className="bg-primary/85 hover:bg-primary duration-200 rounded-sm w-full p-3 font-medium text-white cursor-pointer"
          type="submit"
        >
          Delete my account
        </button>
      </form>
      <div className="text-sm space-y-2 text-gray-500 ">
        <h6 className="font-medium">Please read carefully:</h6>
        <p>
          You're about to request the permanent closure of your Lagmia account
          and the deletion of all your data. Once your account is deleted,
          you'll lose access to all products and services linked to it across
          every Lagmia platform. If you're sure you want to continue, please
          note that you won't be able to recover your account or access any of
          your information afterward.
        </p>
      </div>
    </section>
  );
};

export default ValidateDelete;
