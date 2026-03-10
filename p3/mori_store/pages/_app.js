import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

import navbar from '../components/navbar';
import { CartProvider } from '../contexts/CartContext';

function MyApp({ Component, pageProps}) {
    return (
        <CartProvider>
            <navbar />
            <Component {...pageProps} />
        </CartProvider>
    );
}

export default MyApp;