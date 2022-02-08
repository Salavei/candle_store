from django.contrib.auth.models import User
from django.test import TestCase
from candly.models import UserCandle, Product, Order
from candly.serializers import OrderSerializer, UserCandleSerializer, ProductSerializer


class OrderSerializerTestCase(TestCase):
    def test_ok(self):
        user1 = UserCandle.objects.create(username='NonyName', password='2121212', email='eddede@mail.ru')
        order1 = Order.objects.create(phone_number="+212121212", address="Минск, Суражская", candle_color=2,
                                      candle_flavor=1, candle_volume=1, candle_wick=2, status=1,
                                      description="Код от домофона 3322", user_id_id=user1.id)
        data = OrderSerializer(order1).data
        expected_data = {
            "id": order1.id,
            "phone_number": "+212121212",
            "address": "Минск, Суражская",
            "candle_color": 2,
            "candle_flavor": 1,
            "candle_volume": 1,
            "candle_wick": 2,
            "status": 1,
            "created_order": data['created_order'],
            "description": "Код от домофона 3322",
            "user_id": user1.id
        }
        self.assertEqual(expected_data, data)


class UserCandleSerializerTestCase(TestCase):
    def test_ok(self):
        user1 = UserCandle.objects.create(username='Test1', password='1234', email='test@mail.ru')
        data = UserCandleSerializer(user1).data
        expected_data = {
            "id": user1.id,
            "username": "Test1",
            "password": "1234",
            "email": "test@mail.ru"
        }
        self.assertEqual(expected_data, data)


class ProductSerializerTestCase(TestCase):
    def test_ok(self):
        product1 = Product.objects.create(candle_color=2, candle_flavor=3, candle_volume=2, candle_wick=1,
                                          description="Самые лучшие свечи",
                                          image=None,
                                          price="19.99", count=5)
        data = ProductSerializer(product1).data
        expected_data = {
            "id": product1.id,
            "candle_color": 2,
            "candle_flavor": 3,
            "candle_volume": 2,
            "candle_wick": 1,
            "description": "Самые лучшие свечи",
            "image": product1.image,
            "price": "19.99",
            "count": 5
        }
        self.assertEqual(expected_data, data)
