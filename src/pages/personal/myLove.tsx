// 我的喜欢的
import { GetStaticProps, InferGetServerSidePropsType } from 'next'

export const getStaticProps: GetStaticProps = async (context) => {

    // const res = await fetch('http://.../data')
    // const data = await res.json()

    return {
        props: {}
    }
}

function MyLove ({ posts }: InferGetServerSidePropsType<typeof getStaticProps>) {
    return <div>myLove</div>
}

export default MyLove
