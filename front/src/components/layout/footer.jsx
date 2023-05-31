import styles from './footer.module.css'

export default function Footer ({ children }) {
    return (
        <footer className={styles.footer_container}>
            <span>Copywrite 2023 - wacther</span>
            {children}
        </footer>
    )
}
