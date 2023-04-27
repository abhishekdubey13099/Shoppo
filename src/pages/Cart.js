import { useCart } from "../context/CartContext";
import { useTitle } from "../hooks/useTitle";
import { CardCard } from "../components";



export const Cart = () => {
    const { total, cartList } = useCart();
    useTitle("Cart");
    console.log(cartList);



    return (
        <main>
            <section className="cart">
                <h1>Cart Items : {cartList.length} / ₹{total} </h1>
                {cartList.map((product) => (
                    <CardCard key={product.id} product={product} />
                ))}
            </section>
        </main>
    )
}

