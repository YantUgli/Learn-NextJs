

export default function DetailProductPage({ params }) {
    console.log(params);
    return (
        <div>
            <h1>
                Detail Product Page
            </h1>
            <h2>Product : {params.slug[0]}</h2>
            <h2>Gender : {params.slug[1]}</h2>
        </div>
    )
}