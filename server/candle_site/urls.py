from . import settings
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.contrib import admin
from django.urls import path
from rest_framework.routers import SimpleRouter
from candly.views import ProductView, OrderView, OrderViewGet, UserCreateView, UserView, ProductViewGet
from django.urls import re_path
from rest_framework_swagger.views import get_swagger_view

router = SimpleRouter()
router.register(r'product', ProductView, basename='product')
router.register(r'product_get', ProductViewGet, basename='product_get')
router.register(r'order', OrderView, basename='order')
router.register(r'order_get', OrderViewGet, basename='order_get')
router.register(r'user_create', UserCreateView, basename='user_create')
router.register(r'user', UserView, basename='user_get')

urlpatterns = [
    re_path(r'^$', get_swagger_view(title='Rest API Document')),
    path('admin/', admin.site.urls),
]

urlpatterns += router.urls
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += staticfiles_urlpatterns()

urlpatterns += router.urls
