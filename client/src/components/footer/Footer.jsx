import styles from "./FooterStyle.module.css";

export default function Footer() {
  return (
    <div className={styles.containerFooter}>
      <p className={styles.footerText}>Copyright (c) 2024 ivory</p>
      <a
        className={styles.footerLink}
        id="licence"
        href="https://github.com/WildCodeSchool-2024-02/JS-lyon-0224-P2-ivory?tab=MIT-1-ov-file"
        target="_blank"
        rel="noopener noreferrer"
      >
        Licence MIT
      </a>
    </div>
  );
}
