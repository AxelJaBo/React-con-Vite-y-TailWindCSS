import { useContext } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Layout } from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard";

function MyOrders() {
    const context = useContext(ShoppingCartContext)
    return (
        <Layout>
            <div className="flex w-80 items-center relative justify-center">
                <h1>MyOrders</h1>
            </div>
            {
                context.order.map((order, index) => {
                    <Link key={index} to={`/my-orders/${order.id}`}>
                        <OrderCard
                            totalPrice={order.totalPrice}
                            totalProducts={order.totalProducts}
                        />
                    </Link>
                })
            }
        </Layout>
    )
}

export { MyOrders };