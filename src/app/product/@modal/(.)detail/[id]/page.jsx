
// import { getData } from "@/services/products"
import Image from "next/image"
import Modal from "@/components/Modal";
import { getData } from "@/services/products"


export default async function DetailProduct(props) {
    const { params } = props
    const data = await getData(params)
    // console.log(data, params);
    return (
        <Modal>
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

        </Modal>

    )
}