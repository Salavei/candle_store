from django.db import models


class UserCandle(models.Model):
    username = models.CharField(max_length=255, unique=True, null=False)
    password = models.CharField(max_length=255, null=False)
    email = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.username}'

    class Meta:
        verbose_name = 'Клиент'
        verbose_name_plural = 'Клиенты'


class Order(models.Model):
    user_id = models.ForeignKey(UserCandle, related_name='user_ordering', on_delete=models.CASCADE)
    phone_number = models.CharField(max_length=17, null=False)
    address = models.CharField(max_length=255, null=False)
    COLOR_CHOICES = (
        (1, 'BLACK'),
        (2, 'WHITE'),
        (3, 'BLUE'),
    )
    FLAVOR_CHOICES = (
        (1, 'Цитрусовые'),
        (2, 'Пряные'),
        (3, 'Хвойные'),
        (4, 'Фруктовые'),
        (5, 'Травяные'),
    )
    VOLUME_CHOICES = (
        (1, 'small'),
        (2, 'middle'),
        (3, 'big'),
    )

    WICK_CHOICES = (
        (1, 'Плоские фитили'),
        (2, 'Квадратные фитили'),
        (3, 'Армированные фитили'),
    )

    STATUS_CHOICES = (
        (1, 'In processing'),
        (2, 'sent'),
    )
    candle_color = models.PositiveIntegerField(choices=COLOR_CHOICES, null=False)
    candle_flavor = models.PositiveIntegerField(choices=FLAVOR_CHOICES, null=False)
    candle_volume = models.PositiveIntegerField(choices=VOLUME_CHOICES, null=False)
    candle_wick = models.PositiveIntegerField(choices=WICK_CHOICES, null=False)
    status = models.PositiveIntegerField(choices=STATUS_CHOICES, null=True, default='1', db_index=True)
    created_order = models.DateTimeField(auto_now_add=True, db_index=True)
    description = models.TextField(max_length=1000, null=True, blank=True)

    def __str__(self):
        return f'{self.user_id} статус отправки : {self.status} (1 - In processing , 2 - sent )'

    class Meta:
        ordering = ('status', 'created_order')
        verbose_name = 'Заказ'
        verbose_name_plural = 'Заказы'


class Product(models.Model):
    COLOR_CHOICES = (
        (1, 'BLACK'),
        (2, 'WHITE'),
        (3, 'BLUE'),
    )
    FLAVOR_CHOICES = (
        (1, 'Цитрусовые'),
        (2, 'Пряные'),
        (3, 'Хвойные'),
        (4, 'Фруктовые'),
        (5, 'Травяные'),
    )
    VOLUME_CHOICES = (
        (1, 'small'),
        (2, 'middle'),
        (3, 'big'),
    )

    WICK_CHOICES = (
        (1, 'Плоские фитили'),
        (2, 'Квадратные фитили'),
        (3, 'Армированные фитили'),
    )
    candle_color = models.PositiveIntegerField(choices=COLOR_CHOICES, null=False)
    candle_flavor = models.PositiveIntegerField(choices=FLAVOR_CHOICES, null=False)
    candle_volume = models.PositiveIntegerField(choices=VOLUME_CHOICES, null=False)
    candle_wick = models.PositiveIntegerField(choices=WICK_CHOICES, null=False)
    description = models.TextField(max_length=1000, null=True, blank=False)
    image = models.ImageField(upload_to='product/%Y/%m/%d', blank=False)
    price = models.DecimalField(max_digits=5, decimal_places=2)

    count = models.IntegerField(null=True, db_index=True)

    def __str__(self):
        return f'{self.id} количество на складе : {self.count}'

    class Meta:
        ordering = ('count',)
        verbose_name = 'Свеча'
        verbose_name_plural = 'Свечи'
