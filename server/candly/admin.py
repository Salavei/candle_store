from django.contrib import admin
from .models import UserCandle, Order, Product

admin.site.site_header = 'Админ раздел'


@admin.register(UserCandle)
class UserAdmin(admin.ModelAdmin):
    pass


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_filter = ('status',)


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_filter = ('count',)
