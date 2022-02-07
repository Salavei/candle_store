from django.contrib import admin
from django.urls import path

from rest_framework.routers import SimpleRouter
from candly.views import ProductView, OrderView, OrderViewGet, UserCreateView, UserView


router = SimpleRouter()
router.register(r'product', ProductView)
router.register(r'order', OrderView)
router.register(r'order_get', OrderViewGet)
router.register(r'user_create', UserCreateView)
router.register(r'user', UserView)

urlpatterns = [
    path('admin/', admin.site.urls),
]
from . import settings
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns += router.urls
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += staticfiles_urlpatterns()

urlpatterns += router.urls
