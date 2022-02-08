import json

from rest_framework.test import APITestCase
from django.urls import reverse
from candly.serializers import OrderSerializer, ProductSerializer, UserCandleSerializer
from candly.models import UserCandle, Order, Product
from rest_framework import status


class OrderAPITestCase(APITestCase):
    def setUp(self):
        self.user1 = UserCandle.objects.create(username='NonyName', password='2121212', email='eddede@mail.ru')
        self.user2 = UserCandle.objects.create(username='Татьяна', password='fr3f3f3r', email='tanya@mail.ru')
        self.order1 = Order.objects.create(phone_number="+212121212", address="Минск, Суражская", candle_color=2,
                                           candle_flavor=1, candle_volume=1, candle_wick=2, status=1,
                                           description="Код от домофона 3322", user_id_id=self.user1.id)

    def test_get(self):
        url = reverse('order_get-detail', args=(self.order1.id,))
        response = self.client.get(url)
        order = Order.objects.all().get(id=self.order1.id)
        serializer_data = OrderSerializer(order).data
        self.assertEqual(status.HTTP_200_OK, response.status_code)
        self.assertEqual(serializer_data, response.data)

    def test_create(self):
        self.assertEqual(1, Order.objects.all().count())
        url = reverse('order-list')
        data = {
            "phone_number": "+3753323232",
            "address": "Льва Толстого д22",
            "candle_color": 1,
            "candle_flavor": 3,
            "candle_volume": 3,
            "candle_wick": 1,
            "description": "Доставить после 17:00",
            "user_id": self.user2.id
        }
        json_data = json.dumps(data, ensure_ascii=False)
        print('json_data', json_data)
        response = self.client.post(url, data=json_data, content_type='application/json')
        self.assertEqual(status.HTTP_201_CREATED, response.status_code)
        self.assertEqual(2, Order.objects.all().count())


class ProductAPITestCase(APITestCase):
    def setUp(self):
        self.product1 = Product.objects.create(candle_color=2, candle_flavor=3, candle_volume=2, candle_wick=1,
                                               description="Самые лучшие свечи",
                                               image=None,
                                               price="19.99", count=5)

    def test_get(self):
        url = reverse('product_get-detail', args=(self.product1.id,))
        response = self.client.get(url)
        product = Product.objects.all().get(id=self.product1.id)
        serializer_data = ProductSerializer(product).data
        self.assertEqual(status.HTTP_200_OK, response.status_code)
        self.assertEqual(serializer_data, response.data)

    def test_update(self):
        self.assertEqual(1, Product.objects.all().count())
        url = reverse('product-detail', args=(self.product1.id,))
        data = {
            "id": self.product1.id,
            "candle_color": 2,
            "candle_flavor": 3,
            "candle_volume": 2,
            "candle_wick": 1,
            "description": "Самые лучшие свечи",
            "price": "19.99",
            "count": 10
        }
        json_data = json.dumps(data, ensure_ascii=False)
        response = self.client.put(url, data=json_data, content_type='application/json')
        self.assertEqual(status.HTTP_200_OK, response.status_code)
        self.product1.refresh_from_db()
        print(self.product1.count)
        self.assertEqual(10, self.product1.count)


class UserCandleAPITestCase(APITestCase):
    def setUp(self):
        self.user1 = UserCandle.objects.create(username='Татьяна', password='fr3f3f3r', email='tanya@mail.ru')

    def test_get(self):
        url = reverse('user_get-detail', args=(self.user1.id,))
        response = self.client.get(url)
        user = UserCandle.objects.all().get(id=self.user1.id)
        serializer_data = UserCandleSerializer(user).data
        self.assertEqual(status.HTTP_200_OK, response.status_code)
        self.assertEqual(serializer_data, response.data)

    def test_create(self):
        self.assertEqual(1, UserCandle.objects.all().count())
        url = reverse('user_create-list')
        data = {
            "username": "Иллон Маск",
            "password": "Tesla007",
            "email": "illon.mars@mail.ru"
        }
        json_data = json.dumps(data, ensure_ascii=False)
        response = self.client.post(url, data=json_data, content_type='application/json')
        self.assertEqual(status.HTTP_201_CREATED, response.status_code)
        self.assertEqual(2, UserCandle.objects.all().count())


