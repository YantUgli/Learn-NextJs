export const getData = async (params) => {
    const res = await fetch(`https://fakestoreapi.com/products/${params ? params.id : ''}`, {
        cache: 'force-cache',
        next: {
            revalidate: 10
        }
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
