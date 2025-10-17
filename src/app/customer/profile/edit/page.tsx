import Navbar from "@/components/Navbar";
import Nav from "../../Nav";
import EditAddress from "@/components/EditAddress";

const page = () => {
  return (
    <>
      <Navbar />
      <section className="text-neutral-dark flex items-start justify-between">
        <Nav />
        <EditAddress back={"/customer/profile"}/>
      </section>
    </>
  );
};

export default page;
