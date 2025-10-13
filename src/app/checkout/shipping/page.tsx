import Navbar from "@/components/Navbar"
import EditDeliveryDetails from "./EditDeliveryDetails"
import OrderSummary from "../OrderSummary"

const page = () => {
  return (
    <>
    <Navbar/>
    <section className="flex items-start justify-between">
        <EditDeliveryDetails/>
        <OrderSummary/>
    </section>
    </>
  )
}

export default page