import styles from "./page.module.css";

export default function Page() {
  return (
    <div >
      <div className={styles.container}>
        <a href="/">
        <h1>Hello, Deploy page!</h1>
        </a>
      </div>
    </div>
  )
}