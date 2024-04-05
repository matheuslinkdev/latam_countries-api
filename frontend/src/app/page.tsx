import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {

  return (
    <main className={styles.main}>
      <h2>Latam countries</h2>
      <Link href="/countries">View the countries</Link>
    </main>
  );
}
