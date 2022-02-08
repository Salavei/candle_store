from .models import UserCandle, Order, Product
from .serializers import UserCandleSerializer, OrderSerializer, ProductSerializer
from rest_framework.viewsets import ModelViewSet, GenericViewSet, ReadOnlyModelViewSet, ViewSet
from rest_framework import mixins
from rest_framework.response import Response
from rest_framework import status


class ProductView(mixins.UpdateModelMixin, GenericViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductViewGet(ReadOnlyModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class OrderView(mixins.CreateModelMixin, GenericViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(f'Заказ успешно оставлен!!', status=status.HTTP_201_CREATED, headers=headers)


class OrderViewGet(ReadOnlyModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class UserCreateView(mixins.CreateModelMixin, GenericViewSet):
    queryset = UserCandle.objects.all()
    serializer_class = UserCandleSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(f'Регистрация прошла успешно!!', status=status.HTTP_201_CREATED, headers=headers)


class UserView(ReadOnlyModelViewSet):
    queryset = UserCandle.objects.all()
    serializer_class = UserCandleSerializer
