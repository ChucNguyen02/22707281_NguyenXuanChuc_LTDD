// src/db/product.repo.ts
import { getDb } from './db';
import { Product } from '../models/types';

export const getAllProducts = async (): Promise<Product[]> => {
  const db = getDb();
  return await db.getAllAsync<Product>('SELECT * FROM products');
};

export const getProductById = async (id: string): Promise<Product | null> => {
  const db = getDb();
  return await db.getFirstAsync<Product>('SELECT * FROM products WHERE product_id = ?', [id]);
};
