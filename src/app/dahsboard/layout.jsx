
export default function Layout({ children, product, price }) {
    console.log(children)
    return (
        <div className="p-5">
            {children}
            <div className="mt-5 flex justify-center items-center gap-4">
                {product}
                {price}
            </div>
        </div>
    )
}