# Lab 8 - Django Backend (`shop-back`)

This folder contains a Django backend for the Online Shop app.

## Project structure

- Project: `shop-back` (Django module: `shop_back`)
- App: `api`
- Models: `Category`, `Product`
- Database: SQLite (`db.sqlite3`)

## Setup

```bash
cd "/home/jafari/Desktop/web dev/Web-Dev/lab8/shop-back"
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

## API endpoints

- `GET /api/products/` - list all products
- `GET /api/products/<int:id>/` - get one product by id
- `GET /api/categories/` - list all categories
- `GET /api/categories/<int:id>/` - get one category by id
- `GET /api/categories/<int:id>/products/` - list products by category

All endpoints return JSON.

