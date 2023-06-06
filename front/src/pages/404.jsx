export default function NotFound ({ statusCode }) {
    return (
        <div>not found page</div>
    )
}

NotFound.getLayout = () => {
    return <NotFound></NotFound>
}
