import { useCart } from "../context/CartContext";
import { useTitle } from "../hooks/useTitle";
import { CardCard } from "../components";



export const Cart = () => {
    const { total, cartList } = useCart();
    useTitle("Cart");
    console.log(cartList);

    const products = [
        { "id": 3, "name": "JBL Tune 760NC", "price": 179, "image": "/assets/images/pngwing.com.png" },
        { "id": 4, "name": "Logitech H111 Wired", "price": 39, "image": "/assets/images/pngwing.com (2).png" }
    ]


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

