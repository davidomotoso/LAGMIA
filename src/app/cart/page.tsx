import CartSummary from "./CartSummary"
import NoItem from "./NoItem"
import SelectedItem from "./SelectedItem"

const Cart = () => {
  return (
    <section className="flex items-start justify-between text-neutral-dark">
      <NoItem/>
        {/* <SelectedItem/>
        <CartSummary/> */}
    </section>
  )
}

export default Cart