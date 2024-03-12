
import { getData } from "@/services/products"
import Image from "next/image"


export default async function DetailProduct(props) {
    const { params } = props
    const data = await getData(params)
    // console.log(data, params);
    return (
        <div className="container mx-auto my-10">
            <div className="w-1/2 mx-auto border border-gray-700 rounded-md overflow-hidden">
                <div className="relative h-96">
                    <Image
                        src={data.image}
                        alt="foto"
                        fill
                        className="w-full aspect-square object-cover"
                    />

                </div>
                <div className="bg-white py-4 px-6">
                    <h2>
                        {data.title}
                    </h2>
                    <p>
                        Price : ${data.price}
                    </p>
                </div>
            </div>
        </div>
    )
}