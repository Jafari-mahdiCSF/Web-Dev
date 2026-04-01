import random

from django.core.management.base import BaseCommand

from api.models import Category, Product


SHOP_DATA = {
    'Smartphones': [
        {
            'name': 'Samsung Galaxy S24 Ultra',
            'price': 549990,
            'description': 'Flagship Android phone with a bright display and great cameras.',
            'count': 12,
            'is_active': True,
            'rating': 4.8,
            'image_url': 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&h=500&fit=crop',
            'link': 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-256gb-chernyi-116043556/',
        },
        {
            'name': 'iPhone 15 Pro Max',
            'price': 649990,
            'description': 'Powerful iPhone with premium titanium build and smooth performance.',
            'count': 8,
            'is_active': True,
            'rating': 4.9,
            'image_url': 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&h=500&fit=crop',
            'link': 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-sinii-113138420/',
        },
        {
            'name': 'Google Pixel 8 Pro',
            'price': 449990,
            'description': 'Clean Android experience with AI camera tools.',
            'count': 10,
            'is_active': True,
            'rating': 4.7,
            'image_url': 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop',
            'link': 'https://kaspi.kz/shop/p/google-pixel-8-pro-256gb-chernyi-114411182/',
        },
    ],
    'Laptops': [
        {
            'name': 'MacBook Pro 16',
            'price': 1199990,
            'description': 'High-performance laptop for development and creative workflows.',
            'count': 6,
            'is_active': True,
            'rating': 4.9,
            'image_url': 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop',
            'link': 'https://kaspi.kz/shop/p/apple-macbook-pro-16-m3-pro-18-gb-ssd-512-gb-macos-145519560/',
        },
        {
            'name': 'ASUS ROG Zephyrus G14',
            'price': 899990,
            'description': 'Portable gaming laptop with strong battery and display.',
            'count': 5,
            'is_active': True,
            'rating': 4.8,
            'image_url': 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&h=500&fit=crop',
            'link': 'https://kaspi.kz/shop/p/asus-rog-zephyrus-g14-ga403ui-16gb-1tb-ssd-120753759/',
        },
        {
            'name': 'Dell XPS 15',
            'price': 999990,
            'description': 'Premium Windows laptop with OLED display and compact design.',
            'count': 4,
            'is_active': True,
            'rating': 4.7,
            'image_url': 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=500&fit=crop',
            'link': 'https://kaspi.kz/shop/p/dell-xps-15-9530-32gb-1tb-ssd-115888438/',
        },
    ],
    'Headphones': [
        {
            'name': 'Sony WH-1000XM5',
            'price': 149990,
            'description': 'Top-tier noise cancelling and long battery life.',
            'count': 18,
            'is_active': True,
            'rating': 4.9,
            'image_url': 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&h=500&fit=crop',
            'link': 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-105995922/',
        },
        {
            'name': 'Bose QuietComfort Ultra',
            'price': 179990,
            'description': 'Balanced sound and comfort with premium build quality.',
            'count': 11,
            'is_active': True,
            'rating': 4.8,
            'image_url': 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop',
            'link': 'https://kaspi.kz/shop/p/bose-quietcomfort-ultra-chernyi-115708310/',
        },
        {
            'name': 'JBL Tour One M2',
            'price': 89990,
            'description': 'Value-focused wireless headphones with ANC support.',
            'count': 24,
            'is_active': True,
            'rating': 4.6,
            'image_url': 'https://images.unsplash.com/photo-1577174881658-0f30157f72ea?w=500&h=500&fit=crop',
            'link': 'https://kaspi.kz/shop/p/jbl-tour-one-m2-chernyi-116225005/',
        },
    ],
    'Tablets': [
        {
            'name': 'iPad Pro 12.9',
            'price': 549990,
            'description': 'Large tablet for drawing, media, and productivity.',
            'count': 9,
            'is_active': True,
            'rating': 4.9,
            'image_url': 'https://images.unsplash.com/photo-1585790050230-5dd28404f647?w=500&h=500&fit=crop',
            'link': 'https://kaspi.kz/shop/p/apple-ipad-pro-12-9-2022-wi-fi-128gb-seryi-106394251/',
        },
        {
            'name': 'Samsung Galaxy Tab S9 Ultra',
            'price': 499990,
            'description': 'Large AMOLED display and strong multitasking on Android.',
            'count': 7,
            'is_active': True,
            'rating': 4.8,
            'image_url': 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop',
            'link': 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-ultra-5g-256gb-grafitovyi-115289858/',
        },
        {
            'name': 'Xiaomi Pad 6',
            'price': 169990,
            'description': 'Great value tablet for everyday media and work.',
            'count': 16,
            'is_active': True,
            'rating': 4.7,
            'image_url': 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&h=500&fit=crop',
            'link': 'https://kaspi.kz/shop/p/xiaomi-pad-6-8gb-128gb-sinii-114542834/',
        },
    ],
}


