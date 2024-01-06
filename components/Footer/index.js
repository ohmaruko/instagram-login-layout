import styles from './Footer.module.css'

export default function Footer() {
    const links = ["Meta", "About", "Blog", "Jobs", "Helps", "API", "Privacy", "Terms", "Locations", "Instagram Lite", "Threads", "Contact Uploading & Non-Users", "Meta Verified"];
    return (
        <div className={styles.footerContainer}>
            <footer className={styles.footer}>
                <div className={styles.links}>
                    {links.map((links) => <a href='#' className={styles.link}>{links}</a>)}
                </div>
                <br />
                <p>&copy; 2024 Instagram from Meta</p>
            </footer>
        </div>
    )
}