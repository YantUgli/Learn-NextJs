import { NextResponse } from "next/server";
const data = [
    {
        id: 1,
        name: 'Barang 1',
        price: 10000
    },
    {
        id: 2,
        name: 'Barang 2',
        price: 20000
    }
]

export async function GET(request) {
    // const {searchParams} = new URL(request.url)
    const searchParams = new URL(request.url)
    // const id = searchParams.get('id')
    const id = searchParams.searchParams.get('id')
    console.log('ini id', id);
    if (id) {
        const detailProduct = data.find((item)=> item.id === Number(id) )
        return NextResponse.json({
            status: 200,
            message: 'Success',
            detailProduct
        })
    }
   
    return NextResponse.json({
        status: 200,
        message: 'Success',
        data
    })
}