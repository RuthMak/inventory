# Coffee Shop Prototype — Handbook

## Purpose
This is a demo web app for a coffee shop to display its menu and check item availability. It shows how a small café could put its drinks and snacks online with minimal effort.

## Stack
- Node.js + Express (server)
- EJS (templating)
- SQLite (storage)
- Bootstrap (UI)

## Structure
- app.js — server setup
- routes/ — page + product API routes
- controllers/ — DB access (promises)
- db/ — SQLite file + seed script
- views/ — EJS templates (layout, pages, partials)
- public/ — CSS, JS, images

## Data flow
- `/products` → renders cards for all items  
- Button click → fetches `/products/api/:id` → shows price & availability in modal  

## How to add a new menu item
- Add image to `public/images/`  
- Insert new row into `products` table (via DB or new seed script)  

## Who did what
- Ruth: GitHub setup, UI layout decisions  
- Philip: Database, controllers, integration, docs
