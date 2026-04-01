from rest_framework import serializers

from api.models import Category, Product


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']


class ProductSerializer(serializers.ModelSerializer):
    category_id = serializers.PrimaryKeyRelatedField(
        source='category',
        queryset=Category.objects.all(),
    )

    class Meta:
        model = Product
        fields = [
            'id',
            'name',
            'price',
            'description',
            'count',
            'is_active',
            'rating',
            'image_url',
            'link',
            'category_id',
        ]

