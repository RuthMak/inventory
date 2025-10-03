// server.js (ESM)
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

// Recreate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// EJS & static
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Nav highlight locals
app.use((req, res, next) => {
  res.locals.currentPath = req.path;
  res.locals.siteTitle = 'Cedar Bean Coffee';
  next();
});

// Import routers (ESM default exports)
import indexRoutes from './routes/index.js';
import productRoutes from './routes/products.js';

app.use('/', indexRoutes);
app.use('/products', productRoutes);

app.listen(PORT, () => {
  console.log(`IN-ventory running at http://localhost:${PORT}`);
});
