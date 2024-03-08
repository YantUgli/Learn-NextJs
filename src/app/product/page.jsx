import Image from "next/image";
import Link from "next/link";

async function getData() {
    const res = await fetch('https://fakestoreapi.com/products?limit=20', {
        cache: 'force-cache',
        // next: {
        //     revalidate: 10
        // }
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function ProductPage() {
    const products = await getData()
    return (
        <div>
            <h1>
                Product Page
            </h1>
            <div className="grid grid-cols-3 gap-4  justify-center items-center">

                {products.length > 0 && products.map((item) => (
                    <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  " key={item.id}>
                        <div className=" h-48 relative">
                            <Image className="rounded-t-lg object-cover" src={item.image} alt="gambar" fill />
                        </div>
                        <div className="p-5">
                            <Link href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">{item.title}</h5>
                            </Link>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                {item.description.length > 50 ? item.description.substring(0, 50) + '...' : item.description}
                            </p>
                            <Link href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                {item.price}
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}