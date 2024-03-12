
// import { getData } from "@/services/products"
import Image from "next/image"
import Modal from "@/components/Modal";
import { getData } from "@/services/products"


export default async function DetailProduct(props) {
    const { params } = props
    const data = await getData(params)
    console.log(data, params);
    const detail = data.detailProduct
    return (
        <Modal>
            <div className="relative h-96">
                <Image
                    src={detail.image}
                    alt="foto"
                    fill
                    className="w-full aspect-square object-cover"
                />

            </div>
            <div className="bg-white py-4 px-6">
                <h2>
                    {detail.name}
                </h2>
                <p>
                    Price : ${detail.price}
                </p>
            </div>

        </Modal>

    )
}