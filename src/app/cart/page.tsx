import CartSummary from "./CartSummary"
import SelectedItem from "./SelectedItem"

const Cart = () => {
  return (
    <section className="flex items-start justify-between text-neutral-dark">
        <SelectedItem/>
        <CartSummary/>
    </section>
  )
}

export default Cart