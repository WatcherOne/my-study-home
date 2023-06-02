import styles from './header.module.scss'

export default function Header ({ children }) {
    return (
        <header className={styles.header_container}>
            <div className={styles.settings}>
                <div className='title'>游客</div>
            </div>
            {children}
        </header>
    )
}
