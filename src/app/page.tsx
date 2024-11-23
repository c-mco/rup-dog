import styles from "./page.module.css";
import Link from 'next/link'
 
 
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Link href="https://rupertfund.square.site/">DONATE NOW!</Link>
        <ul>
          <li>Welcome to Rupert&apos;s website!</li>
          <li>We&apos;ll be getting this up and running in no time.</li>
        </ul>
      </main>
    </div>
  );
}
