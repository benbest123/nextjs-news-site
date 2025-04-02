import NavBar from "@/components/NavBar";
import styles from "@/styles/App.module.css";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import { Container } from "react-bootstrap";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title key="title">NextJS News App</title>
        <meta name="description" key="description" content="NextJS course from coding in flow on youtube" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextNProgress></NextNProgress>
      <NavBar />
      <Container className={styles.pageContainer}>
        <Component {...pageProps} />
      </Container>
    </div>
  );
}
