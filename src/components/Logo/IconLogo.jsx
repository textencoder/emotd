import styles from "./IconLogo.module.css"

export default function IconLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      viewBox="0 0 24 24"
      fill="none"
      stroke="dimgray"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-radio-tower-icon lucide-radio-tower"
    >
      <path className={styles.outer} d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9" />
      <path className={styles.inner} d="M7.8 4.7a6.14 6.14 0 0 0-.8 7.5" />
      <circle cx="12" cy="9" r="2" />
      <path className={styles.inner} d="M16.2 4.8c2 2 2.26 5.11.8 7.47" />
      <path className={styles.outer} d="M19.1 1.9a9.96 9.96 0 0 1 0 14.1" />
      <path d="M9.5 18h5" />
      <path d="m8 22 4-11 4 11" />
    </svg>
  );
}
