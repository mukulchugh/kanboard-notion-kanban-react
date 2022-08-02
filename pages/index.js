import Head from "next/head";
import Image from "next/image";
import Boards from "../components/Boards";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>KanBoard</title>
        <meta
          name="description"
          content="A Kanban app built as a internship assessment project for AirTribe"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to KanBoard!</h1>

        <p className={styles.description}>Here are your boards:</p>
        <Boards />
      </main>

      <footer className={styles.footer}>
        Built with{" "}
        <span className={styles.logo}>
          <Image src="/nextjs.svg" alt="NextJS" width={50} height={50} />
          <Image src="/tailwind.svg" alt="TailwindCSS" width={50} height={50} />
        </span>
        by Mukul Chugh
      </footer>
    </div>
  );
}
