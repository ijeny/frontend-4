import Navbar from '../components/Navbar';
import {useCart} from '../components/CartContext';

export default function Cart() {
    const {cart} = useCart();

    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <h2>Cart</h2>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div className="row">
                        {cart.map((item) => (
                            <div key={item._id} className="col-md-4 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">${item.price.toFixed(2)}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}