class Command(BaseCommand):
    help = 'Seed database with categories and demo products for lab6 frontend'

    EXTRA_ITEMS_RANGE = (5, 10)
    CATEGORY_TEMPLATES = {
        'Smartphones': {
            'brands': ['Samsung', 'Apple', 'Google', 'Xiaomi', 'OnePlus', 'Nothing', 'Honor'],
            'models': ['Edge', 'Pro', 'Plus', 'Ultra', 'Note', 'Max', 'Lite'],
            'price': (139990, 719990),
            'image_urls': [
                'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&h=500&fit=crop',
                'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop',
                'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop',
                'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&h=500&fit=crop',
            ],
        },
        'Laptops': {
            'brands': ['Apple', 'ASUS', 'Lenovo', 'Dell', 'HP', 'Acer', 'MSI'],
            'models': ['Book', 'Pro', 'Air', 'Studio', 'X', '15', '17'],
            'price': (249990, 1399990),
            'image_urls': [
                'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop',
                'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=500&fit=crop',
                'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&h=500&fit=crop',
            ],
        },
        'Headphones': {
            'brands': ['Sony', 'Bose', 'JBL', 'Sennheiser', 'Beats', 'Anker', 'Marshall'],
            'models': ['Tune', 'Quiet', 'Studio', 'Wave', 'Air', 'Plus', 'M2'],
            'price': (29990, 229990),
            'image_urls': [
                'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&h=500&fit=crop',
                'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop',
                'https://images.unsplash.com/photo-1577174881658-0f30157f72ea?w=500&h=500&fit=crop',
            ],
        },
        'Tablets': {
            'brands': ['Apple', 'Samsung', 'Xiaomi', 'Lenovo', 'Huawei', 'Honor'],
            'models': ['Tab', 'Pad', 'Pro', 'Air', 'Plus', 'Ultra'],
            'price': (119990, 649990),
            'image_urls': [
                'https://images.unsplash.com/photo-1585790050230-5dd28404f647?w=500&h=500&fit=crop',
                'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop',
                'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&h=500&fit=crop',
            ],
        },
    }

    def generate_random_products(self, category_name, count):
        config = self.CATEGORY_TEMPLATES[category_name]
        random_products = []

        for index in range(1, count + 1):
            brand = random.choice(config['brands'])
            model = random.choice(config['models'])
            random_products.append(
                {
                    'name': f'{brand} {model} {random.randint(10, 99)}',
                    'price': float(random.randint(*config['price'])),
                    'description': f'{brand} {category_name.lower()} model with balanced performance and modern design.',
                    'count': random.randint(3, 30),
                    'is_active': True,
                    'rating': round(random.uniform(4.0, 5.0), 1),
                    'image_url': random.choice(config['image_urls']),
                    'link': f'https://kaspi.kz/shop/search/?text={brand.lower()}+{category_name.lower()}+{index}',
                }
            )

        return random_products

    def handle(self, *args, **options):
        Product.objects.all().delete()
        Category.objects.all().delete()

        created_count = 0
        for category_name, products in SHOP_DATA.items():
            category, _ = Category.objects.get_or_create(name=category_name)
            extra_count = random.randint(*self.EXTRA_ITEMS_RANGE)
            all_products = products + self.generate_random_products(category_name, extra_count)
            for item in all_products:
                Product.objects.create(category=category, **item)
                created_count += 1

        self.stdout.write(self.style.SUCCESS(f'Seed completed: {created_count} products created.'))


