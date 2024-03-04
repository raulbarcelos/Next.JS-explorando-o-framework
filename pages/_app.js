import GlobalStyle from "../src/theme/GlobalStyle";

function MyApp({ Component, pageProps }) {
    return (
        <>
        <GlobalStyle/>
        teste de component middleware
            <Component {...pageProps} />
        </>
    )
}

export default MyApp;