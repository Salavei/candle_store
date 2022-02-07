from django.shortcuts import render
from .models import UserCandle, Order, Product
from .serializers import UserCandleSerializer, OrderSerializer, ProductSerializer
from rest_framework.viewsets import ModelViewSet, GenericViewSet, ReadOnlyModelViewSet
from rest_framework import mixins


# Create your views here.
class ProductView(ReadOnlyModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class OrderView(mixins.CreateModelMixin, GenericViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class OrderViewGet(ReadOnlyModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class UserCreateView(mixins.CreateModelMixin, GenericViewSet):
    queryset = UserCandle.objects.all()
    serializer_class = UserCandleSerializer


class UserView(ReadOnlyModelViewSet):
    queryset = UserCandle.objects.all()
    serializer_class = UserCandleSerializer