import Head from "next/head";
import Intro from "./Intro";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Intro />
    </div>
  );
}
