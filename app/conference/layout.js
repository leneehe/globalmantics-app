import styles from './styles.css'

export default function ConferenceLayout({ children }) {
  return (
    <>
    <header className={styles.header}>
      <h1>GLOBALMANTICS MANIACALLY TAKING TECH TO THE GLOBE</h1>
    </header>
      <section>{children}</section>
    </>
  );
}
