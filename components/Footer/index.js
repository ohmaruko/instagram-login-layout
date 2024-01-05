import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <a href='#' className={styles.link}>Meta</a>
            <a href='#' className={styles.link}>About</a>
            <a href='#' className={styles.link}>Blog</a>
            <a href='#' className={styles.link}>Jobs</a>
            <a href='#' className={styles.link}>Helps</a>
            <a href='#' className={styles.link}>API</a>
            <a href='#' className={styles.link}>Privacy</a>
            <a href='#' className={styles.link}>Terms</a>
            <a href='#' className={styles.link}>Locations</a>
            <a href='#' className={styles.link}>Instagram Lite</a>
            <a href='#' className={styles.link}>Threads</a>
            <a href='#' className={styles.link}>Contact Uploading & Non-Users</a>
            <a href='#' className={styles.link}>Meta Verified</a>
            <br />
            &copy; 2024 Instagram from Meta
        </footer>
    )
}