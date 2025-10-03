// routes/products.js — Ruth Task 6a
// Uses a mock data provider for now; Philip will replace with db/db.js

import { Router } from 'express';
const router = Router();

// mock data (Philip will wire real DB later)
const mockProducts = [
  {
    id: 1,
    name: 'Cedar House Blend',
    description: 'Smooth everyday drip blend for everyday sipping.',
    image: '/images/coffee_bag_placeholder.jpg',
    price: 12.99,
    in_stock: 24
  },
  {
    id: 2,
    name: 'Midnight Espresso',
    description: 'Bold, high-octane espresso roast with chocolate notes.',
    image: '/images/coffee_bag_placeholder.jpg',
    price: 14.99,
    in_stock: 12
  },
  {
    id: 3,
    name: 'Sugar Cream Cold Brew',
    description: 'Creamy & mellow brew with cocoa and caramel notes.',
    image: '/images/iced_coffee_placeholder.jpg',
    price: 5.99,
    in_stock: 20
  },
  {
    id: 4,
    name: 'Maple Pecan Scone',
    description: 'Buttery pastry with maple and toasted pecans.',
    image: '/images/pastry_placeholder.jpg',
    price: 3.99,
    in_stock: 18
  }
];

router.get('/', async (req, res) => {
  // When Philip connects DB, replace mockProducts with DB query results.
  res.render('products', { title: 'Products', products: mockProducts });
});

// Optional JSON endpoint (kept for future UI toggles)
router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const product = mockProducts.find(p => p.id === id);
  if (!product) return res.status(404).json({ error: 'Not found' });
  res.json({
    id: product.id,
    name: product.name,
    price: product.price.toFixed(2),
    in_stock: product.in_stock
  });
});

export default router;
