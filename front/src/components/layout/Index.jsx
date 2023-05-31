export default function Layout ({ children }) {
    return (
        <>
            <header>
                <h1>测试布局</h1>
            </header>
            <main>{children}</main>
            <footer>
                <span>Copywrite 2023 - wacther</span>
            </footer>
        </>
    )
}
