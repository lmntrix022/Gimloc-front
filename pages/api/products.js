import { mongooseConnect } from '../../lib/mongoose';
import { Product } from '../../models/Product';

export default async function handler(req, res) {
  await mongooseConnect();

  const { category } = req.query;

  try {
    const query = category ? { category } : {};
    const products = await Product.find(query).populate('category');
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
}
