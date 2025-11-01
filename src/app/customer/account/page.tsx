import Navbar from "@/components/Navbar";
import EditDetails from "./EditDetails";
import Nav from "../Nav";

const page = () => {
  return (
    <>
      <Navbar />
      <section className="text-neutral-dark flex items-start justify-between">
        <Nav/>
        <EditDetails/>
      </section>
    </>
  );
};

export default page;
