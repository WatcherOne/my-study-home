import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/index.module.css'

export default function Home() {
    return (
        <>
            <Head>
                <title>觅书隅安</title>
            </Head>
            <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
            />
            <Image
                className={styles.logo}
                src="/next.svg"
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
            />
        </>
    )
}
