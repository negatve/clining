'use client';

import Header from '../ui/Header';
import Footer from '../ui/Footer';
import '../styles/globals.css'; 
import { Provider } from 'react-redux';
import { store } from '../store/redux/store';


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="uk">
            <body>
                <Provider store={store}>
                    <Header />
                    <main className="container mx-auto py-8">
                        {children}
                    </main>
                    <Footer />
                </Provider>
            </body>
        </html>
    );
}