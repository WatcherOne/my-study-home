import styles from './footer.module.scss'

export default function Footer ({ children }) {
    return (
        <footer className={styles.footer_container}>
            <span className={styles.description}>copywrite by wacther -- 2023</span>
            {children}
        </footer>
    )
}
