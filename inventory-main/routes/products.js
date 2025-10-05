import { Router } from 'express';
const router = Router();

const mockProducts = [
  { id: 1, name: 'Americano', description: 'Smooth espresso.', image: '/images/americano.jpg', price: 3.0, in_stock: 10 },
  { id: 2, name: 'Cappuccino', description: 'Espresso with steamed milk and foam.', image: '/images/cappuccino.jpg', price: 4.0, in_stock: 8 },
  { id: 3, name: 'Latte', description: 'Espresso with lots of steamed milk.', image: '/images/latte.jpg', price: 4.5, in_stock: 12 },
  { id: 4, name: 'Espresso', description: 'Strong classic espresso shot.', image: '/images/espresso.jpg', price: 2.5, in_stock: 15 },
  { id: 5, name: 'Mocha', description: 'Chocolate-flavored latte.', image: '/images/mocha.jpg', price: 5.0, in_stock: 7 },
  { id: 6, name: 'Macchiato', description: 'Espresso with a dash of foamed milk.', image: '/images/macchiato.jpg', price: 3.5, in_stock: 9 },
  { id: 7, name: 'Cold Brew', description: 'Smooth cold-brewed coffee.', image: '/images/cold_brew.jpg', price: 4.0, in_stock: 6 },
  { id: 8, name: 'Matcha Latte', description: 'Green tea latte with steamed milk.', image: '/images/matcha_latte.jpg', price: 4.5, in_stock: 5 },
  { id: 9, name: 'Chai Latte', description: 'Spiced tea latte.', image: '/images/chai_latte.jpg', price: 4.0, in_stock: 10 },
  { id: 10, name: 'Croissant', description: 'Buttery French pastry.', image: '/images/croissant.jpg', price: 3.0, in_stock: 12 }
];

router.get('/', (req, res) => {
  res.render('products', { title: 'Menu', products: mockProducts });
});

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
