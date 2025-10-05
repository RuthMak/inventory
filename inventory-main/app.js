import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import indexRoutes from './routes/index.js';
import productRoutes from './routes/products.js';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.locals.currentPath = req.path;
  next();
});

app.use('/', indexRoutes);
app.use('/products', productRoutes);

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
