import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import Head from "next/head";
import { AdminPageName } from "@/components/misc/AdminPageName";

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
});

const theme = createTheme({
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AppCacheProvider>
            <ThemeProvider theme={theme}>
                <Head>
                    <title>{AdminPageName}</title>
                </Head>
                <Component {...pageProps} />
            </ThemeProvider>
        </AppCacheProvider>
    );
}
