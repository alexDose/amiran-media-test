import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {Navbar} from "@/widgets/Navbar";
import {wrapper} from "@/store/config/store";

function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Navbar/>
            <Component {...pageProps} />
        </>
    );
}

export default wrapper.withRedux(App);
