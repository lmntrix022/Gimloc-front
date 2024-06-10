import { Product } from '../models/Product';

export async function fetchProductsFromDB() {
  try {
    // Récupérer les produits depuis la base de données
    const products = await Product.find().exec();
    return products;
  } catch (error) {
    console.error('Erreur lors de la récupération des produits:', error);
    return [];
  }
}
