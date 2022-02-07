from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import UserCandle, Order, Product


class OrderSerializer(ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'


class UserCandleSerializer(ModelSerializer):
    class Meta:
        model = UserCandle
        fields = '__all__'


class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
