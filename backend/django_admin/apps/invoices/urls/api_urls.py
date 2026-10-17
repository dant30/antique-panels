from django.urls import path, include
from rest_framework.routers import DefaultRouter
from ..views.api import InvoicesViewSet

router = DefaultRouter()
router.register(r'', InvoicesViewSet, basename='invoices')

urlpatterns = [
    path('', include(router.urls)),
]
