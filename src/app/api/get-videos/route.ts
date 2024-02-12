import client from '@/database/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

// fake data
// import products from '../../utils/data/products';

export default async (_req: NextApiRequest, res: NextApiResponse) => {

  // const product = _req.body.product
  if (_req.method === 'GET') {


    let limit = typeof Number(_req.query.limit) === 'number' ? Number(_req.query.limit) : 50;
    // maloma ma7sora
    // 5abera basera
    // kabera
    // Process a POST request
    // if (!product) return res.status(400).json({success:false})
       const ProductsCollection = await client.db("DIY").collection("Videos")
       const docs = await ProductsCollection.find({}).limit(limit ).toArray();
       console.log('docs: ', docs);
      const products : any[] = [];
      // console.log('products: ', products);
       await docs.forEach((prod:any) =>{
        console.log('prod: ', prod);
              products.push(prod);
        })
        if (products.length > 0) {
            return res.status(200).json(products);
          }
}
return res.status(404).json(null);
    // return res.status(200).send(products)
}
