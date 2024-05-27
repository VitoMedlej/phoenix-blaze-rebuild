import client from '@/database/mongodb';
import type {NextApiResponse}
from 'next';
import {NextResponse} from 'next/server'
import {type NextRequest} from 'next/server'

export async function GET(req : NextRequest, res : NextApiResponse) {
try {

    const ProductsCollection = await client
        .db("GNM")
        .collection("Images");

    const Images = await ProductsCollection
    .find({})
    .limit(20)
    .toArray()

    const BrandsCollection = await client
    .db("GNM")
    .collection("Brands");

const Brands = await BrandsCollection
.find({})
.limit(500)
.toArray()

    if (!Images) {
        return NextResponse.json({success: false});
    }

    return NextResponse.json({
        success: true,
        data: {
            Images,
            Brands
        }
    });
}

catch (error) {
    console.log('error get-Images: ', error);

}
}


export const dynamic = 'force-dynamic'
