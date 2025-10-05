// db/seed.js
import path from 'path';
import { fileURLToPath } from 'url';
import sqlite3 from 'sqlite3';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY,
    name TEXT,
    description TEXT,
    image TEXT,
    price REAL,
    in_stock INTEGER
  )`);

  const stmt = db.prepare(`INSERT INTO products (name, description, image, price, in_stock) VALUES (?, ?, ?, ?, ?)`);

  const products = [
    ["Americano","Smooth espresso diluted with hot water.","americano.jpg",3.00,1],
    ["Cappuccino","Espresso topped with steamed milk and foam.","cappuccino.jpg",4.00,1],
    ["Latte","Espresso with steamed milk and light foam.","latte.jpg",4.50,1],
    ["Espresso","Rich and bold espresso shot.","espresso.jpg",2.50,1],
    ["Croissant","Flaky, buttery pastry baked fresh daily.","croissant.jpg",2.75,1],
    ["Chai Latte","Spiced black tea with steamed milk.","chai_latte.jpg",4.25,1],
    ["Matcha Latte","Japanese green tea whisked with steamed milk.","matcha_latte.jpg",4.75,0],
    ["Cold Brew","Slow-steeped cold brew coffee served over ice.","cold_brew.jpg",3.75,1],
    ["Macchiato","Espresso marked with a dollop of foam.","macchiato.jpg",3.50,1],
    ["Mocha","Espresso with chocolate and steamed milk.","mocha.jpg",4.50,1]
  ];

  products.forEach(p => stmt.run(p));
  stmt.finalize();
});

db.close();
console.log("Database seeded!");
